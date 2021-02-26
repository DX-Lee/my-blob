---
title: tcp keep-alive原理
date: 2020-1-12
categories:
 - 网络协议
---

如果一端因为网络故障或者系统宕机，如果应用程序不发送数据，对端可能永远也不知道连接已经失效。因为 TCP 并不是一个轮询的协议。

keep-alive就是用来检测长时间连接是否失效。

```
// 30s没有数据包交互发送 keepalive 探测包
echo 30 > /proc/sys/net/ipv4/tcp_keepalive_time
// 每次探测TCP 包间隔
echo 10 > /proc/sys/net/ipv4/tcp_keepalive_intvl
// 探测多少次
echo 5 > /proc/sys/net/ipv4/tcp_keepalive_probes
```

keepalive 探测包 7200s后检测一次，探测 9 次，每次探测间隔 75s，这些值都有对应的参数可以配置。

**为什么大部分应用程序都没有开启 keep-alive选项**

因为默认探测时长太长了，从没有数据交互到确认连接失效需要花费  2.1875小时（7200 + 75*9）。如果设置的过小，又违背了keep-alive的初衷，检测长时间死连接。

因此一般在应用层做连接的有效检测，也就是我们常说的心跳包。

