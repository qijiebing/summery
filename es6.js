// 结构复制
let [,,j] = [1,3,2]

// 模板字符串
function des(string, ...rest) {
    console.log(string)
    console.log(rest)
}
des`${name}123`

// 箭头函数没有自己的 this  this就是外层代码的this 避免了this指向的问题
// setTime(function (params) {
//     // this = window
// }, 10)
// setTimeout(() => {
//     // 
// }, 10);

let obj = {
    name: 'a',
    sayName: ()=>{ 
        console.log(this,this.name) // undefind
    }
}
let aa = obj.sayName // this window
aa()
obj.sayName()  // obj 没有形成作用域

class Parent{
   constructor(name) {
        this.name = name
   }
   getName() {
       console.log(this.name)
   }  
}