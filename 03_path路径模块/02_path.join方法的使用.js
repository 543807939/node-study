// 1. 导入path模块
const path = require('path')
// 2 使用path.join([...paths])方法  可以传入任意多的参数
let url1 = path.join('/a', '/b/c', '../', '/d')
console.log(url1);  // \a\b\d  ../抵消了一层/c

// 导入fs模块
const fs = require('fs')
// 调用fs.readFile()方法
fs.readFile(path.join(__dirname, './test.txt'), 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log(err.message);
    }
    console.log(dataStr);
})