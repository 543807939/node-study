// 引入fs模块
const fs = require('fs')
// 调用fs.readFile()读取文件
// 使用node  执行时   路径为 node执行时所在路径拼接上 readFile的文件路径  所有node执行时路径会影响执行结果
fs.readFile('./02_fs文件系统模块/05_fs路径拼接问题.js', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log(err.message);
    }
    console.log(dataStr);
})