---
title: TCP Socket 选项
date: 2021-1-9
categories:
 - 网络协议
---



**TCP SO_REUSEADDR选项**

四次挥手的时候，主动断开连接方需要等待 2MSL 才能最终释放这个连接。一般来说都是客户端主动断开，如果服务器需要重启或者出现BUG 崩溃，这时候服务器就会主动断开连接。但是由于需要等待 2MSL ,所以服务器不能立刻启动，如果服务器立刻启动就会出现 Address already in use 错误，需要等待一段时候后才能启动。

原因是服务器在重启后需要绑定到同一端口，由于 TCP 四元组必须是唯一的，之前的连接还没有断开，无法将新的监听套接字绑定到端口上，有的操作系统更加严格，只要还有连接在使用这个本地端口，这个端口就不能被重用。

启用 SO_REUSEADDR 可以解除这个限制，默认情况下这个值为 0， 表示关闭，开启时设置为 1。

**TCP SO_REUSEPORT**

默认情况下，一个 IP、端口组合只能被一个套接字绑定，Linux 内核从 3.9 版本开始引入一个新的 socket 选项 SO_REUSEPORT，又称为 port sharding，允许多个套接字监听同一个IP 和端口组合

为了充分发挥多核 CPU 的性能，多进程的处理网络请求主要有下面两种方式

- 主进程 + 多个 worker 子进程监听相同的端口
- 多进程 + REUSEPORT

第一种方最常用的一种模式，Nginx 默认就采用这种方式。主进程执行 bind()、listen() 初始化套接字，然后 fork 新的子进程。在这些子进程中，通过 accept/epoll_wait 同一个套接字来进行请求处理，示意图如下所示。

<img src="https://user-gold-cdn.xitu.io/2020/1/31/16ffa53ee520a443?imageslim" alt="img" style="zoom:25%;" />

这种方式看起来很完美，但是会带来著名的**“惊群”**问题（thundering herd）。

计算机中的**惊群**问题指的是：多进程/多线程同时监听同一个套接字，当有网络事件发生时，所有等待的进程/线程同时被唤醒，但是只有其中一个进程/线程可以处理该网络事件，其它的进程/线程获取失败重新进入休眠。

惊群问题带来的是 CPU 资源的浪费和锁竞争的开销

为了解决惊群问题，比较省力省心的方式是使用 **SO_REUSEPORT** 选项，接下来开始介绍这部分的内容。



**SO_REUSEPORT 与 安全性**

试想下面的场景，你的进程进程监听了某个端口，不怀好意的其他人也可以监听相同的端口来“窃取”流量信息，这种方式被称为端口劫持（port hijacking）。SO_REUSEPORT 在安全性方面的考虑主要是下面这两点。

1、只有第一个启动的进程启用了 SO_REUSEPORT 选项，后面启动的进程才可以绑定同一个端口。 2、后启动的进程必须与第一个进程的有效用户ID（effective user ID）匹配才可以绑定成功。

**SO_REUSEPORT 的好处**

- 实现了内核级的负载均衡
- 支持滚动升级（Rolling updates）

<img src="https://user-gold-cdn.xitu.io/2020/1/31/16ffa53f205214ae?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="rolling-update" style="zoom: 50%;" />

**SO_LINGER**

前面介绍了有两种方式可以关闭 TCP 连接

1. FIN : 优雅关闭，发送 FIN 包表示自己这端的所有数据都已经发送出去了，后面不会在发送数据
2. RST: 强制关闭连接，无法保证

当调用 close() 时候

正常情况下

- 操作系统等所有的数据发送完才会关闭连接
- 因为是主动关闭，所以连接将处于 TIME_WAIT 两个 MSL

如果不想等这么才彻底关闭连接，可以使用 SO_LINGER 这个 套接字选项

SO_LINGER 启用时，操作系统开启一个定时器，在定时器期间内发送数据，定时时间到直接 RST 连接。

<img src="https://user-gold-cdn.xitu.io/2019/4/9/16a02b91ae14ef21?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="img" style="zoom:50%;" />