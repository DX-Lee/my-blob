(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{516:function(s,t,_){"use strict";_.r(t);var e=_(4),v=Object(e.a)({},(function(){var s=this,t=s.$createElement,_=s._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("h4",{attrs:{id:"tcp-首部字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-首部字段"}},[s._v("#")]),s._v(" TCP 首部字段")]),s._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/27/16d702629b61cbcc?imageslim",alt:"img"}}),s._v(" "),_("p",[_("strong",[s._v("源端口号和目标端口号")])]),s._v(" "),_("p",[s._v("TCP 首部报文中没有 IP 地址，IP 地址在 IP 层协议中，TCP 协议中只有端口号，源 IP 地址， 源端口号，目标 IP 地址，目标端口号 构成一个 TCP 连接的四元组，一个四元组唯一标识一个 TCP 连接。")]),s._v(" "),_("p",[_("strong",[s._v("序列号")]),s._v("（Sequence Number）")]),s._v(" "),_("p",[s._v("TCP 是基于字节流的协议，通过 TCP 传输的每一个字节都被分配了一个序列号，序列号为本段报文中第一个字节的序列号。序列号加报文长度就可以确定传输的是那一段数据，序列号是一个32位的无符号整数，超过 2^32 - 1后从 0 开始。")]),s._v(" "),_("p",[s._v("在 SYN 报文中，序列号用来交换彼此的初始序列号，在其他报文中，序列号用来保证包的顺序。")]),s._v(" "),_("p",[_("strong",[s._v("初始序列号")]),s._v("（Initial Sequence Number, ISN）")]),s._v(" "),_("p",[s._v("建立连接时，双方会选择一个序列号作为初始序列号，通过 SYN 报文交换彼此的 ISN。")]),s._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/27/16d70264eaa6828c?imageslim",alt:"img"}}),s._v(" "),_("p",[s._v("初始建立连接的过程如下：")]),s._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/27/16d70264ef144241?imageslim",alt:"img"}}),s._v(" "),_("p",[s._v("其中第 2 步和第 3 步可以合并一起，这就是三次握手的过程")]),s._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/27/16d70264f4692792?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}}),s._v(" "),_("p",[_("strong",[s._v("初始序列号的生成")]),s._v("：源地址、目标地址、源端口、目标端口和随机因子通过 MD5 进行进行计算。为了防止对四元组相同的请求，每次初始的序列号都一样，将计算结果在加入时间因子再次计算。")]),s._v(" "),_("p",[_("strong",[s._v("序列号回绕了如何处理")]),s._v("：")]),s._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[s._v("static inline bool before(__u32 seq1, __u32 seq2)\n{\n        return (__s32)(seq1-seq2) < 0;\n}\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br"),_("span",{staticClass:"line-number"},[s._v("2")]),_("br"),_("span",{staticClass:"line-number"},[s._v("3")]),_("br"),_("span",{staticClass:"line-number"},[s._v("4")]),_("br")])]),_("p",[s._v("其中 "),_("code",[s._v("__u32")]),s._v(" 表示无符号的 32 位整数，"),_("code",[s._v("__s32")]),s._v(" 表示有符号的 32 位整数。为什么 seq1 - seq2 转为有符号的 32 位整数就可以判断 seq1 和 seq2 的大小了呢？")]),s._v(" "),_("p",[s._v("以 seq1 为 0xFFFFFFFF、seq2 为 0x02（回绕）为例，它们相减的结果如下。")]),s._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[s._v("seq1 - seq2 = 0xFFFFFFFF - 0x02 = 0xFFFFFFFD\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br")])]),_("p",[s._v("0xFFFFFFFD 最高位为 1，表示为负数，实际值为 -(0x00000002 + 1) = -3，这样即使 seq2 回绕了，也可以知道 seq1<seq2。")]),s._v(" "),_("p",[_("strong",[s._v("确认号")]),s._v("（ACK）")]),s._v(" "),_("p",[s._v("TCP "),_("strong",[s._v("使用确认号来告知对方下一个期望接收的序列号")]),s._v("，意思小于这个序列号的字节已经收到。")]),s._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/27/16d70265e3d247b3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}}),s._v(" "),_("p",[s._v("注意：")]),s._v(" "),_("ul",[_("li",[s._v("不是所有的包都需要确认")]),s._v(" "),_("li",[s._v("不是所有包都需要立即确认，可以延迟一会在确认")]),s._v(" "),_("li",[s._v("ACK 包不需要应答")]),s._v(" "),_("li",[s._v("确认号永远表示小于此确认好的字节已经收到")])]),s._v(" "),_("p",[_("strong",[s._v("TCP Flag")])]),s._v(" "),_("p",[s._v("TCP 定义了8位标志位，用来表示 TCP 包的作用，我们常说的 SYN，ACK，RST，之不是把这些标志位置为 1而已。常见的标志位有")]),s._v(" "),_("ul",[_("li",[s._v("SYN （synchronize）：用来发起连接同步双方的初始序列号")]),s._v(" "),_("li",[s._v("ACK（Acknowledge）：确认数据包")]),s._v(" "),_("li",[s._v("RST（Reset）：用来强制断开连接，通常是连接不存在了，包不合法，或者实在没有能力处理")]),s._v(" "),_("li",[s._v("FIN （Finish）：用来通知对方准备断开连接，之后不会在发送数据包了")]),s._v(" "),_("li",[s._v("PUT（Put）：告知对方这些数据包收到后马上交给上层应用，不能缓存起来。")])]),s._v(" "),_("p",[_("strong",[s._v("窗口大小")])]),s._v(" "),_("p",[s._v("TCP 窗口大小只有16位，最大窗口大小位 65535 字节 （64KB），满足不了现在的需求。因此引入了 "),_("strong",[s._v("TCP窗口缩放选项")]),s._v("来作为窗口缩放的比例因子。比例因子的范围为 0 - 14，表示将窗口大小放大到原来的 2 的 n 次方倍，如 比例因子是 7 ，当前窗口大小为 1000，则实际窗口大小为 1000 * 2^7 = 128000。")]),s._v(" "),_("p",[_("strong",[s._v("可选项")])]),s._v(" "),_("p",[s._v("格式如下：")]),s._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/27/16d70266f820427e?imageslim",alt:"img"}})]),s._v(" "),_("p",[s._v("常见可选项：")]),s._v(" "),_("p",[s._v("MSS：最大段大小选项，TCP 允许的从对方接收的最大报文段")]),s._v(" "),_("p",[s._v("SACK: 选择确认号")]),s._v(" "),_("p",[s._v("Window Scale: 窗口缩放选项")]),s._v(" "),_("p",[_("strong",[s._v("总结")])]),s._v(" "),_("p",[s._v("TCP 的首部字段由 源端口号和目标端口号，序列号，确认号，头部长度，保留字，标识符，窗口大小，可选项组成。")])])}),[],!1,null,null,null);t.default=v.exports}}]);