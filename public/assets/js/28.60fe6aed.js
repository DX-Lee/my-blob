(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{508:function(v,_,t){"use strict";t.r(_);var e=t(4),s=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h4",{attrs:{id:"http是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http是什么"}},[v._v("#")]),v._v(" HTTP是什么？")]),v._v(" "),t("p",[v._v("HTTP (HyperText Transfer Protocol) 是一个在计算机中专门在两点间传输文本、图片、音频、视频等超文本数据的约定和规范")]),v._v(" "),t("p",[t("strong",[v._v("与 HTTP 相关协议")])]),v._v(" "),t("ul",[t("li",[v._v("TCP/IP 协议：实际上是一系列网络通信协议的统称，其中核心的协议是 TCP 和 IP 协议，其他的还有 UDP，ICMP, ARP等。IP 协议主要目的是用来解决寻址和路由问题，TCP 协议用来保证可靠传输。")]),v._v(" "),t("li",[v._v("DNS（Domain Name System） 协议：用来将域名转换成 IP 地址")])]),v._v(" "),t("p",[t("strong",[v._v("URI 和 URL")])]),v._v(" "),t("p",[v._v("URI （Uniform Resource Identifier）, 中文名称是"),t("strong",[v._v("统一资源标识符")]),v._v("，使用它可以唯一标识互联网上的资源")]),v._v(" "),t("p",[v._v("URL （Uniform Resource Locator)，中文名称是 "),t("strong",[v._v("统一资源定位符")]),v._v("，实际上是 URI 的一个子集。")]),v._v(" "),t("p",[t("strong",[v._v("HTTPS")])]),v._v(" "),t("p",[v._v("HTTPS （HTTP over SSL/TLS）,即运行在 SSL/TLS 上的 HTTP。SSL/TLS 是一个负责加密通信的安全协议，运行在 TCP/IP 之上，也是一个可靠的协议。SSL（Secure Socket Layer），使用了许多密码学最先进的研究成果，综合了对称加密、非对称加密、摘要算法、数字签名、数字证书等技术，能够在不安全的环境中为通信的双方创建出一个秘密的、安全的传输通道。")]),v._v(" "),t("h5",{attrs:{id:"http-报文结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-报文结构"}},[v._v("#")]),v._v(" "),t("strong",[v._v("HTTP 报文结构")])]),v._v(" "),t("p",[v._v("HTTP 报文结构由 "),t("strong",[v._v("header+ body")]),v._v(" 构成，具体来说是")]),v._v(" "),t("blockquote",[t("p",[v._v("起始行 + 头部字段 + 空行 + 实体")])]),v._v(" "),t("p",[v._v('HTTP 可以没有 body，但是必须要有 header，而且在 header 后面必须有一个换行 "CRLF"。')]),v._v(" "),t("p",[v._v("HTTP 报文分为请求报文和响应报文，两者有一定的区别。")]),v._v(" "),t("h5",{attrs:{id:"起始行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#起始行"}},[v._v("#")]),v._v(" 起始行")]),v._v(" "),t("p",[v._v("对于请求报文来说，类似以下")]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("GET /index HTTP/1.1\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br")])]),t("p",[v._v("由 "),t("strong",[v._v("请求方法 + 请求路径 + HTTP 版本号组成")])]),v._v(" "),t("p",[v._v("对于响应报文来说")]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("HTTP/1.1 200 OK\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br")])]),t("p",[v._v("由 "),t("strong",[v._v("HTTP 版本号 + 状态码 + 原因")])]),v._v(" "),t("h5",{attrs:{id:"头部字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#头部字段"}},[v._v("#")]),v._v(" "),t("strong",[v._v("头部字段")])]),v._v(" "),t("p",[v._v('头部字段由 key-value 的形式，key 和 value 之间用 ":"分开，注意 key 后面必须紧跟 “：”，不能有空格，而 “：” 后面可以有多个空格；每一个头部字段以 “CRLF" 结束。')]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("Host:   127.0.0.1 // 合法 : 后面可以有多个空行\nHost : 127.0.0.1 // 不合法 : 必须紧跟 key 后面\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br")])]),t("p",[v._v("关于头字段需要注意到的几点：")]),v._v(" "),t("ol",[t("li",[v._v('字段名不区分大小写，”Host“ 也可以写成 "host"，但是首字母大写可读性更好')]),v._v(" "),t("li",[v._v('字段名不允许出现空格，可以使用连字符 ”-“，但是不能使用下划线 ”_"')]),v._v(" "),t("li",[v._v("字段名原则上不能重复，除非这个字段名本身允许，例如 “Set-Cookie”")])]),v._v(" "),t("p",[t("strong",[v._v("请求方法")])]),v._v(" "),t("p",[v._v("HTTP 1.1 规定 "),t("strong",[v._v("请求方法必须大写")]),v._v("，方法有以下 8 种：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("GET : 获取资源，可以理解为读取或者下载数据")])]),v._v(" "),t("li",[t("p",[v._v("POST: 提交数据，相当于写入或者上传数据")])]),v._v(" "),t("li",[t("p",[v._v("HEAD: 获取资源的元信息")])]),v._v(" "),t("li",[t("p",[v._v("PUT: 和 POST 类似")])]),v._v(" "),t("li",[t("p",[v._v("DELETE: 删除数据")])]),v._v(" "),t("li",[t("p",[v._v("CONNECT：建立特殊的连接隧道")])]),v._v(" "),t("li",[t("p",[v._v("OPTIONS：列出可对资源实行的方法")])]),v._v(" "),t("li",[t("p",[v._v("TRACE：追踪请求-响应的传输路径")]),v._v(" "),t("p",[t("strong",[v._v("GET / HEAD")])]),v._v(" "),t("p",[t("strong",[v._v("GET")]),v._v(" 方法含义是向服务器请求资源，这个资源既可以是静态的文本、页面、图片、视频，也可以是由 PHP、Java 动态生成的页面或者其他格式的数据。搭配 URI 和其他头字段可以实现对资源更精细的操作。例如在 URI 之后使用 “#”，可以在获取页面后直接定位到某个标签处；使用 “If-Modified-Since” 字段变成 “有条件的请求”，只有当资源被修改后才去获取资源；使用 “Range” 字段表示 “范围请求”，只获取资源的一部分数据。")]),v._v(" "),t("p",[t("strong",[v._v("Head")]),v._v(" 和 "),t("strong",[v._v("GET")]),v._v(" 方法类似， 都是向服务器请求资源，服务器的处理机制是一样的，只不过对于 "),t("strong",[v._v("HEAD")]),v._v(" 方法不会返回请求的实体数据，只会传回响应头，也就是资源的 ”元信息“。可以看作是 "),t("strong",[v._v("GET")]),v._v(" 方法的轻量版，可以用在许多不需要资源的场合，避免 body 数据浪费。例如：只需要检查资源是否存在，检查是否有新版本，可以使用 HEAD 方法。")]),v._v(" "),t("p",[t("strong",[v._v("POST / PUT")])]),v._v(" "),t("p",[v._v('POST 和 PUT 是向服务器提交数据，数据放在 body 中，POST 通常表示 “新建” “create" 的含义，PUT 通常表示 ”修改“，”update"的含义。实际中 PUT 比较少见。')]),v._v(" "),t("p",[t("strong",[v._v("其他方法")])]),v._v(" "),t("p",[t("strong",[v._v("DELETE")]),v._v("方法指示服务器删除资源，因为这个动作危险性太大，所以通常服务器不会执行真正的删除操作，而是对资源做一个删除标记。当然，更多的时候服务器就直接不处理 DELETE 请求。")]),v._v(" "),t("p",[t("strong",[v._v("CONNECT")]),v._v("是一个比较特殊的方法，要求服务器为客户端和另一台远程服务器建立一条特殊的连接隧道，这时 Web 服务器在中间充当了代理的角色。")]),v._v(" "),t("p",[t("strong",[v._v("OPTIONS")]),v._v("方法要求服务器列出可对资源实行的操作方法，在响应头的 Allow 字段里返回。它的功能很有限，用处也不大，有的服务器（例如 Nginx）干脆就没有实现对它的支持。")]),v._v(" "),t("p",[t("strong",[v._v("TRACE")]),v._v("方法多用于对 HTTP 链路的测试或诊断，可以显示出请求 - 响应的传输路径。它的本意是好的，但存在漏洞，会泄漏网站的信息，所以 Web 服务器通常也是禁止使用。")])])]),v._v(" "),t("p",[t("strong",[v._v("状态码")])]),v._v(" "),t("p",[v._v("状态码分为五大类：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("1XX")]),v._v(" 提示信息，表示目前是协议处理的中间状态，需要后续操作")]),v._v(" "),t("li",[t("strong",[v._v("2XX")]),v._v(" 成功 ，表示服务器收到并正确处理了请求")]),v._v(" "),t("li",[t("strong",[v._v("3xx")]),v._v(" 重定向，资源位置发生变动需要客户端重新发送请求")]),v._v(" "),t("li",[t("strong",[v._v("4XX")]),v._v(" 客户端错误 ，请求的报文有误，服务器无法处理")]),v._v(" "),t("li",[t("strong",[v._v("5XX")]),v._v(" 服务器错误，服务器在处理请求时内部发生了错误")])]),v._v(" "),t("p",[t("strong",[v._v("1XX")])]),v._v(" "),t("p",[t("strong",[v._v("”101 Switching Protocols“")]),v._v("  他的意思是 客户端使用 Upgrade 头字段，要求在 HTTP 协议的基础上改成其他协议继续通信，比如 WebSocket。如果服务器同意变更，就会发送 101 状态码，在此之后数据传输就不会再使用 HTTP 了。")]),v._v(" "),t("p",[t("strong",[v._v("2XX")])]),v._v(" "),t("p",[t("strong",[v._v("”200 OK“")]),v._v(" 表示服务器收到并成功处理了请求")]),v._v(" "),t("p",[t("strong",[v._v("“204 No Content”")]),v._v(" 与 200 OK 含义相同，但是响应头后面没有 body 数据")]),v._v(" "),t("p",[t("strong",[v._v('"206 Partical Content"')]),v._v(" 在客户端发送 范围请求、获取资源的部分数据的时候出现，与 200 的含义基本相同，表示成功处理请求，body中的数据是请求资源的一部分。是 HTTP 分块传输和断点续传的基础。")]),v._v(" "),t("p",[v._v("206 状态码通常还会伴随的头字段 "),t("strong",[v._v("Content-Range")]),v._v("，表示 body 数据中的具体范围")]),v._v(" "),t("p",[t("strong",[v._v("3XX")])]),v._v(" "),t("p",[t("strong",[v._v("“301 Moved Permanently”")]),v._v(" 永久重定向，表示访问的资源已经不存在了，需要改用新的 URI 进行访问； 和他类似的  "),t("strong",[v._v("”302 Found“")]),v._v(" 临时重定向，表示访问的资源暂时需要用另一个 URI 来访问。")]),v._v(" "),t("p",[v._v("301 和 302 都会在响应头字段里 "),t("strong",[v._v("Location")]),v._v(' 字段中指明后续跳转的 URI，浏览器重定向这个新的 URI，两者的区别在于 一个是 ”永久“，一个是 "临时"，浏览器会对 301 做缓存优化，下次访问时自动重定向到这个网址，而 302 不会。')]),v._v(" "),t("p",[t("strong",[v._v('”304 No Modified"')]),v._v(" 协商缓存命中时返回这个状态码")]),v._v(" "),t("p",[t("strong",[v._v("4XX")])]),v._v(" "),t("p",[t("strong",[v._v('”400 Bad Request"')]),v._v(" 表示请求报文有误，但具体是请求格式有误，还是缺少请求头或者 URI 过长没有明说，是一个笼统的说法。")]),v._v(" "),t("p",[t("strong",[v._v('“403 Forbidden"')]),v._v(" 实际上不是客户端的请求有错，而是服务器禁止访问资源。原因可能有多种，信息敏感、法律禁止等")]),v._v(" "),t("p",[t("strong",[v._v('"404 No Found"')]),v._v(" 表示资源未找到")]),v._v(" "),t("p",[v._v("4××里剩下的一些代码较明确地说明了错误的原因，都很好理解，开发中常用的有：")]),v._v(" "),t("ul",[t("li",[v._v("405 Method Not Allowed：不允许使用某些方法操作资源，例如不允许 POST 只能 GET；")]),v._v(" "),t("li",[v._v("406 Not Acceptable：资源无法满足客户端请求的条件，例如请求中文但只有英文；")]),v._v(" "),t("li",[v._v("408 Request Timeout：请求超时，服务器等待了过长的时间；")]),v._v(" "),t("li",[v._v("409 Conflict：多个请求发生了冲突，可以理解为多线程并发时的竞态；")]),v._v(" "),t("li",[v._v("413 Request Entity Too Large：请求报文里的 body 太大；")]),v._v(" "),t("li",[v._v("414 Request-URI Too Long：请求行里的 URI 太大；")]),v._v(" "),t("li",[v._v("429 Too Many Requests：客户端发送了太多的请求，通常是由于服务器的限连策略；")]),v._v(" "),t("li",[v._v("431 Request Header Fields Too Large：请求头某个字段或总体太大；")])]),v._v(" "),t("p",[t("strong",[v._v("5XX")])]),v._v(" "),t("p",[t("strong",[v._v('”500 Internal Server Error"')]),v._v(" 与 400 类似，是一个通用的错误码，但服务器究竟除了什么错不知道")]),v._v(" "),t("p",[t("strong",[v._v('“501 Not Implemented"')]),v._v(" 表示客户端请求的功能还不支持")]),v._v(" "),t("p",[t("strong",[v._v('”502 Bad Getway"')]),v._v(" 表示服务器作为网关或者代理时返回的错误码，表示服务器正常，但是访问后端服务器时发生了错误")]),v._v(" "),t("p",[t("strong",[v._v('“503 Service Unavailable"')]),v._v(" 表示服务器当前繁忙，暂时无法响应服务。503 只是一个临时的状态，可能过一会服务器空闲可以处理请求了，所以响应头字段通常还会有一个 "),t("strong",[v._v("”Retry-After“")]),v._v(" 字段，表示客户端可以在多久后再次尝试发送请求。")]),v._v(" "),t("h4",{attrs:{id:"http-的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-的特点"}},[v._v("#")]),v._v(" HTTP 的特点")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("灵活可扩展")]),v._v(" "),t("p",[v._v("灵活可扩展体现在两个方面：一是语义上的自由，只规定了报文的基本格式，如空格分隔单词，用换行分隔字段，报文的各个组成部分都没有严格的语法语义限制；二是传输形式的多样性，不仅可以传输文本，还能传输图片、音频视频等任意数据")])]),v._v(" "),t("li",[t("p",[v._v("可靠传输")]),v._v(" "),t("p",[v._v("基于 TCP/IP 协议")])]),v._v(" "),t("li",[t("p",[v._v("请求应答")]),v._v(" "),t("p",[v._v("永远是请求方发起连接和请求，应答方只有收到请求才能答复。当然请求和应答双方不是绝对的，在浏览器-服务器的场景里，服务器通常是应答方，而当服务器作为代理请求后端服务器，那么它可能同时扮演请求方和应答方的角色")])]),v._v(" "),t("li",[t("p",[v._v("无状态")]),v._v(" "),t("p",[v._v("这里的状态指的是通信过程中的上下文信息。每一次请求都是互相独立、毫不相关的，协议不要求服务端和客户端保存请求信息。")])])]),v._v(" "),t("p",[t("strong",[v._v("缺点")])]),v._v(" "),t("ol",[t("li",[t("p",[v._v("无状态")]),v._v(" "),t("p",[v._v("无状态这个需要分场景来说。对于服务器来说，不需要额外的资源来记录状态信息，能够减轻服务器的负担，同时也很容易地组成集群，让负载均衡把请求转发到不同的服务器上去，不会因为状态不一致而导致处理出错；但对于需要保存连接状态信息的场景，每次都需要传输大量的上下文信息，增加了不必要的数据传输量。")])]),v._v(" "),t("li",[t("p",[v._v("明文传输")]),v._v(" "),t("p",[v._v("”明文“指的是协议里的报文 （准确来说是 header 部分）不使用二进制报文，而是用简单的可阅读的文本形式，这样有利于调试但是也让HTTP的报文信息暴露给了外界，给攻击者提供了便利。如 “WIFI陷阱”就是利用 ”明文传输“的特点，抓取流量，获得敏感信息。")])]),v._v(" "),t("li",[t("p",[v._v("队头阻塞")]),v._v(" "),t("p",[v._v("当顺序发送的请求序列中的某一个序列因为某种原因被阻塞的时候，后面的请求也会跟着阻塞，导致客户端迟迟收不到数据。")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);