(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{436:function(v,_,t){"use strict";t.r(_);var s=t(54),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"tcp概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp概述"}},[v._v("#")]),v._v(" TCP概述")]),v._v(" "),t("h2",{attrs:{id:"运输层概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运输层概念"}},[v._v("#")]),v._v(" 运输层概念")]),v._v(" "),t("p",[v._v("网络层为主机之间提供逻辑通信，而运输层为应用进程之间提供端到端的逻辑通信。")]),v._v(" "),t("p",[v._v("软件端口是应用层的各种协议进程与运输实体进行层间交互的一种地址。TCP/IP的运输层用一个16位的端口号来标志一个端口。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),t("p",[v._v("运输层端口号分为两大类：")]),v._v(" "),t("p",[v._v("服务端端口号：包含熟知端口号、登记端口号")]),v._v(" "),t("p",[v._v("客户端端口号：短暂端口号")])]),v._v(" "),t("h2",{attrs:{id:"tcp特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp特点"}},[v._v("#")]),v._v(" TCP特点")]),v._v(" "),t("ul",[t("li",[v._v("面向连接的运输层协议")]),v._v(" "),t("li",[v._v("每一条TCP连接只能有两个端点，"),t("strong",[v._v("点对点的")])]),v._v(" "),t("li",[v._v("TCP提供"),t("strong",[v._v("可靠交付")]),v._v("的服务")]),v._v(" "),t("li",[v._v("TCP提供全双工通信，发送端和接收端都设有缓存")]),v._v(" "),t("li",[v._v("面向"),t("strong",[v._v("字节流")]),v._v("。TCP中的流指的是流入到进程或者从进程流出的字节序列")])]),v._v(" "),t("p",[v._v("TCP的报文长度是由对方给出的窗口值和当前网络的拥塞程度决定的")]),v._v(" "),t("p",[v._v("TCP连接的端点是"),t("strong",[v._v("套接字")]),v._v("接口，端口号拼接到IP地址即构成了套接字")]),v._v(" "),t("h2",{attrs:{id:"可靠传输的工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可靠传输的工作原理"}},[v._v("#")]),v._v(" 可靠传输的工作原理")]),v._v(" "),t("h3",{attrs:{id:"停止等待协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止等待协议"}},[v._v("#")]),v._v(" 停止等待协议")]),v._v(" "),t("ul",[t("li",[v._v("无差错情况：A发送分组后暂停发送，等待接收方B的确认，B收到后向A发送确认")]),v._v(" "),t("li",[v._v("出现差错：B接收到了差错，就丢弃A传送的分组且不发送任何信息，A过一段时间没有收到确认，就会"),t("strong",[v._v("超时重传")])]),v._v(" "),t("li",[v._v("确认丢失和确认迟到：B发送的确认在途中丢失了，A发生了超时重传，那么B就会收到两份一样的，B应该丢弃重复的，并重新向A发送确认")])]),v._v(" "),t("p",[v._v("可靠传输协议称为"),t("strong",[v._v("自动重传请求ARQ协议")]),v._v("。意思是重传的请求"),t("strong",[v._v("自动进行")]),v._v("，接收方不需要请求发送方重传某个出错的分组，超时了自动重传")]),v._v(" "),t("p",[v._v("这种停止等待协议，信道的利用率太低")]),v._v(" "),t("h3",{attrs:{id:"连续arq协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连续arq协议"}},[v._v("#")]),v._v(" 连续ARQ协议")]),v._v(" "),t("p",[v._v("发送方维持着一个窗口，窗口内的分组可以连续的发送出去而无需等待对方的确认，当收到一个确认之后，窗口就向前移动")]),v._v(" "),t("p",[v._v("接收方采用"),t("strong",[v._v("累计确认")]),v._v("的方式，不必对收到的分组逐个发送确认，而是对按序到达的最后一个分组发送确认，表示到这个分组为止的所有分组都已正确收到了")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),t("p",[v._v("优点：确认丢失也不必重传")]),v._v(" "),t("p",[v._v("缺点：无法向发送方反映接收方已经正确收到的所有分组的信息")])]),v._v(" "),t("h2",{attrs:{id:"tcp报文段的首部格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp报文段的首部格式"}},[v._v("#")]),v._v(" TCP报文段的首部格式")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("报文首部前20个字节是固定。首部最小长度是20个字节，最大长度60个字节")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("源端口和目的端口，各占2个字节")])]),v._v(" "),t("li",[t("p",[v._v("序号，4个字节，指的是本报文段所发送的数组的第一个字节的序号")])]),v._v(" "),t("li",[t("p",[v._v("确认号，4个字节，指期望收到对方下一个报文段的第一个数据字节的序号，"),t("strong",[v._v("若确认号为N，表示到序号N-1为止的数据都已收到")]),v._v("。B收到A序号300，长度100的数据，B给A发送确认号就应该为401，期望下次A从401开始发送")])]),v._v(" "),t("li",[t("p",[v._v("数据长度，4位，即首部长度，")])]),v._v(" "),t("li",[t("p",[v._v("控制位，占6位，表明这个报文段的意思")]),v._v(" "),t("ul",[t("li",[v._v("紧急")]),v._v(" "),t("li",[v._v("确认ACK，当ACK为1的时候确认号字段才有效，TCP连接后的所有传送报文段都必须把ACK置为1")]),v._v(" "),t("li",[v._v("推送")]),v._v(" "),t("li",[v._v("复位")]),v._v(" "),t("li",[v._v("同步SYN，"),t("strong",[v._v("SYN=1表示这是一个连接请求或者连接接收的报文")]),v._v("；在连接建立时用来同步序号。当SYN=1时而ACK等于时表明这是个连接请求报文。当对方同意连接，则响应报文中SYN=1和ACK=1。")]),v._v(" "),t("li",[v._v("终止FIN，"),t("strong",[v._v("用来释放一个连接")]),v._v("。当FIN=1时，表明"),t("strong",[v._v("此报文段的发送方")]),v._v("数据已经发送完毕，并要求释放运输链接")])])]),v._v(" "),t("li",[t("p",[v._v("窗口，指的时发送本报文段的一方的接收窗口，不是自己的发送窗口，窗口值告诉对方，"),t("strong",[v._v("从本报文段首部中的确认号算起，对方最多给自己发送的数据长度")]),v._v("。发送一个窗口值1000加确认号701，表示我最多能接收你从701开始的1000个字段，即可以理解为"),t("strong",[v._v("接收窗口")])])]),v._v(" "),t("li",[t("p",[v._v("校验和，2字节，对报文首部和数据进行校验")])]),v._v(" "),t("li",[t("p",[v._v("紧急指针")])]),v._v(" "),t("li",[t("p",[v._v("选项，可变，最长40个字节")])])])])]),v._v(" "),t("h2",{attrs:{id:"tcp可靠传输的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp可靠传输的实现"}},[v._v("#")]),v._v(" TCP可靠传输的实现")]),v._v(" "),t("h3",{attrs:{id:"滑动窗口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[v._v("#")]),v._v(" 滑动窗口")]),v._v(" "),t("p",[v._v("滑动窗口时以字节为单位的，发送方A的发送窗口，发送窗口里面的序号表示允许发送的序号。")]),v._v(" "),t("p",[v._v("发送窗口：在没有收到接收方的确认之前，窗口内的数据都可以发送出去，但不能超过接收方的接受窗口大小")]),v._v(" "),t("p",[v._v("接收方对按序收到的数据中的最高序号给出确认，例如序号为31的数据丢失了或者滞留，32、33的数据收到了，但接收方还是给出确认号为31的报文段。")]),v._v(" "),t("h3",{attrs:{id:"超时重传时间的选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#超时重传时间的选择"}},[v._v("#")]),v._v(" 超时重传时间的选择")]),v._v(" "),t("p",[v._v("TCP采取了一种自适应算法，记录报文段发出的时间以及收到相应的确认的时间，两个时间之差就是"),t("strong",[v._v("报文段的往返时间RTT")]),v._v("，TCP计算RTT的一个"),t("strong",[v._v("加权平均往返时间RTTs")]),v._v("，"),t("strong",[v._v("超时重传时间RTO")]),v._v("略大于上面得出的RTTs")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("Q&A")]),v._v(" "),t("p",[v._v("Q：如何判定此确认报文段时对先发送的报文段的确认，还是对后来重传的报文段的确认？")]),v._v(" "),t("p",[v._v("A：如果是前者，则RTTs和RTO都偏大；如果是后者，则RTTs和RTO都偏小，重传较为频繁；所以TCP对重传的报文段进行了区分："),t("strong",[v._v("报文段每重传一次，就把超时重传时间RTO增大一些")])])]),v._v(" "),t("h3",{attrs:{id:"选择确认sack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择确认sack"}},[v._v("#")]),v._v(" 选择确认SACK")]),v._v(" "),t("p",[v._v("目的：只传送缺少的数据而不重传已经正确到达接收方的数据")]),v._v(" "),t("p",[v._v("假设接收方窗口里面序号1~1000接收到了，1001~1500丢失，1501~3000接收到了，3001~3500丢失，3501~4500接收到；因为接收方对按序到达的最后一个分组发送确认，所以确认号是1001，表示希望发送方下一次发送的报文段序列号是1001，从1001开始重传；现如今可以在"),t("strong",[v._v("首部选项")]),v._v("里加上SACK选项，需要两个字节指明是SACK选项和指明这个选项要多少个字节，"),t("strong",[v._v("记录丢失报文的左边界和右边界")]),v._v("，记录一个边界需要4个字节（序号是4个字节），一个丢失的报文段有2个边界，所以最多记录4个字节块，8X4 + 2 = 34，因为可选选项最大40个字节。")]),v._v(" "),t("h2",{attrs:{id:"tcp的流量控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp的流量控制"}},[v._v("#")]),v._v(" TCP的流量控制")]),v._v(" "),t("p",[v._v("流量控制："),t("strong",[v._v("让发送方的发送速率不要太快，要让接收方来得及接收")]),v._v("。利用滑动窗口机制可以很方便地在TCP连接上实现对发送方的流量控制")]),v._v(" "),t("p",[v._v("接收方B告诉发送方A接收窗口"),t("strong",[v._v("rwnd")]),v._v("等于多少，"),t("strong",[v._v("发送方的发送窗口不能超过接收方给出的接收窗口的大小")])]),v._v(" "),t("p",[v._v("需要控制发送方的接收窗口不能太小，不能一有空间就告诉发送方仅有的大小；发送方一次也不能发送很小的报文段")]),v._v(" "),t("h2",{attrs:{id:"tcp的拥塞控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp的拥塞控制"}},[v._v("#")]),v._v(" TCP的拥塞控制")]),v._v(" "),t("p",[v._v("拥塞：对网络中某一资源的需求超过了该资源所能提供的可用部分时，网络的性能就要变坏，这种情况叫做拥塞")]),v._v(" "),t("p",[v._v("拥塞控制：防止过多的数据注入到网络中，这样可以让网络中的路由器或链路不致过载。")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("WARNING")]),v._v(" "),t("p",[v._v("拥塞控制是全局性的问题，涉及到网络中所有主机、所有路由器，考虑网路的吞吐量；")]),v._v(" "),t("p",[v._v("流量控制是点对点通信量的控制，是端到端的问题，考虑发送方的速率接收方的速率")])]),v._v(" "),t("p",[t("strong",[v._v("理想情况")]),v._v("下，随着网络输入负载的增加，网络的吞吐量也会在饱和前呈"),t("strong",[v._v("线性增长")]),v._v("；而"),t("strong",[v._v("实际情况")]),v._v("下，在网络吞吐量未达到饱和值之前，网络吞吐量明显小于理想的吞吐量的时候，网络就进入了"),t("strong",[v._v("轻度拥塞")]),v._v("的状态；当吞吐量随负载输入的增大而下降时，网络就进入了"),t("strong",[v._v("拥塞状态")])]),v._v(" "),t("h3",{attrs:{id:"tcp拥塞控制的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp拥塞控制的方法"}},[v._v("#")]),v._v(" TCP拥塞控制的方法")]),v._v(" "),t("h4",{attrs:{id:"慢开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#慢开始"}},[v._v("#")]),v._v(" 慢开始")]),v._v(" "),t("p",[v._v("发送方维持一个拥塞窗口"),t("strong",[v._v("cwnd")]),v._v("的状态变量，大小取决于网络的拥塞程度，动态变化，"),t("strong",[v._v("发送方让发送窗口等于拥塞窗口")])]),v._v(" "),t("p",[v._v("只要网络不出现拥塞，拥塞窗口就可以扩大一些；如果出现拥塞了，拥塞窗口就缩小一些。"),t("strong",[v._v("判断网络拥塞的依据就是出现了超时")])]),v._v(" "),t("p",[v._v("拥塞窗口的计算：由小到大逐渐增大发送窗口，也就是由小到大逐渐增大拥塞窗口，首先规定初始的初始拥塞窗口，每收到一个对新的报文段的确认后，可以把拥塞窗口增加最多一个"),t("strong",[v._v("SMSS")]),v._v("（发送方的最大报文字段，即报文中的最大长度）的数值；")]),v._v(" "),t("p",[v._v("第一轮发送一个报文，收到确认后，发送窗口翻倍，发送两个报文，均收到确认，窗口再翻倍，只要收到一个报文段的确认，窗口就加1")]),v._v(" "),t("p",[v._v("一个传播轮次所经历的时间就是"),t("strong",[v._v("RTT")]),v._v("，RTT不是固定不变的，一次轮次RTT指的是将发送窗口的数据都给发送完且均收到确认的时间，这是理想化的，因为实际中，每收到一个确认就能立刻发送新的报文。")]),v._v(" "),t("p",[v._v("慢开始的慢不是指增长速率慢，而是指TCP在开始发送报文时初始cwnd比较小，和刚开始把cwnd设置的很大、很多报文段可以注入网络相比慢。")]),v._v(" "),t("h4",{attrs:{id:"拥塞避免"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拥塞避免"}},[v._v("#")]),v._v(" 拥塞避免")]),v._v(" "),t("p",[v._v("为了防止当拥塞窗口，即发送窗口增大到过大而引起网络拥塞，要给拥塞窗口设置一个"),t("strong",[v._v("阈值")]),v._v("，当"),t("code",[v._v("cwnd")]),v._v("小于这个阈值，采用慢开始算法；当"),t("code",[v._v("cwnd")]),v._v("超过这个阈值，采取用"),t("strong",[v._v("拥塞避免")]),v._v("算法")]),v._v(" "),t("p",[v._v("拥塞避免算法：每经过一个往返时间RTT就把发送方的拥塞窗口cwnd加1，而不是像慢开始一样加倍增长，比慢开始算法增长缓慢了许多")]),v._v(" "),t("p",[v._v("一个轮次并不表示一条报文，可以发送许多报文")]),v._v(" "),t("p",[v._v("先执行慢开始算法，当达到慢开始门限时，采用拥塞避免算法，缓慢增长，网络拥塞出现报文段丢失时，门限值降为原来的一半，窗口变为1重新开始慢开始算法。")]),v._v(" "),t("h4",{attrs:{id:"快重传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快重传"}},[v._v("#")]),v._v(" 快重传")]),v._v(" "),t("p",[v._v("快重传可以"),t("strong",[v._v("让发送方尽早知道发生了个别报文段的丢失")])]),v._v(" "),t("p",[v._v("假定接收方都正确收到了报文M1、M2，但是丢失了M3收到了M4，本来接收方可以什么都不做，等待发送方超时重传即可，但快重传算法要求接收方"),t("strong",[v._v("必须立即发送对M2的确认")]),v._v("，当发送方"),t("strong",[v._v("连续收到3个对M2的重复确认后")]),v._v("，就知道接收方没有收到M3，就会"),t("strong",[v._v("立刻进行重传")])]),v._v(" "),t("h4",{attrs:{id:"快恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快恢复"}},[v._v("#")]),v._v(" 快恢复")]),v._v(" "),t("p",[v._v("当发送方知道只是个别报文的丢失，就不会以"),t("strong",[v._v("慢开始")]),v._v("算法重新开始，而是以"),t("strong",[v._v("快恢复算法")]),v._v("开始，此时，将慢开始门限"),t("strong",[v._v("减半")]),v._v("，且拥塞窗口设置成"),t("strong",[v._v("阈值")]),v._v("，直接从"),t("strong",[v._v("拥塞避免算法")]),v._v("开始执行")]),v._v(" "),t("p",[v._v("将拥塞控制的发送窗口（即拥塞窗口），和接收方对发送方的流量控制（即告诉发送方最大不能超过多少）结合起来，显然，发送方的窗口的上限应当取为接收方窗口rwnd和拥塞窗口cwnd中的较小值。")]),v._v(" "),t("p",[t("strong",[v._v("拥塞窗口和接收方窗口一起控制了发送方的发送速率")])]),v._v(" "),t("h3",{attrs:{id:"主动队列管理aqm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主动队列管理aqm"}},[v._v("#")]),v._v(" 主动队列管理AQM")]),v._v(" "),t("p",[v._v("网络层的策略对TCP拥塞控制影响最大的就是"),t("strong",[v._v("路由器的分组丢弃策略")]),v._v("，最简单的情况下，路由器的队列是按照"),t("strong",[v._v("先进先出")]),v._v("的规则处理的，当路由器的队列长度已经达到最大值，不得不丢掉后面到达的分组。AQM指的是应当到达某个警惕的数值时就主动丢弃分组，提醒发送方的发送速率，可能使网络的拥塞程度减轻。")]),v._v(" "),t("p",[v._v("AQM的实现方法："),t("strong",[v._v("RED")])]),v._v(" "),t("p",[v._v("RED：随机早期检测，当平均队列长度小于最小门限，新到达的分组放入队列中进行排队；当大于最大门限，把新到达的分组丢弃；当处于中间，以某一丢弃概率p丢弃新到达的分组")]),v._v(" "),t("h2",{attrs:{id:"tcp的连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp的连接"}},[v._v("#")]),v._v(" TCP的连接")]),v._v(" "),t("p",[v._v("运输连接有三个阶段：连接建立、数据传送、连接释放")]),v._v(" "),t("h3",{attrs:{id:"三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[v._v("#")]),v._v(" 三次握手")]),v._v(" "),t("p",[v._v("1、状态：CLOSED，客户端A主动打开连接，服务器B被动打开连接")]),v._v(" "),t("p",[v._v("2、客户端创建传输控制块TCB，向B发出SYN=1，同时选择一个序列号seq=x。SYN=1的数据报不能携带数据，但要消耗一个序号，这时B能确定A的发能力")]),v._v(" "),t("p",[v._v("3、B收到请求连接报文段后，要向A发送确认。SYN=1,ACK=1，确认号ack是x+1，同时选择自己的一个序列号y，不能携带数据，也要消耗一个序号，A收到后能确认B的收发能力")]),v._v(" "),t("p",[v._v("4、A收到B的确认后，还要向B发送确认。ACK=1，ack=y+1，自己的序列号是x+1，这个报文段可以发送数据了，这是B能知道A的收发能力。")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("Q&A")]),v._v(" "),t("p",[v._v("Q：为什么两次握手不行？")]),v._v(" "),t("p",[v._v("A：有之前的异常连接请求滞留在网络中，当再发给B时，B会以为A再发了一次新的连接请求，于是向A发送了确认，又建立了连接，但此时A又不想给B发数据，所以不会确认B的连接请求，这样B的资源就白白浪费了")])]),v._v(" "),t("h4",{attrs:{id:"四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[v._v("#")]),v._v(" 四次挥手")]),v._v(" "),t("p",[v._v("1、A主动发出连接释放报文，停止发送数据，FIN=1，seq=u，等于前面已传送的数据的最后一个字节加一，A进入FIN-WAIT-1状态，等待B的确认，FIN报文段即使不携带数据，也要消耗掉一个序号")]),v._v(" "),t("p",[v._v("2、B收到A的释放请求后，要发送确认，发出ACK=1，ack确认号等于u+1（希望收到下次A发送过来的序列号是u+1），选择自己序列号为v，等于B前面已传送过的数据的最后一个字节的序号加一，B进入CLOSE-WAIT状态，这时，"),t("strong",[v._v("A向B这个方向的连接就释放了，TCP处于半关闭状态")])]),v._v(" "),t("p",[v._v("3、A收到B的确认后，进入FIN-WAIT2状态，等到B发送它的请求释放报文")]),v._v(" "),t("p",[v._v("4、若B已经没有数据要发给A，则发送FIN=1，序列号为w，ACK=1，重复发送确认号为u+1（希望收到下次A发送过来的序列号是u+1，因为A已经不能发送数据，这个确认号和上一次必须一致），B进入LAST-ACK最后确认状态")]),v._v(" "),t("p",[v._v("5、A收到B的请求释放连接报文后，也要做出确认。确认报文中ACK=1，ack=w+1，而自己的序列号是u+1，然后进入"),t("strong",[v._v("TIME-WAIT（时间等待）状态")]),v._v("，现在TCP还没有被释放掉，必须经过"),t("strong",[v._v("时间等待计时器设置的时间2MSL")]),v._v("后，A才进入CLOSED状态；"),t("strong",[v._v("B结束TCP连接的时间要比A早")])]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("Q&A")]),v._v(" "),t("p",[v._v("Q：为什么A在最后一次挥手发出确认报文后还要等待2MSL才进入CLOSED状态？")]),v._v(" "),t("p",[v._v("A：为了保证A传的确认报文能够到达B，这个ACK报可能丢失，如果丢失，B收不到确认，就要重传，A就能在2MSL时间内收到重传这个FIN+ACK报文段。接着A再重传一次确认，重新启动时间等待计时器。如果A立刻释放连接，那么当报文丢失的时候就收不到B的重传报文；A在发送完最后一个ACK报文后，再经过2MSL，就能使本次连接内所有的报文段都从网络中消失，这样就可以使下一个新的连接中不会出现这种旧的连接请求报文段。")])]),v._v(" "),t("h3",{attrs:{id:"和udp的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#和udp的区别"}},[v._v("#")]),v._v(" 和UDP的区别")]),v._v(" "),t("p",[v._v("相同点：都是运输层的协议，提供应用进程之间的逻辑通信，端到端，都有"),t("strong",[v._v("复用")]),v._v("和"),t("strong",[v._v("分用")]),v._v("的功能")]),v._v(" "),t("p",[v._v("复用：指的是应用层所有应用进程都可以通过运输层在传送给到IP层")]),v._v(" "),t("p",[v._v("分用：指的是运输层从IP层收到发送给各应用进程的数据后，必须分别交付指明的各应用进程")]),v._v(" "),t("h4",{attrs:{id:"udp的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp的特点"}},[v._v("#")]),v._v(" UDP的特点")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("无连接")]),v._v("，减少了开销和发送数据之前的时延，端口处没有套接字")]),v._v(" "),t("li",[v._v("尽"),t("strong",[v._v("最大努力交付")]),v._v("。不需要为止复杂的连接状态")]),v._v(" "),t("li",[v._v("首部只有8个字节")]),v._v(" "),t("li",[v._v("面向"),t("strong",[v._v("报文段")]),v._v("，对于向上交付过来的IP数据报，去除首部后的报文原封不动的转发")]),v._v(" "),t("li",[t("strong",[v._v("没有拥塞控制")]),v._v("，比较适合于实时的应用")]),v._v(" "),t("li",[v._v("支持"),t("strong",[v._v("一对一、一对多、多对一、多对多")]),v._v("的交互通信")])])])}),[],!1,null,null,null);_.default=a.exports}}]);