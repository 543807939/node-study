// 1. 导入需要的模块
const fs = require('fs')
const path = require('path')
const http = require('http')

// 2. 创建服务器对象实例
const serve = http.createServer()

// 3. 绑定服务器request事件
serve.on('request', (req, res) => {
    // 3.1 将请求的文件路径映射为文件存放路径
    // let fpath = path.join(__dirname, req.url)
    let fpath = ''
    // 3.2 根据请求路径 拼接文件所在路径
    if (req.url == '/') {
        fpath = path.join(__dirname, 'clock/index.html')
    } else {
        fpath = path.join(__dirname, 'clock/', req.url)
    }
    // 3.2 读取文件 如果请求失败 返回404 否则 将文件返回给客户端
    fs.readFile(fpath, 'utf-8', function (err, dataStr) {
        if (err) {
            return res.end('<h1 style="text-align:center;">404 Not Found</h1>')
        }
        // res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end(dataStr)
    })
})

// 4. 开启服务器
serve.listen(80, function () {
    console.log('服务器开始,地址为: http://127.0.0.1');
})