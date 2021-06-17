// 引入fs 和 path 模块
const fs = require('fs')
const path = require('path')

// 调用方法
fs.readFile(path.join(__dirname,'./02_fs文件系统模块/00.txt'),'utf-8',function(err,dataStr){
    console.log(__filename);
    console.log(path.basename(__filename));
    console.log(path.extname(__filename));
    if(err){
        return console.log(err.message);
    }
    // console.log(dataStr);
    console.log('读取成功');
})