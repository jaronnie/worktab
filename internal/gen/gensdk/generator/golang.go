package generator

import (
	"bytes"
	"fmt"
	"os"
	"path/filepath"

	"github.com/zeromicro/go-zero/tools/goctl/util/pathx"

	"github.com/jzero-io/jzero/internal/gen/gensdk/config"
	"github.com/jzero-io/jzero/internal/gen/gensdk/jparser"
	"github.com/jzero-io/jzero/internal/gen/gensdk/vars"

	"github.com/jhump/protoreflect/desc"
	"github.com/jzero-io/jzero/internal/gen"
	"github.com/pkg/errors"

	"github.com/jhump/protoreflect/desc/protoparse"
	"github.com/jzero-io/jzero/embeded"
	"github.com/jzero-io/jzero/pkg/templatex"
	"github.com/zeromicro/go-zero/tools/goctl/api/gogen"
	apiparser "github.com/zeromicro/go-zero/tools/goctl/api/parser"
	"github.com/zeromicro/go-zero/tools/goctl/api/spec"
	"github.com/zeromicro/go-zero/tools/goctl/rpc/execx"
)

func init() {
	Register("go", func(config config.Config) (Generator, error) {
		return &Golang{
			config: &config,
		}, nil
	})
}

type Golang struct {
	config *config.Config

	wd string
}

func (g *Golang) Gen() ([]*GeneratedFile, error) {
	wd, err := os.Getwd()
	if err != nil {
		return nil, err
	}

	g.wd = wd

	// parse api
	var apiSpecs []*spec.ApiSpec

	if pathx.FileExists(g.config.ApiDir) {
		mainApiFilePath, isDelete, err := gen.GetMainApiFilePath(g.config.ApiDir)
		if err != nil {
			return nil, err
		}

		apiSpec, err := apiparser.Parse(mainApiFilePath)
		if err != nil {
			return nil, err
		}

		if isDelete {
			_ = os.Remove(mainApiFilePath)
		}

		apiSpecs = append(apiSpecs, apiSpec)
	}

	var protoFiles []string

	if pathx.FileExists(g.config.ProtoDir) {
		protoFiles, err = gen.GetProtoFilepath(g.config.ProtoDir)
		if err != nil {
			return nil, err
		}

	}

	var fds []*desc.FileDescriptor

	// parse proto
	var protoParser protoparse.Parser
	if len(protoFiles) > 0 {
		protoParser.ImportPaths = []string{g.config.ProtoDir}
		var protoRelFiles []string
		for _, v := range protoFiles {
			rel, err := filepath.Rel(g.config.ProtoDir, v)
			if err != nil {
				return nil, err
			}
			protoRelFiles = append(protoRelFiles, rel)
		}
		fds, err = protoParser.ParseFiles(protoRelFiles...)
		if err != nil {
			return nil, err
		}
	}

	rhis, err := jparser.Parse(g.config, fds, apiSpecs)
	if err != nil {
		return nil, err
	}

	var files []*GeneratedFile

	// gen clientset.go and fake clientset
	clientsetFiles, err := g.genClientSets(getScopes(rhis))
	if err != nil {
		return nil, err
	}
	files = append(files, clientsetFiles...)

	// gen direct_client and fake_direct_client
	directClientFiles, err := g.genDirectClients()
	if err != nil {
		return nil, err
	}
	files = append(files, directClientFiles...)

	restFrameFiles, err := g.genRestFrame()
	if err != nil {
		return nil, err
	}
	files = append(files, restFrameFiles...)

	for _, scope := range getScopes(rhis) {
		scopeClientFiles, err := g.genScopeClients(scope, getScopeResources(rhis[vars.Scope(scope)]))
		if err != nil {
			return nil, err
		}
		files = append(files, scopeClientFiles...)

		// gen api types model
		if len(apiSpecs) > 0 {
			apiTypesFile, err := g.genApiTypesModel(apiSpecs[0].Types)
			if err != nil {
				return nil, err
			}
			files = append(files, apiTypesFile)
		}

		if len(protoFiles) > 0 {
			// gen pb model
			pbFiles, err := g.genPbTypesModel(protoFiles)
			if err != nil {
				return nil, err
			}
			files = append(files, pbFiles...)
		}

		for _, resource := range getScopeResources(rhis[vars.Scope(scope)]) {
			scopeResourcesFiles, err := g.genScopeResources(rhis, scope, resource)
			if err != nil {
				return nil, err
			}
			files = append(files, scopeResourcesFiles...)
		}
	}

	// go mod file
	goModFile, err := g.genGoMod()
	if err != nil {
		return nil, err
	}
	files = append(files, goModFile)

	return files, nil
}

func (g *Golang) genGoMod() (*GeneratedFile, error) {
	tmpDir, err := os.MkdirTemp(os.TempDir(), "")
	if err != nil {
		return nil, err
	}
	defer os.RemoveAll(tmpDir)

	resp, err := execx.Run(fmt.Sprintf("go mod init %s", g.config.Module), tmpDir)
	if err != nil {
		return nil, errors.Errorf("err: [%v], resp: [%s]", err, resp)
	}

	goModBytes, err := os.ReadFile(filepath.Join(tmpDir, "go.mod"))
	if err != nil {
		return nil, err
	}

	return &GeneratedFile{
		Skip:    true,
		Path:    "go.mod",
		Content: *bytes.NewBuffer(goModBytes),
	}, nil
}

func (g *Golang) genClientSets(scopes []string) ([]*GeneratedFile, error) {
	var clientSetFiles []*GeneratedFile

	clientGoBytes, err := templatex.ParseTemplate(map[string]interface{}{
		"APP":    g.config.APP,
		"Module": g.config.Module,
		"Scopes": scopes,
	}, embeded.ReadTemplateFile(filepath.Join("client", "client-go", "clientset.go.tpl")))
	if err != nil {
		return nil, err
	}
	clientSetFiles = append(clientSetFiles, &GeneratedFile{
		Path:    "clientset.go",
		Content: *bytes.NewBuffer(clientGoBytes),
	})

	// gen fake clientset
	fakeClientGoBytes, err := templatex.ParseTemplate(map[string]interface{}{
		"APP":    g.config.APP,
		"Module": g.config.Module,
		"Scopes": scopes,
	}, embeded.ReadTemplateFile(filepath.Join("client", "client-go", "fake", "fake_clientset.go.tpl")))
	if err != nil {
		return nil, err
	}
	clientSetFiles = append(clientSetFiles, &GeneratedFile{
		Path:    filepath.Join("fake", "fake_clientset.go"),
		Content: *bytes.NewBuffer(fakeClientGoBytes),
	})

	return clientSetFiles, nil
}

func (g *Golang) genDirectClients() ([]*GeneratedFile, error) {
	var directClientFiles []*GeneratedFile

	directClientGoBytes, err := templatex.ParseTemplate(map[string]interface{}{
		"Module": g.config.Module,
	}, embeded.ReadTemplateFile(filepath.Join("client", "client-go", "typed", "direct_client.go.tpl")))
	if err != nil {
		return nil, err
	}
	directClientFiles = append(directClientFiles, &GeneratedFile{
		Path:    filepath.Join("typed", "direct_client.go"),
		Content: *bytes.NewBuffer(directClientGoBytes),
	})

	fakeDirectClientGoBytes, err := templatex.ParseTemplate(map[string]interface{}{
		"Module": g.config.Module,
	}, embeded.ReadTemplateFile(filepath.Join("client", "client-go", "typed", "fake", "fake_direct_client.go.tpl")))
	if err != nil {
		return nil, err
	}
	directClientFiles = append(directClientFiles, &GeneratedFile{
		Path:    filepath.Join("typed", "fake", "fake_direct_client.go"),
		Content: *bytes.NewBuffer(fakeDirectClientGoBytes),
	})

	return directClientFiles, nil
}

func (g *Golang) genRestFrame() ([]*GeneratedFile, error) {
	var restFrameFiles []*GeneratedFile
	var err error

	// gen rest frame
	restFrameFiles = append(restFrameFiles, &GeneratedFile{
		Path:    filepath.Join("rest", "client.go"),
		Content: *bytes.NewBuffer(embeded.ReadTemplateFile(filepath.Join("client", "client-go", "rest", "client.go.tpl"))),
	})

	restFrameFiles = append(restFrameFiles, &GeneratedFile{
		Path:    filepath.Join("rest", "option.go"),
		Content: *bytes.NewBuffer(embeded.ReadTemplateFile(filepath.Join("client", "client-go", "rest", "option.go.tpl"))),
	})

	restFrameFiles = append(restFrameFiles, &GeneratedFile{
		Path:    filepath.Join("rest", "request.go"),
		Content: *bytes.NewBuffer(embeded.ReadTemplateFile(filepath.Join("client", "client-go", "rest", "request.go.tpl"))),
	})

	return restFrameFiles, err
}

func (g *Golang) genScopeClients(scope string, resources []string) ([]*GeneratedFile, error) {
	var scopeClientFiles []*GeneratedFile

	scopeClientGoBytes, err := templatex.ParseTemplate(map[string]interface{}{
		"Scope":     scope,
		"Module":    g.config.Module,
		"Resources": resources,
	}, embeded.ReadTemplateFile(filepath.Join("client", "client-go", "typed", "scope_client.go.tpl")))
	if err != nil {
		return nil, err
	}

	scopeClientFiles = append(scopeClientFiles, &GeneratedFile{
		Path:    filepath.Join("typed", scope, scope+"_client.go"),
		Content: *bytes.NewBuffer(scopeClientGoBytes),
	})

	fakeScopeClientGoBytes, err := templatex.ParseTemplate(map[string]interface{}{
		"Scope":     scope,
		"Module":    g.config.Module,
		"Resources": resources,
	}, embeded.ReadTemplateFile(filepath.Join("client", "client-go", "typed", "fake", "fake_scope_client.go.tpl")))
	if err != nil {
		return nil, err
	}
	scopeClientFiles = append(scopeClientFiles, &GeneratedFile{
		Path:    filepath.Join("typed", scope, "fake", "fake_"+scope+"_client.go"),
		Content: *bytes.NewBuffer(fakeScopeClientGoBytes),
	})

	return scopeClientFiles, nil
}

func (g *Golang) genScopeResources(rhis vars.ScopeResourceHTTPInterfaceMap, scope string, resource string) ([]*GeneratedFile, error) {
	var scopeResourceFiles []*GeneratedFile

	// resource_expansion.go
	resourceExpansionGoBytes, err := templatex.ParseTemplate(map[string]interface{}{
		"Module":   g.config.Module,
		"Scope":    scope,
		"Resource": resource,
	}, embeded.ReadTemplateFile(filepath.Join("client", "client-go", "typed", "resource_expansion.go.tpl")))
	if err != nil {
		return nil, err
	}
	scopeResourceFiles = append(scopeResourceFiles, &GeneratedFile{
		Path:    filepath.Join("typed", scope, resource+"_expansion.go"),
		Content: *bytes.NewBuffer(resourceExpansionGoBytes),
	})

	// fake_resource_expansion.go
	fakeResourceExpansionGoBytes, err := templatex.ParseTemplate(map[string]interface{}{
		"Resource": resource,
	}, embeded.ReadTemplateFile(filepath.Join("client", "client-go", "typed", "fake", "fake_resource_expansion.go.tpl")))
	if err != nil {
		return nil, err
	}
	scopeResourceFiles = append(scopeResourceFiles, &GeneratedFile{
		Path:    filepath.Join("typed", scope, "fake", "fake_"+resource+"_expansion.go"),
		Content: *bytes.NewBuffer(fakeResourceExpansionGoBytes),
	})

	resourceGoBytes, err := templatex.ParseTemplate(map[string]interface{}{
		"GoModule":           g.config.Module,
		"Scope":              scope,
		"Resource":           resource,
		"HTTPInterfaces":     rhis[vars.Scope(scope)][vars.Resource(resource)],
		"IsWrapHTTPResponse": g.config.WrapResponse,
		"GoImportPaths":      g.genImports(rhis[vars.Scope(scope)][vars.Resource(resource)]),
	}, embeded.ReadTemplateFile(filepath.Join("client", "client-go", "typed", "resource.go.tpl")))
	if err != nil {
		return nil, err
	}
	scopeResourceFiles = append(scopeResourceFiles, &GeneratedFile{
		Path:    filepath.Join("typed", scope, resource+".go"),
		Content: *bytes.NewBuffer(resourceGoBytes),
	})

	// fake resource.go
	fakeResourceGoBytes, err := templatex.ParseTemplate(map[string]interface{}{
		"GoModule":           g.config.Module,
		"Scope":              scope,
		"Resource":           resource,
		"HTTPInterfaces":     rhis[vars.Scope(scope)][vars.Resource(resource)],
		"IsWrapHTTPResponse": true,
		"GoImportPaths":      g.genImports(rhis[vars.Scope(scope)][vars.Resource(resource)]),
	}, embeded.ReadTemplateFile(filepath.Join("client", "client-go", "typed", "fake", "fake_resource.go.tpl")))
	if err != nil {
		return nil, err
	}
	scopeResourceFiles = append(scopeResourceFiles, &GeneratedFile{
		Path:    filepath.Join("typed", scope, "fake", "fake_"+resource+".go"),
		Content: *bytes.NewBuffer(fakeResourceGoBytes),
	})

	return scopeResourceFiles, nil
}

func (g *Golang) genApiTypesModel(types []spec.Type) (*GeneratedFile, error) {
	typesGoString, err := gogen.BuildTypes(types)
	if err != nil {
		return nil, err
	}

	typesGoBytes, err := templatex.ParseTemplate(map[string]interface{}{
		"Types": typesGoString,
	}, embeded.ReadTemplateFile(filepath.Join("client", "client-go", "model", "types", "scope_types.go.tpl")))
	if err != nil {
		return nil, err
	}
	return &GeneratedFile{
		Path:    filepath.Join("model", g.config.APP, "types", "types.go"),
		Content: *bytes.NewBuffer(typesGoBytes),
	}, nil
}

func (g *Golang) genPbTypesModel(protoFiles []string) ([]*GeneratedFile, error) {
	tmpDir, err := os.MkdirTemp(os.TempDir(), "")
	if err != nil {
		return nil, err
	}
	defer os.RemoveAll(tmpDir)

	for _, pf := range protoFiles {
		resp, err := execx.Run(fmt.Sprintf("protoc -I%s --go_out=%s %s", g.config.ProtoDir, tmpDir, pf), g.wd)
		if err != nil {
			return nil, errors.Errorf("err: [%v], resp: [%s]", err, resp)
		}
	}

	var generatedFiles []*GeneratedFile

	err = filepath.Walk(tmpDir, func(filePath string, fileInfo os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		if fileInfo.IsDir() {
			return nil
		}

		content, err := os.ReadFile(filePath)
		if err != nil {
			return fmt.Errorf("failed to read file: %v", err)
		}

		rel, err := filepath.Rel(tmpDir, filePath)
		if err != nil {
			return err
		}

		generatedFile := &GeneratedFile{
			Path:    filepath.Join("model", g.config.APP, rel),
			Content: *bytes.NewBuffer(content),
		}

		generatedFiles = append(generatedFiles, generatedFile)

		return nil
	})
	if err != nil {
		return nil, fmt.Errorf("failed to process directory: %v", err)
	}

	return generatedFiles, nil
}

func (g *Golang) genImports(infs []*vars.HTTPInterface) []string {
	var imports []string
	for _, inf := range infs {
		imports = append(imports, fmt.Sprintf("%s/model/%s/%s", g.config.Module, g.config.APP, inf.RequestBody.Package))
		imports = append(imports, fmt.Sprintf("%s/model/%s/%s", g.config.Module, g.config.APP, inf.ResponseBody.Package))
	}
	return imports
}
