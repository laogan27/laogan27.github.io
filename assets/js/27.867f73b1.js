(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{439:function(v,_,t){"use strict";t.r(_);var s=t(54),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"数据链路层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层"}},[v._v("#")]),v._v(" 数据链路层")]),v._v(" "),t("h2",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[v._v("#")]),v._v(" 基本概念")]),v._v(" "),t("p",[v._v("数据链路层使用的信道主要有两种类型："),t("strong",[v._v("点对点信道")]),v._v("、"),t("strong",[v._v("广播信道")])]),v._v(" "),t("p",[v._v("链路：从一个结点到相邻结点的一段物理线路，中间没有任何其他交换结点。是一条路径的一部分。")]),v._v(" "),t("p",[v._v("数据链路：除了必须有一条物理线路以外，还必须有一些必要的通信协议来控制这些数据的传输")]),v._v(" "),t("p",[v._v("数据链路层的三个基本问题："),t("strong",[v._v("封装成帧")]),v._v("，"),t("strong",[v._v("透明传输")]),v._v("、"),t("strong",[v._v("差错检测")])]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("DETAILS")]),v._v(" "),t("p",[v._v("封装成帧：首部尾部打上帧定界符。一个帧的帧长等于帧的数据部分加上帧首部和帧尾部的长度。")]),v._v(" "),t("p",[v._v("透明传输：数据中出现和界定符相同的字符要进行处理。所谓透明，就是无论什么样的比特组合，都能原样没有差错的通过这个数据链路层，那么就像这个数据链路层“”不存在“一样。发送端的数据链路层在数据中出现控制字符时要插入一些转义字符")]),v._v(" "),t("p",[v._v("差错检测：用CRC方法检测。为了检错要添加冗余码。保证无比特差错")])]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("WARNING")]),v._v(" "),t("p",[v._v("无比特差错和无传输差错是两个不同概念，差错检测能够实现无比特差错的传输")])]),v._v(" "),t("h2",{attrs:{id:"点对点信道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#点对点信道"}},[v._v("#")]),v._v(" 点对点信道")]),v._v(" "),t("p",[v._v("点对点信道的数据链路层的协议数据单元：帧")]),v._v(" "),t("p",[v._v("通信的主要步骤：1、结合网络层交下来的IP数据报添加首部和尾部封装成帧；2、封装好的帧进行传输；3、接收方收到的帧无差错则提取IP数据报交给上层，出差错则丢弃")]),v._v(" "),t("h2",{attrs:{id:"ppp点对点协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ppp点对点协议"}},[v._v("#")]),v._v(" PPP点对点协议")]),v._v(" "),t("p",[v._v("点对点协议主要应用在用户计算机与ISP进行通信时用的数据链路层协议。")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("WARNING")]),v._v(" "),t("p",[v._v("PPP协议只支持全双工链路")])]),v._v(" "),t("p",[v._v("协议由三部分组成：1、将IP数据报封装到链路中的方法；2、建立LCP链路；3、网络控制协议NCP")]),v._v(" "),t("p",[v._v("PPP协议的帧格式：首尾一个字节的界定符，首部第四个字段2个字节是协议字段，中间信息部分不超过1500个字节")]),v._v(" "),t("p",[v._v("PPP协议的过程：")]),v._v(" "),t("ol",[t("li",[v._v("（链路静止）此时用户和ISP的路由器之间并没有物理层连接。用户请求接入ISP")]),v._v(" "),t("li",[v._v("（链路建立）协商LCP配置选项，建立链路层的LCP连接。选项包括链路层的最大帧长等。")]),v._v(" "),t("li",[v._v("（鉴别）鉴别用户身份")]),v._v(" "),t("li",[v._v("（网络层协议）NCP根据网络层的不同协议互相交换网络层特定的网络控制分组。配置网络层协议，给用户分配一个临时的IP地址")]),v._v(" "),t("li",[v._v("（链路打开）两个端可以彼此向对方发送分组")])]),v._v(" "),t("h2",{attrs:{id:"使用广播信道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用广播信道"}},[v._v("#")]),v._v(" 使用广播信道")]),v._v(" "),t("p",[v._v("局域网比广域网具有更高的数据率、较低的时延、较小的误码率。")]),v._v(" "),t("p",[v._v("局域网常用的网络拓扑结构：星形网、环形网、总线网")]),v._v(" "),t("p",[v._v("以太网是用"),t("strong",[v._v("随机接入")]),v._v("的，随机接入是一种共享信道的方法，特点是所有用户都可随机的发送信息，但如果两个用户在同一时刻发信息，就会产生"),t("strong",[v._v("碰撞")]),v._v("，所以必须要有解决"),t("strong",[v._v("碰撞")]),v._v("的网络协议")]),v._v(" "),t("p",[v._v("适配器的作用："),t("strong",[v._v("计算机与外界局域网的连接时通过适配器")]),v._v("（简称"),t("strong",[v._v("网卡")]),v._v("）进行的。适配器与局域网的通信是靠电缆或双绞线，与计算机之间的通信是靠I/O总线；把接收有差错的帧丢弃，把正确的帧使用中断告知计算机并交付网络层，把计算机要发送的IP数据报组装成帧发送到局域网。")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("WARNING")]),v._v(" "),t("p",[v._v("计算机的硬件地址在适配器的ROM中，但计算机的IP地址在计算机的存储器中")])]),v._v(" "),t("p",[v._v("总线的特点：当一台计算机发送数据时，总线上所有计算机都能检测到这个数据")]),v._v(" "),t("p",[v._v("为了通信的简便，以太网采取以下两种措施：")]),v._v(" "),t("p",[v._v("1、采用灵活的无连接工作方式。以太网提供的服务时尽最大努力交付、即不可靠的传输。对差错帧是否重传完全由高层决定。")]),v._v(" "),t("p",[v._v("2、发送的数据都用曼彻斯特编码的信号。")]),v._v(" "),t("h3",{attrs:{id:"csma-cd协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csma-cd协议"}},[v._v("#")]),v._v(" CSMA/CD协议")]),v._v(" "),t("p",[v._v("总线上只要一台计算机发送数据，总线的资源就被占用，在用一时间只能允许一台计算机发送数据。")]),v._v(" "),t("p",[v._v("载波监听多点接入/碰撞检测")]),v._v(" "),t("ul",[t("li",[v._v("多点接入：许多计算机以多点接入的方式连接在一条总线上。")]),v._v(" "),t("li",[v._v("载波监听：不管在发送前，还是在发送中，每个站都必须不停的检测信道。")]),v._v(" "),t("li",[v._v("碰撞检测：边发送边监听，发送过程中检测有没有其他站也在发送数据。任何一个正在发送数据的站，一旦总线检测出了碰撞，就要立即停止发送数据，等待一段随机时间后再次发送")])]),v._v(" "),t("p",[v._v("电磁波在1km电缆的传播时延约为5us。总线上单程端到端的传播时延记为τ。发送碰撞的那个时刻，发端和收端都还不知道发生了碰撞，必须等至少τ数据到达某一方时才被检测到。")]),v._v(" "),t("p",[v._v("发送数据帧后"),t("strong",[v._v("至多")]),v._v("经过时间2τ就可以知道所发送搞得帧是否发生了碰撞。")]),v._v(" "),t("p",[t("strong",[v._v("争用期")]),v._v("：两倍单程端到端传播时延2τ。")]),v._v(" "),t("p",[v._v("在"),t("strong",[v._v("争用期")]),v._v("内一直未检测到碰撞，这个帧肯定能够发送成功。")]),v._v(" "),t("p",[v._v("对于10Mbit/s的以太网，在争用期内可发送512bit。即争用期是512比特时间")]),v._v(" "),t("p",[v._v("在"),t("strong",[v._v("争用期")]),v._v("内检测到碰撞，立即停止发送数据，按规定发送人为干扰信号，适配器接着做"),t("strong",[v._v("退避算法")]),v._v("（等待一个随机时间重传），若重传16次都不能成功，则停止重传。")]),v._v(" "),t("p",[v._v("最短帧长64字节，即512bit。检测到了冲突就停止发送，这时发送出去的帧一定小于64字节，因此长度小于64字节的帧都是由于冲突引起的无效帧。")]),v._v(" "),t("p",[t("strong",[v._v("强化碰撞")]),v._v("：发送数据的站一旦发现发生了碰撞，除了立即停止发送数据，还要继续发送32/48bit的人为干扰信号。")]),v._v(" "),t("p",[v._v("信道必须在"),t("strong",[v._v("96比特时间")]),v._v("内保持空闲，适配器才发送这个帧。")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("WARNING")]),v._v(" "),t("p",[v._v("使用CSMA/CD协议的以太网不可能进行全双工通信，而只能进行双向交替通信（半双工）")])]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("WARNING")]),v._v(" "),t("p",[v._v("集线器工作在"),t("strong",[v._v("物理层")]),v._v("，集线器上的星型拓扑结构本质上还是总线结构，还是半双工通信，故还需使用CSMA/CD协议")]),v._v(" "),t("p",[v._v("以太网交换器的出现，工作在全双工方式上，多对主机能同时通信，相互通信的主机独占传输媒体，无碰撞的传输数据，因此不适用CSMA/CD协议了")])]),v._v(" "),t("h2",{attrs:{id:"mac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac"}},[v._v("#")]),v._v(" MAC")]),v._v(" "),t("p",[v._v("MAC地址是固化在适配器ROM中的地址，即适配器标识符")]),v._v(" "),t("p",[v._v("局域网适配器使用的是"),t("strong",[v._v("6字节")]),v._v("的MAC地址，前三个字节使机构标识符，后三个字节由厂家自行指派。")]),v._v(" "),t("p",[v._v("以太网V2的MAC帧格式（最短帧长64个字节，64-18就是数据字段的最小长度）：")]),v._v(" "),t("ul",[t("li",[v._v("6字节目的地址")]),v._v(" "),t("li",[v._v("6字节源地址")]),v._v(" "),t("li",[v._v("2字节类型字段，标志上一层使用的是什么协议，就把MAC交给上一层的这个协议")]),v._v(" "),t("li",[v._v("46~1500字节数据长度")]),v._v(" "),t("li",[v._v("4字节FCS，用来做CRC检验")])]),v._v(" "),t("p",[v._v("实际传输时，要比MAC帧多出8个字节。为了接收端迅速实现位同步，要前插8个字节，其中包含帧开始定界符。")]),v._v(" "),t("p",[v._v("以太网传送帧时，各帧之间有一定的间隙。以太网不需要帧结束定界符，也不需要字节插入来保证透明传输。")]),v._v(" "),t("p",[v._v("IEEE802.3标准规定以下情况为无效的MAC帧:")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("帧的长度不是整数个字节")])]),v._v(" "),t("li",[t("p",[v._v("用收到的帧检测序列FCS检测出有差错")])]),v._v(" "),t("li",[t("p",[v._v("收到的帧的数据长度不在46~1500字节之间")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);