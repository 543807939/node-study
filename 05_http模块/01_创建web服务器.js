// 1. 导入http模块
const http = require('http')
// 2. 创建web服务器实例
const serve = http.createServer()
// 3. 为服务器绑定request事件,监听客户端请求
serve.on('request', (req, res) => {
    console.log(`your request url is ${req.url}, your request method is ${req.method}`);
    console.log('someone visit my web serve');
})
// 4. 启动服务器
serve.listen(80, () => {
    console.log('http serve running at http://127.0.0.1');
})