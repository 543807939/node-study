// 1. 导入fs模块
const fs = require('fs')
// 2. 调用fs.readFile()
fs.readFile('./02_fs文件系统模块/001.txt', 'utf-8', function (err, dataStr) {
    //3. 判断如果err不为null 则打印错误信息
    if (err) {
        return console.log(err.message);
    }
    console.log(dataStr);
})
