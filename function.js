/**
 * 1 判断对象的数据类型
 * 简单类型用 typeOf即可 
 */
const isType = (type, context) => `[object ${type}]` === Object.prototype.toString.call(context);

// let isTy = isType('Array',[]);
// let isTy2 = isType('Object',{});

// console.log(isTy)
// console.log(isTy2)

/**
 * ES5 实现数组 map 方法
 * 值得一提的是， map 的第二个参数为第一个参数回调中的 this 指向， 如果第一个参数为箭头函数， 那设置第二个 this 会因为箭头函数的词法绑定而失效
 另外就是对稀疏数组的处理， 通过 hasOwnProperty 来判断当前下标的元素是否存在与数组中(感谢评论区的朋友)
 */