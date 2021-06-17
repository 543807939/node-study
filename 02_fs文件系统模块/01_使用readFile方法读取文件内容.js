// 1. 导入fs模块,来操作文件
const fs = require('fs')
// 2. 调用fs的readFile()  第一个参数为要读取的文件的相对路径  第二个参数为编码格式 第三个参数为回调函数  回调函数的第一个参数为读取失败的返回结果,第二个参数为读取成功的返回结果
fs.readFile('./02_fs文件系统模块/00.txt', 'utf-8', function (error, dataStr) {
    // 3. 打印返回结果   读取成功 则第一个返回结果为null 读取失败 则第二个参数为 undefined
    console.dir(error.errno);
    console.log('------------------------');
    console.log(dataStr);
})