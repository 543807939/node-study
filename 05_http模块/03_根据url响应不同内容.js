// 1. 导入http模块
const http = require('http')
// 2. 创建服务器对象实例
const serve = http.createServer()
// 3. 服务器对象绑定request事件,根据请求返回结果
serve.on('request', (req, res) => {
    // 3.1 获取请求的url地址
    let url = req.url
    // 3.2 设置默认响应内容为 404 Not Found
    let content = '<h3 style="text-align:center;">404 Not Found</h3>'
    // 3.3 判断用户请求的是否是/ 或者/index.html
    if (url == '/' || url == '/index.html') {
        content = '<h3 style="text-align:center;">欢迎来到首页</h3>'
    } else if (url == '/about.html') {
        // 3.4 判断用户请求的是否是/about.html
        content = '<h3 style="text-align:center;">关于你的风景</h3>'
    }

    // 3.5 设置响应头,防止乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    // 3.6 把响应返回 结束请求
    res.end(content)
})

// 4. 开启服务器
serve.listen(80, function () {
    console.log('服务开启');
})