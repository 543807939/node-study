// 1. 引入fs模块
const fs = require('fs')
// 2. 调用fs.readFile()方法读取文件
// 使用完整的文件路径  js中\为转义字符 应该使用\\ 代替 \
fs.readFile('D:\\黑马前端\\04阶段四_前后端交互\\04_node\\02_fs文件系统模块\\06_使用完整路径替代相对路径.js', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log(err.message);
    }
    console.log(dataStr);
})