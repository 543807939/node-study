const m = require('./08_exports注意事项')
console.log(m);
console.log(m.uname);
m.sayHi(m.uname)
console.log(m.age);
console.log(module);