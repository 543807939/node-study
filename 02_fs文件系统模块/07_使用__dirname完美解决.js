// 1. 引入fs模块
const fs = require('fs')
// 2. 调用fs.readFile()来读取文件
//  __dirname 表示当前文件所处的目录
fs.readFile(__dirname + '/08___dirname.js', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log(err.message);
    }
    console.log(dataStr);
})