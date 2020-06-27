const http = require('http')

const server = http.createServer()

// 当客户端请求过来，就会自动触发服务器的request事件，执行回调 
/**
 * request请求事件处理函数，需要接收两个参数
 * Request 请求对象 请求对象可以用来获取客户端的一些请求信息 例如请求路径
 * Response 响应对象 响应对象可以用来给客户端发送响应消息
 */
server.on('request', function(req, res) {
  console.log('收到客户端的请求了，请求的路径是' + req.url)
  // response有一个方法write，可以用来给客户端发送响应数据
  // write可以使用多次，但是最后一定要用end来结束响应，否则客户端会一直等待
  const url = req.url

  const products = [
    {
      name: '苹果'
    },
    {
      name: '香蕉'
    }
  ]
  if (url === '/') {
    res.end(JSON.stringify(products))
  } else if (url === '/login') {
    res.end('login page')
  } else {
    res.end('404 not found')
  }
})

// 绑定端口号，启动服务器
server.listen(3001, function() {
  console.log('服务器启动成功了，可以访问http://127.0.0.1:3001')
})