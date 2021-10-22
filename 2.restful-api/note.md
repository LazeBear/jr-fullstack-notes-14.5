OSI model

TCP transmission control protocol
UDP user datagram protocol

A B
1,2,3 1,2,3 -> TCP
1,2,3 3,1 (2 lost) -> UDP\

TCP/IP protocol

HTTP
0.9
1.0
1.1
2
3

HTTP Request: [headers, body]
headers 头文件

三次握手，四次挥手

persistent connection 持久连接

https (tls)

http2
server push

uniform resource locator
统一资源定位符

https -> 443
http -> 80

query param
query parameter

https://nodejs.org
/en/docs/#api-reference-documentation

# anchor

锚点

request:
GET / HTTP/2
METHOD PATH PROTOCOL

client [browser, server, cmd line]
server

response:
HTTP/2 200
PROTOCOL Status code (状态码)

GET -> 获取数据（获取页面）
POST -> 添加
PUT -> 数据更新， 数据替换
DELETE -> 删除
PATCH -> 数据更新， 只对部分数据做更新

X-custom

204 no content
209 conflicts

serialize deserialize
序列化与反序列化

JSON.parse(JSON.stringify(object))

public web api - web service

GET - Read
POST - create
PUT - update
DELETE - delete

CRUD - 增删改查

A,B
B,A

RESTful api 设计

1. versioning
   example.com/api/books
   api.example.com/books
   /api/v1/books
   /v1/books
   /v2/books

2. url 使用名词，不要使用动词, 尽量使用复数
   GET /v1/books
   GET /v1/getBooks x
   POST /v1/books
   POST /v1/addBooks x
   GET /v1/addBooks x

3. 保证我们 GET 的 method 不会对资源进行污染
   GET /v1/addBooks x

4. url 推荐使用嵌套结构
   GET /posts/:id
   GET /posts/:postId/comments
   GET /posts/{postId}/comments

5. 注意返回结果的大小 （分页）
   10000 个 book 的数据
   GET /v1/books -> 10000 个 book object
   分成 1000 页，每页 10 个数据
   GET /v1/books -> 10 个数据，当前第一页
   GET /V1/books?page=2&pageSize=10

6. 使用正确的 http response 的 status code 来表示请求的结果

7. 尽量返回可读的（明确易懂的）的文本（错误信息）
   {"error":"invalid password"}
   {"error": 100001}
   "error"

monolith server
