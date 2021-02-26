---
title: TCP 时间戳
date: 2021-1-8
categories:
 - 网络协议
---

**TCP 时间戳选项**

**时间戳是什么？**

TCP 时间戳是 TCP 一个非常重要的选项。组成部分如下：

![img](https://user-gold-cdn.xitu.io/2019/6/14/16b54c4be8611658?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

类别 (kind)，长度（length），发送方时间戳 （TS value），回显时间戳（TS Echo Reply）。

**时间戳的使用**

是否使用时间戳是由三次握手的 SYN 报文决定的。

- 发送方发送数据时将一个发送时间放在 TSVal 中
- 接收方接收数据包后，将 TSVal 中的时间戳原封不动的放到 TSecr 中，同时将自己的时间戳放在 TSVal 中，然后将数据包发送出去
- 以后的包以此类推

<img src="https://user-gold-cdn.xitu.io/2019/6/14/16b54c4c5c7ae349?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="img" style="zoom:50%;" />

**时间戳的作用**

引入时间戳是为了解决两个问题：

- 两端往返时延测量 （RTTM）
- 序列号回绕 （PAWS）

1. 测量RTTM

不启用时间戳之前：

发送方发送数据包时记录发送时间 t1，收到 ACK 包时 时间为 t2，RTT 就是 t2 - t1 的时长

但有一个问题：如果数据包出现重传，无法确认 ACK 包时 第一次包的确认包还是重传包的确认包，计算的时间就不准确

启用时间戳之后就，由于 TSVal 和 TSecr 的存在，无论是第一次包 还是 重传包的确认包，都可以计算出 正确的 RTT

2. 序列号回绕

由于 TCP 序列号为 32 位，当超过 2^32 后就会回绕，而 TCP 窗口经过 窗口缩放 可以达到 2^30 (1 GB)，所以序列号很快就会被重复使用。举例：

<img src="https://user-gold-cdn.xitu.io/2020/3/22/17102ef66f71cbd6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="paws" style="zoom:50%;" />

当迷路包到达后，无法区分是迷路包还是 6 号数据包，会造成数据混乱。

引入 时间戳后，内核会为每一个连接维护一个 ts_recent 值，记录最后一次通信的 timestamp值，如果在 t7时间点收到 迷途数据包2 时，由于 2的时间戳 要比 ts_recent 值 小，说明是迷路包，直接丢弃，等到 6 号包到达，6 号包的 时间戳要比 ts_recent 大，则正常接收。

**补充**

- timestamp 值时单调递增的 ，和 epoch 时间戳不是一回事，不要求两台主机时钟同步，而且两端 时间戳增加的步调也可以不一致，比如 一端以 每1ms + 1的方式递增，另一端以 每 1s + 1 的方式递增
- timestamp的值也会溢出回绕
- timestamp 是双向的，如果有一方不开启时间戳，双方都会停用。