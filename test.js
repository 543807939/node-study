var b = 1
{
    // console.log(b);  // 函数声明提升
    b = 10
    function b() { }
    b = 20
    console.log(b);
}
console.log(b);
