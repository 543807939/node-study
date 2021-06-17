// 1. 导入fs模块
const fs = require('fs')
// 2. 读取成绩.txt的数据
fs.readFile('./02_fs文件系统模块/成绩.txt', 'utf-8', function (err, dataStr) {
    // 读取失败 返回并打印数据
    if (err) {
        return console.log(err.message);
    }
    // 读取成功 处理数据
    let gradeArr = dataStr.split(' ').map(ele => ele.replace('=', ':'))
    let grade_ok = gradeArr.join('\r\n')
    // 调用写入函数
    writeGrade(grade_ok)
})
// 定义写入函数
function writeGrade(data) {
    fs.writeFile('./02_fs文件系统模块/成绩-ok.txt', data, 'utf-8', function (err) {
        if (err) {
            return console.log(err.message);
        }
        console.log('写入成绩成功');
    })
}