import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,a as r,w as e,b as k,r as o,o as d,d as s,e as i}from"./app-DjWNKqgm.js";const c={},p=k('<p>可支持任意框架的脚手架 jzero, 默认支持 go-zero</p><div class="hint-container tip"><p class="hint-container-title">目前还在定制规范中, 不能保证兼容性. 待 v1.0 后保证兼容性</p></div><div style="text-align:center;"><img src="https://oss.jaronnie.com/jzero.jpg" style="width:33%;" alt=""></div><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h2><ul><li>企业级代码规范</li><li>grpc, grpc-gateway, api 三合一, 满足绝大部分场景业务需要</li><li>集成命令行框架 cobra, 轻松编写具备生产可用的命令行工具</li><li>支持多 proto 多 service, 减少开发耦合性</li><li>不修改源码, 完全同步 go-zero 新特性</li><li>一键创建项目, 快速拓展新业务, 减少心理负担</li><li>一键生成服务端代码, 数据库代码, 客户端 sdk, 大大提高开发测试效率</li><li>支持自定义模板, 基于模板新建项目和生成代码</li></ul><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2><figure><img src="https://oss.jaronnie.com/2024-04-30_10-10-52.gif" alt="2024-04-30_10-10-52" tabindex="0" loading="lazy"><figcaption>2024-04-30_10-10-52</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">Windows 用户请在 powershell 下执行所有指令</p></div>',8),g=i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 一键创建项目")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," --rm"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -v"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," ${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"PWD"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"/quickstart:/app/quickstart"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," jaronnie/jzero:latest"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," new"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," quickstart")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#56B6C2"}},"cd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," quickstart"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 一键生成代码")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," --rm"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -v"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," ${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"PWD"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":/app/quickstart"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," jaronnie/jzero:latest"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," gen"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -w"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," quickstart")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 下载依赖")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," mod"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," tidy")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 启动项目")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," main.go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," server")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),y=i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 安装 jzero")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," install"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," github.com/jzero-io/jzero@latest")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 一键安装所需的工具")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"jzero"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," check")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 一键创建项目")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"jzero"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," new"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," quickstart")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#56B6C2"}},"cd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," quickstart")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 一键生成代码")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"jzero"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," gen")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 下载依赖")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," mod"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," tidy")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 启动服务端程序")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," main.go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," server")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1);function m(u,F){const l=o("CodeTabs");return d(),h("div",null,[p,r(l,{id:"59",data:[{id:"Docker"},{id:"jzero"}],"tab-id":"shell"},{title0:e(({value:t,isActive:a})=>[s("Docker")]),title1:e(({value:t,isActive:a})=>[s("jzero")]),tab0:e(({value:t,isActive:a})=>[g]),tab1:e(({value:t,isActive:a})=>[y]),_:1})])}const v=n(c,[["render",m],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/","title":"首页","lang":"zh-CN","frontmatter":{"home":false,"icon":"home","title":"首页","description":"可支持任意框架的脚手架 jzero, 默认支持 go-zero 目前还在定制规范中, 不能保证兼容性. 待 v1.0 后保证兼容性 特性 企业级代码规范 grpc, grpc-gateway, api 三合一, 满足绝大部分场景业务需要 集成命令行框架 cobra, 轻松编写具备生产可用的命令行工具 支持多 proto 多 service, 减少开发耦...","head":[["meta",{"property":"og:url","content":"https://jzero.jaronnie.com/"}],["meta",{"property":"og:site_name","content":"Jzero Framework"}],["meta",{"property":"og:title","content":"首页"}],["meta",{"property":"og:description","content":"可支持任意框架的脚手架 jzero, 默认支持 go-zero 目前还在定制规范中, 不能保证兼容性. 待 v1.0 后保证兼容性 特性 企业级代码规范 grpc, grpc-gateway, api 三合一, 满足绝大部分场景业务需要 集成命令行框架 cobra, 轻松编写具备生产可用的命令行工具 支持多 proto 多 service, 减少开发耦..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.jaronnie.com/2024-04-30_10-10-52.gif"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-03T14:28:45.000Z"}],["meta",{"property":"article:author","content":"jaronnie"}],["meta",{"property":"article:modified_time","content":"2024-06-03T14:28:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"首页\\",\\"image\\":[\\"https://oss.jaronnie.com/2024-04-30_10-10-52.gif\\"],\\"dateModified\\":\\"2024-06-03T14:28:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jaronnie\\",\\"url\\":\\"https://github.com/jaronnie\\"}]}"]]},"headers":[{"level":2,"title":"特性","slug":"特性","link":"#特性","children":[]},{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[]}],"git":{"createdTime":1712825833000,"updatedTime":1717424925000,"contributors":[{"name":"jaronnie","email":"jaron@jaronnie.com","commits":26}]},"readingTime":{"minutes":1.19,"words":356},"filePathRelative":"README.md","localizedDate":"2024年4月11日","autoDesc":true}');export{v as comp,f as data};
