// node软件提供的模块（给js赋予的超能力），node软件本身就有
// 更多模块的使用可以查看node官方文档：http://nodejs.cn/api/

<!-- 1、fs模块：可以通过js向文件写入数据 -->
var fs = require("fs"); 
// 向某个文件写入数据,如果文件不存在会自动创建
fs.writeFile("./maureen.txt","maureen是最优秀的",function() {
	console.log("数据写入成功");
});

// 读取数据
fs.readFile("./maureen.txt", function(err, data) {
	console.log(data.toString());
});

<!-- 2、querystring模块:可以将json数据格式转换为queryString字符串 -->
var querystring = require("querystring");
// 将JSON转换为queryString字符串
console.log(querystring.stringify({
	"a" : 1,
	"b" : 2
}));




