// 导入 fs 模块
const fs = require('fs')
// 执行fs.writeFile(file,data[,options],callback)  第一个必选参数为要写入的文件 第二个必选参数为要写入的数据 可选参数为写入的格式 第三个必选参数为回调函数
fs.writeFile('./02_fs文件系统模块/01.txt', '唐磊-2000', 'utf-8', function (err, dataStr) {
    // 写入成功后 err为null  dataStr为undefined
    if (err) {
        return console.log(err.message);
    }
    console.log('写入文件成功');
})