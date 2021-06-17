// 1. 导入所需模块
const fs = require('fs')
const path = require('path')

// 2. 调用方法
// fs.readFile(path.join(__dirname, './test.1txt'), 'utf-8', function (err, dataStr) {

//     if (err) {
//         for (const key in err) {
//             console.log(`${key}  :  ${err[key]}`);
//         }
//         return console.log(err.message);
//     }
//     console.log(dataStr);
// })

const fullPath = '/a/b/c/s/index.pdf'
console.log(path.basename(fullPath));
// 去掉后缀
console.log(path.basename(fullPath, '.pdf'));