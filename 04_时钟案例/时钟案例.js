// 导入所需模块
const fs = require('fs')  // filesystem
const path = require('path')

// 定义正则表达式
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 读取文件
fs.readFile(path.join(__dirname, './index.html'), 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log(`读取文件失败 ${err.message}`);
    }
    resloveCSS(dataStr)
    resloveJavaScript(dataStr)
    resloveHtml(dataStr)
})

// 自定义resloveCSS方法
function resloveCSS(html) {
    // html 为读入的html文件
    // 1. 用正则表达式匹配html
    let arr = regStyle.exec(html)
    if (arr && arr.length) {
        arr.map(ele => ele.replace('<style>', '').replace('</style>', '')).forEach(element => {
            fs.writeFile(path.join(__dirname, './clock/css/index.css'), element, 'utf-8', function (err) {
                if (err) {
                    return console.log(`写入文件失败 ${err.message}`);
                }
                return console.log('写入css文件成功');
            })
        });
    } else {
        return console.log('没有css内容');
    }

}
// 自定义resloveJS方法
function resloveJavaScript(html) {
    // html 为读入的html文件
    // 1. 用正则表达式匹配html
    let arr = regScript.exec(html)
    if (arr && arr.length) {
        arr.map(function (ele) {
            return ele.replace('<script>', '').replace('</script>', '')
        }).forEach(function (element) {
            {
                fs.writeFile(path.join(__dirname, './clock/js/index.js'), element, 'utf-8', function (err) {
                    if (err) {
                        return console.log(`写入文件失败 ${err.message}`);
                    }
                    return console.log('写入js文件成功');
                })
            }
        });
    } else {
        return console.log('没有js内容');
    }
}

// 定义resloveHtml方法
function resloveHtml(html) {
    let newHtml = html.replace(regStyle, '<link rel="stylesheet" href="./css/index.css"/>').replace(regScript, '<script src="./js/index.js"></script>')
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHtml, 'utf-8', function (err) {
        if (err) {
            return console.log(err.message);
        }
        console.log('写入html文件成功');
    })
}