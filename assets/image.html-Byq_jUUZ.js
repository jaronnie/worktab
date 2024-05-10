import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as s,c as o,a as e,d as t,w as n,e as d,b as i}from"./app-FPj7iqWP.js";const c={},m=e("p",null,"采用 goreleaser 工具交叉编译二进制文件",-1),p=e("p",null,"采用 Task 工具代替 Makefile",-1),u=e("p",null,"将这两个工具结合起来使用, 能更加方便的管理项目",-1),h=d(`<h2 id="编译-linux-amd64-镜像" tabindex="-1"><a class="header-anchor" href="#编译-linux-amd64-镜像"><span>编译 linux/amd64 镜像</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>task build:amd64

<span class="token function">docker</span> build <span class="token parameter variable">-t</span> jaronnie/jzero:latest <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译-linux-arm64-镜像" tabindex="-1"><a class="header-anchor" href="#编译-linux-arm64-镜像"><span>编译 linux/arm64 镜像</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>task build:arm64

<span class="token function">docker</span> build <span class="token parameter variable">-t</span> jaronnie/jzero:latest-arm64 <span class="token parameter variable">-f</span> Dockerfile-arm64 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function g(v,b){const a=l("RouteLink");return s(),o("div",null,[m,p,u,e("p",null,[t(a,{to:"/guide/install.html#%E5%AE%89%E8%A3%85-goreleaser"},{default:n(()=>[i("安装 goreleaser")]),_:1})]),e("p",null,[t(a,{to:"/guide/install.html#%E5%AE%89%E8%A3%85-task"},{default:n(()=>[i("安装 task")]),_:1})]),h])}const x=r(c,[["render",g],["__file","image.html.vue"]]),f=JSON.parse('{"path":"/guide/develop/image.html","title":"编译镜像","lang":"zh-CN","frontmatter":{"title":"编译镜像","icon":"puzzle-piece","star":true,"order":3,"category":"开发","tag":["Guide"],"description":"采用 goreleaser 工具交叉编译二进制文件 采用 Task 工具代替 Makefile 将这两个工具结合起来使用, 能更加方便的管理项目 编译 linux/amd64 镜像 编译 linux/arm64 镜像","head":[["meta",{"property":"og:url","content":"https://jzero.jaronnie.com/guide/develop/image.html"}],["meta",{"property":"og:site_name","content":"Jzero Framework"}],["meta",{"property":"og:title","content":"编译镜像"}],["meta",{"property":"og:description","content":"采用 goreleaser 工具交叉编译二进制文件 采用 Task 工具代替 Makefile 将这两个工具结合起来使用, 能更加方便的管理项目 编译 linux/amd64 镜像 编译 linux/arm64 镜像"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-24T11:07:04.000Z"}],["meta",{"property":"article:author","content":"jaronnie"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2024-04-24T11:07:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编译镜像\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-24T11:07:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jaronnie\\",\\"url\\":\\"https://github.com/jaronnie\\"}]}"]]},"headers":[{"level":2,"title":"编译 linux/amd64 镜像","slug":"编译-linux-amd64-镜像","link":"#编译-linux-amd64-镜像","children":[]},{"level":2,"title":"编译 linux/arm64 镜像","slug":"编译-linux-arm64-镜像","link":"#编译-linux-arm64-镜像","children":[]}],"git":{"createdTime":1713352530000,"updatedTime":1713956824000,"contributors":[{"name":"jaronnie","email":"jaron@jaronnie.com","commits":2}]},"readingTime":{"minutes":0.36,"words":109},"filePathRelative":"guide/develop/image.md","localizedDate":"2024年4月17日","autoDesc":true}');export{x as comp,f as data};