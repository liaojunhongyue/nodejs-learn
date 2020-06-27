const fs = require('fs')

// 第一个参数：写入的文件路径（文件名需要注意不要有特殊符号）
// 第二个参数：写入的内容
// 第三个参数：回调函数
fs.writeFile('./writedata.txt', '我是nodejs', function(error) {
	if (error) {
		console.log('文件写入失败')
	} else {
		console.log('文件写入成功')
	}
})