package credential

import (
	"context"

	"github.com/jzero-io/jzero-go"
	"github.com/jzero-io/jzero-go/model/jzero/pb/credentialpb"
	"github.com/jzero-io/jzero-go/rest"
	typedjzero "github.com/jzero-io/jzero-go/typed/jzero"
)

func GetCredentialList() (*credentialpb.CredentialListResponse, error) {
	var clientset typedjzero.JzeroInterface
	var err error

	clientset, err = jzero.NewClientWithOptions(
		rest.WithAddr("127.0.0.1"),
		rest.WithPort("8001"),
		rest.WithProtocol("http"))
	if err != nil {
		panic(err)
	}

	// proto gateway interface
	return clientset.Credential().CredentialList(context.Background(), &credentialpb.CredentialListRequest{
		Page: 1,
		Size: 10,
	})
}