---
title: TCP Time_Wait
date: 2020-1-9
categories:
 - 网络协议
---

Time_Wait 状态是**主动断开方**才会进入的一个状态，且状态会持续 2 MSL （Max Segment LifeTime）

**MSL (Max Segment LifeTime)**

MSL 指的是 TCP 报文在网络中的最大生存时间。这个值与 IP 报文头中的 TTL 字段有密切的联系。

IP 报文头中有一个 8 位的存活时间字段（Time to live, TTL）如下图。 这个存活时间存储的不是具体的时间，而是一个 IP 报文最大可经过的路由数，每经过一个路由器，TTL 减 1，当 TTL 减到 0 时这个 IP 报文会被丢弃。

![img](https://user-gold-cdn.xitu.io/2019/6/14/16b54c4b9038f7aa?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

> TIME_WAIT 存在的意义是什么？
>
> 1. 为了让迷途的数据包在网络中过期失效，避免用相同源端口和目标端口的连接 收到 旧连接的数据包，造成数据混乱
> 2. 为了避免最终的 ACK 包丢失后，对端重发的 FIN 包可以接收到

> TIME_WAIT 为什么是 2 MSL？
>
> - 1 个 MSL 确保四次挥手中主动关闭方最后的 ACK 报文最终能达到对端
> - 1 个 MSL 确保对端没有收到 ACK 重传的 FIN 报文可以到达

>TIME_WAIT 带来的问题
>
>如果有大量处于 TIME_WAIT 状态的连接，导致连接表无法复用，socket 结构体内存占用。
>
>缓解紧张的端口资源，一个可行的方法是重用“浪费”的处于 TIME_WAIT 状态的连接，当开启 net.ipv4.tcp_tw_reuse 选项时，处于 TIME_WAIT 状态的连接可以被重用。

