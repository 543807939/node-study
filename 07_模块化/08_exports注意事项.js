const uname = '张三'
const age = 19

module.exports.uname = uname
module.exports.age = age
module.exports.sayHi = function (param) {
    console.log(`交个朋宇吧,我是${param}`);
}
// module.exports = {} 定义在下边时,会覆盖之前的
module.exports = {
    uname: '嘿嘿嘿',
    sayHi: function () {
        console.log('hello');
    }
}