---
title: TCP 11种状态变迁
date: 2021-1-8
tags:
 - TCP
categories:
 - 网络协议
---

<img src="https://user-gold-cdn.xitu.io/2019/6/22/16b7c9fb02bff057?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="img" style="zoom:50%;" />

**1.CLOSED**

CLOSED 状态是一个 ’假想‘ 的状态，表示 TCP 连接未开始建立或者连接已经彻底释放的状态。

从图中看出 CLOSED 状态转变成其他状态有两种可能：

- 主动打开 (Active Open)：客户端发送一个 SYN 包，准备三次握手。
- 被动打开 (Passive Open)：一般来说，服务端会监听一个端口，等待客户端的新连接，同时会进入 LISTEN 状态。

**2.LISTEN**

一端（通常是服务端）调用 bind, listen 监听特定端口的时候，进入 LISTEN 状态，等待 客户端发送 SYN 报文三次握手建立连接。

收到 SYN 报文后回复 SYN + ACK ，进入 SYN_RCVD

**3.SYN_SENT**

客户端发送 SYN 报文后等待 ACK 的过程进入 SYN_SENT 状态，同时还会开启一个定时器，超过时间没有收到 ACK 就会重发 SYN

**4.SYN_RCVD**

服务端收到 SYN 后回复 SYN + ACK 进入 SYN_RCVD 状态

**5.ESTABLISHED**

SYN_SENT 或者 SYN_RCVD 收到 对端 ACK 后，进入 ESTABLISHED 状态表示连接建立成功

ESTABLISHED 有两种状态转换方式：

- 调用 close 等系统调用 主动关闭连接，这个时候发送 FIN 包给对端，进入 FIN_WAIT_1 状态
- 收到对端 FIN 包，执行被动关闭，回复 ACK 后进入 CLOSE_WAIT 状态

**6.FIN_WAIT_1**

关闭的一方发送 FIN 包后进入 FIN_WAIT_1状态 （如图：不一定是从 ESTABLISHED 状态转变）

FIN_WAIT_1 状态转换由以下几种情况

- 收到 ACK 进入 FIN_WAIT_2 状态
- 收到 FIN 后 回复 ACK 进入 CLOSING 状态
- 收到 FIN+ACK 后，回复对端 ACK ，直接进入 TIME_WAIT 状态，跳过了 FIN_WAIT_2 状态

**7.FIN_WAIT_2**

FIN_WAIT_1 收到 ACK 后，进入FIN_WAIT-2 状态，这时候主动关闭方的 FIN 包已经被确认，等待对端发送 FIN 包

FIN_WAIT_2  收到 FIN 包后进入 TIME_WAIT 状态

**8.CLOSE_WAIT**

被动关闭方收到 FIN 包后 进入 CLOSE_WAIT 状态。

这个时候被动关闭方如果有数据可以继续传送，没有数据发送给对方时，会调用 close 系统调用关闭 TCP 连接，发送 FIN 包给对端进入 LAST_ACK 状态

**9.LAST_ACK**

被动关闭方发送 FIN 包后等待 ACK 确认的状态，当收到 ACK 后，进入CLOSED 状态，连接释放。

**10.CLOSING**

CLOSING 状态在 “同时关闭” 的情况下出现，这里的同时关闭不是指时间意义上的同时，而是指在 发送 FIN 包后还没有收到 ACK 之前，收到了对端的 FIN 包的情况。

**11.TIME_WAIT**

这个状态是收到了被动关闭方的 FIN 包后，回复 ACK 后，开启 2MSL 定时器，定时器到期后进入 CLOSED 状态，释放连接。

