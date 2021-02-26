---
title: TCP 四次挥手
date: 2021-1-6
categories:
 - 网络协议
---

#### TCP 四次挥手

<img src="https://user-gold-cdn.xitu.io/2019/6/26/16b911c618264239?imageslim" alt="img" style="zoom:50%;" />

**第一次挥手**：客户端发送 FIN 报文，之后不再发送数据给服务端

**第二次挥手**：服务器收到 FIN 报文后回复 ACK报文

**第三次挥手**：服务器也没有数据要发送了，回复 FIN 报文

**第四次挥手**：客户端 收到 FIN 报文后 回复 ACK 报文，之后在等待 2 MSL后关闭 

> 为什么要 4 次挥手，三次可以吗？
>
> 当然可以。由于 **延迟确认**的存在，ACK 可以跟随 FIN 包一起捎带回对端。至于 4 次是因为 客户端发送 FIN 报文后，服务器还是可以发送数据的，如果客户端死等服务器发送数据，可能会造成客户端重传 FIN 报文。如果没有数据要传，FIN 和 ACK 当然可以合并一起发回给客户端，4 次挥手也就成了 3 次挥手。

**同时关闭**

<img src="https://user-gold-cdn.xitu.io/2019/9/28/16d75572508a08d2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="img" style="zoom:50%;" />

以客户端为例

- 最初客户端和服务端都处于 ESTABLISHED 状态
- 客户端发送 `FIN` 包，等待对端对这个 FIN 包的 ACK，随后进入 `FIN-WAIT-1` 状态
- 处于`FIN-WAIT-1`状态的客户端还没有等到 ACK，收到了服务端发过来的 FIN 包
- 收到 FIN 包以后客户端会发送对这个 FIN 包的的确认 ACK 包，同时自己进入 `CLOSING` 状态
- 继续等自己 FIN 包的 ACK
- 处于 `CLOSING` 状态的客户端终于等到了ACK，随后进入`TIME-WAIT`
- 在`TIME-WAIT`状态持续 2*MSL，进入`CLOSED`状态