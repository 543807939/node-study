// 1. 引入http模块
const http = require('http')
// 2. 创建服务
const serve = http.createServer()
// 3. 绑定request事件
serve.on('request', (req, res) => {
    console.log('我接收到了');
    let str = `你的url是${req.url},你的method是${req.method}`
    console.log(str);

    // 防止中文乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(str)
})
// 4. 开启服务
serve.listen(80, function () {
    console.log('我开启了');
})