---
title: TCP 快速打开
date: 2021-1-9
categories:
 - 网络协议
---

#### TCP快速打开

前面介绍的 TCP 连接需要经过三次握手，三次握手带来的时延使得 TCP 连接的代价非常大，所以有了各种连接重用的技术。但是 TCP 连接不是想复用就能复用的，在重用连接的情况下如何减少新建连接带来的性能损失呢？TCP 快速打开就是用来解决这个问题的。

**TCP快速打开(TFO)**

​	TFO 是在原来 TCP 协议上的扩展协议，它的主要原理就在发送第一个 SYN 包的时候就开始传数据了，不过它要求当前客户端之前已经完成过「正常」的三次握手。快速打开分两个阶段：请求 Fast Open Cookie 和 真正开始 TCP Fast Open

请求 Fast Open Cookie 的过程如下：

- 客户端发送一个 SYN 包，头部包含 Fast Open 选项，且该选项的Cookie 为空，这表明客户端请求 Fast Open Cookie
- 服务端收取 SYN 包以后，生成一个 cookie 值（一串字符串）
- 服务端发送 SYN + ACK 包，在 Options 的 Fast Open 选项中设置 cookie 的值
- 客户端缓存服务端的 IP 和收到的 cookie 值

<img src="https://user-gold-cdn.xitu.io/2019/4/3/169e2dc0888e6b83?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="img" style="zoom:50%;" />

第一次过后，客户端就有了缓存在本地的 cookie 值，后面的握手和数据传输过程如下：

- 客户端发送 SYN 数据包，里面包含数据和之前缓存在本地的 Fast Open Cookie。（注意我们此前介绍的所有 SYN 包都不能包含数据）
- 服务端检验收到的 TFO Cookie 和传输的数据是否合法。如果合法就会返回 SYN + ACK 包进行确认并将数据包传递给应用层，如果不合法就会丢弃数据包，走正常三次握手流程（只会确认 SYN）
- 服务端程序收到数据以后可以握手完成之前发送响应数据给客户端了
- 客户端发送 ACK 包，确认第二步的 SYN 包和数据（如果有的话）
- 后面的过程就跟非 TFO 连接过程一样了

<img src="https://user-gold-cdn.xitu.io/2019/4/3/169e2dc0821ff4f9?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="img" style="zoom:50%;" />

**TFO 优势**

利用握手可以节省一个往返 RTT