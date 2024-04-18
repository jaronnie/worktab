import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as l,c,a as d,w as a,b as p,d as t,e}from"./app-tXgUQRLs.js";const h={},g=p(`<p>由于 jzero 基于 go-zero 框架, 需要先安装 goctl 工具</p><div class="hint-container tip"><p class="hint-container-title">如果觉得需要安装的工具太多可以采取使用 Docker 的方式, 工具全部集成到容器中</p></div><h2 id="安装-goctl" tabindex="-1"><a class="header-anchor" href="#安装-goctl"><span>安装 goctl</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/zeromicro/go-zero/tools/goctl@latest

goctl <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-proto-相关工具" tabindex="-1"><a class="header-anchor" href="#安装-proto-相关工具"><span>安装 proto 相关工具</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>goctl <span class="token function">env</span> check <span class="token parameter variable">--install</span> <span class="token parameter variable">--verbose</span> <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装-jzero" tabindex="-1"><a class="header-anchor" href="#安装-jzero"><span>安装 jzero</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/jaronnie/jzero@latest

jzero version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-goreleaser" tabindex="-1"><a class="header-anchor" href="#安装-goreleaser"><span>安装 goreleaser</span></a></h2><div class="hint-container tip"><p class="hint-container-title">jzero version &gt;= v0.7.3 引入 .goreleaser.yaml</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/goreleaser/goreleaser@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装-task" tabindex="-1"><a class="header-anchor" href="#安装-task"><span>安装 task</span></a></h2><div class="hint-container tip"><p class="hint-container-title">jzero version &gt;= v0.7.3 引入 Taskfile.yml</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/go-task/task/v3/cmd/task@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h2>`,15),m=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"docker"),t(` pull jaronnie/jzero:latest
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),u=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"docker"),t(` pull jaronnie/jzero:latest-arm64
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1);function v(b,k){const r=o("CodeTabs");return l(),c("div",null,[g,d(r,{id:"32",data:[{id:"Docker(amd64)"},{id:"Docker(arm64)"}],"tab-id":"shell"},{title0:a(({value:s,isActive:n})=>[t("Docker(amd64)")]),title1:a(({value:s,isActive:n})=>[t("Docker(arm64)")]),tab0:a(({value:s,isActive:n})=>[m]),tab1:a(({value:s,isActive:n})=>[u]),_:1},8,["data"])])}const f=i(h,[["render",v],["__file","install.html.vue"]]),_=JSON.parse('{"path":"/guide/install.html","title":"环境准备","lang":"zh-CN","frontmatter":{"title":"环境准备","icon":"download","order":2,"description":"由于 jzero 基于 go-zero 框架, 需要先安装 goctl 工具 如果觉得需要安装的工具太多可以采取使用 Docker 的方式, 工具全部集成到容器中 安装 goctl 安装 proto 相关工具 安装 jzero 安装 goreleaser jzero version >= v0.7.3 引入 .goreleaser.yaml 安装 ta...","head":[["meta",{"property":"og:url","content":"https://jaronnie.github.io/jzero/guide/install.html"}],["meta",{"property":"og:site_name","content":"Jzero Framework"}],["meta",{"property":"og:title","content":"环境准备"}],["meta",{"property":"og:description","content":"由于 jzero 基于 go-zero 框架, 需要先安装 goctl 工具 如果觉得需要安装的工具太多可以采取使用 Docker 的方式, 工具全部集成到容器中 安装 goctl 安装 proto 相关工具 安装 jzero 安装 goreleaser jzero version >= v0.7.3 引入 .goreleaser.yaml 安装 ta..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-18T10:58:36.000Z"}],["meta",{"property":"article:author","content":"jaronnie"}],["meta",{"property":"article:modified_time","content":"2024-04-18T10:58:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"环境准备\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-18T10:58:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jaronnie\\",\\"url\\":\\"https://github.com/jaronnie\\"}]}"]]},"headers":[{"level":2,"title":"安装 goctl","slug":"安装-goctl","link":"#安装-goctl","children":[]},{"level":2,"title":"安装 proto 相关工具","slug":"安装-proto-相关工具","link":"#安装-proto-相关工具","children":[]},{"level":2,"title":"安装 jzero","slug":"安装-jzero","link":"#安装-jzero","children":[]},{"level":2,"title":"安装 goreleaser","slug":"安装-goreleaser","link":"#安装-goreleaser","children":[]},{"level":2,"title":"安装 task","slug":"安装-task","link":"#安装-task","children":[]},{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[]}],"git":{"createdTime":1713163888000,"updatedTime":1713437916000,"contributors":[{"name":"jaronnie","email":"jaron@jaronnie.com","commits":4}]},"readingTime":{"minutes":0.48,"words":143},"filePathRelative":"guide/install.md","localizedDate":"2024年4月15日","autoDesc":true}');export{f as comp,_ as data};
