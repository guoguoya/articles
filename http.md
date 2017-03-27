#http(yper text transfer protocol)

### http缓存（可以是公开的或是私有的，像浏览器的缓存）



### proxies

缓存（可以是公开的或是私有的，像浏览器的缓存）
过滤（像反病毒扫描，家长监护）
负载均衡，让多个服务器服务不同的请求
对不同资源的权限控制
登陆，允许存储历史信息

### http基本性质

1. 扩展性 http headers 让协议扩展变得非常容易。
2. http是无状态，有会话的。 两次成功执行的请求之间是没有关系的。cookie的使用可以创建有状态的会话。

### http控制的常见特性

1.缓存 文件怎么缓存能够通过http来控制。
2.开放同源限制。
3.一些页面能够被保护起来，仅让特定的用户进行访问。
4.代理 http请求通过代理穿过网络障碍
5.会话 cookies用一个服务端的状态连接起了每一个请求。

http请求由以下元素组成：
+ 一个http的method
+ 获取资源的路径
+ http协议版本号
+ headers
+ body

http回应由以下元素组成：
+ http协议版本号
+ 状态码
+ 状态信息
+ headers
+ body

requests部分header参数（举例）：

Accept 指定客户端能够接收的内容类型
Accept-Encoding 指定浏览器可以支持的文本服务器返回内容压缩编码类型
Accept-Ranges 请求网页实体的字段范围
Authorization  http授权的授权证书
Cache-Control  指定请求和响应遵循的缓存机制
Cookle  HTTP请求发送是，会把保存在改请求域名下的所有cookie值发送为web服务器 
Content-Type 告诉接收方已何种形式接收请求实体body所带数据。
HOST 指定请求的服务器的域名和端口号
Date 请求时间
User-Agent 包含发出请求的用户信息

response部分header参数（举例）：

Accept-Ranges
Cache-Control
Content-Type
Expores 响应过期时间
server web服务器软件名称

告诉浏览器（用户代理）和服务器 怎么取做