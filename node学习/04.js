// 该js文件必须和下载的自定义模块在同一个文件夹中
// 引入社区自定义模块colors
var colors = require("colors");
// 输出文字是绿色
console.log("maureen".green);
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('小明'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

// 引入solarLunar模块
var solarLunar = require("solarLunar");
// 输入的日子为公历
const solar2lunarData = solarLunar.solar2lunar(2020, 08, 12); 
console.log(solar2lunarData);
console.log(solar2lunarData.animal);