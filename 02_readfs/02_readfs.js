const fs = require('fs')

// 第一个参数是读取的文件路径
// 第二个参数是回调
fs.readFile('../01_helloworld/01_helloworld.js', function(error, data) {
	// 如果读取文件成功，error就是null
	if (error) {
		console.log('读取文件失败了')
		return false
	}
  console.log(data.toString())
})