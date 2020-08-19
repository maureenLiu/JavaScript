// 服务器开发
var http = require("http");
// 创建服务器对象
var app = http.createServer(function(req, res) {
	// 设置字符集，防止乱码
	res.setHeader('Content-Type', 'text/html;charset=utf-8');
	// 服务器端下发状态码
	res.statusCode = 201;
	// 服务器响应的数据
	res.end("自己开发的服务器");
});
// 端口号设置
app.listen(3000);

// 运行这个js文件，就创建了一个服务器，然后进入网址127.0.0.1:3000