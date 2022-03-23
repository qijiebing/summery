/**
 * 1. 判断对象的数据类型
 * 简单类型用 typeOf即可 
 */
const isType = (type, context) => `[object ${type}]` === Object.prototype.toString.call(context);

// let isTy = isType('Array',[]);
// let isTy2 = isType('Object',{});

// console.log(isTy)
// console.log(isTy2)

/**
 *2. ES5 实现数组 map 方法
 * 值得一提的是， map 的第二个参数为第一个参数回调中的 this 指向， 如果第一个参数为箭头函数， 那设置第二个 this 会因为箭头函数的词法绑定而失效
 另外就是对稀疏数组的处理， 通过 hasOwnProperty 来判断当前下标的元素是否存在与数组中(感谢评论区的朋友)
 */
/**
 *  arr.map( function(value,index,arr){   },this)  
 */
const selfMap = function(fn, context) {
    let arr = Array.prototype.slice.call(this)  //this 指向被map的数组
    let mappedArr = []
    for(let i = 0; i< arr.length; i++){

        if(!arr.hasOwnProperty(i)) continue

        mappedArr.push(fn.call(context,arr[i], i,this))
    }
    return mappedArr
}
 
// let arrM = [1, 2, 3];
// // let DbARRM = arrM.selfMap( v=>{
// //      v * 2
// // } );
// let DbARRM= [];
//   DbARRM =  selfMap.call(arrM, function (v,i) {
//      v * 2
// }, DbARRM)
// console.log(DbARRM)
 
/**
 * 3. 使用reduce实现数组map方法
 */
const selfMap2 = function(fn,context){
    let arr = Array.prototype.slice.call(this)
    return arr.reduce((pre,cur,index)=>{
        return [...pre,fn.call(context,cur,index,this)]
    },[])
}

/**
 * 4 ES5 实现数组filter方法
 */
const selfFilter = function(fn,context) {
    let arr = Array.prototype.slice.call(this)
    let fliteredArr = []
    for (let i = 0; i<arr.length ; i++){
        if(!arr.hasOwnProperty(i)) continue

        fn.call(context,arr[i],i,this) && fliteredArr.push(arr[i]) 
    }
    return fliteredArr
}

/**
 * 5.使用 reduce实现数组 filter 方法
 */
const selfFilter2 = function(fn,context) {
    return this.reduce((pre,cur,index)=>{
        return fn.call(context,cur,index,this) ?
        [...pre, cur] : [...pre]
    },[])
}

/***
 * 6. ES5实现数组some方法
 * 执行 some 方法的数组如果是一个空数组， 最终始终会返回 false， 而另一个数组的 every 方法中的数组如果是一个空数组， 会始终返回 true
 */

 const selfSome = function(fn, context) {
     let arr = Array.prototype.slice.call(this)

     if(!arr.length) return false

     let flag = false
     for(let i=0; i<arr.length; i++){
         if(!arr.hasOwnProperty(i)) continue
         let res = fn.call(context, arr[i], i ,this)
         if(res){
             flag = true
             break
         }
     }
     return flag
 }

 /**
  * 7 ES5实现reduce方法
  */

  const selfReduce = function(fn, initialValue){
      let arr = Array.prototype.slice.call(this)
      if(initialValue) arr.unshify(initialValue)

      let res = arr[0]
      for(let i=0; i<arr.length; i++){
          if(arr.hasOwnProperty(i+1)) continue
          res= fn.call(
              null,
              res,
              arr[i+1],
              initialValue === undefined? i+1 :i,
              this
          )
      }
      return res
  }

  /**
   * 发布订阅 EventEmitter
   * on注册事件 将事件push数组中 统一执行
   * 当trigger时候 统一执行
   * 解决了事件不统一执行可能带来的状态异常
   * 通过 on 方法注册事件， trigger 方法触发事件， 来达到事件之间的松散解耦， 并且额外添加了 once 和 off 辅助函数用于注册只触发一次的事件以及注销事件
   */
  class EventEmitter{
      constructor(){
          this.subs = {}
      }
      on(event,cb){
          if(!this.subs[event]){
              this.subs[event] = []
              this.subs[event].push(cb)
          }
      }

      trigger(event,options){
          if(this.subs[event]){
              this.subs[event].forEach(cb =>{
                  cb(options)
              })
          }
      }

      once(event, onceCb){
          const cb = (...rest)=>{
              let res = onceCb.apply(null,rest)
              this.off(event,onceCb)
              return res
          }
          
          if(!this.subs[event]){
              this.subs[event] =[]
              this.subs[event].push(cb)
          }
      }

      off(event, offCb){
          if(this.subs[event]){
              let index = this.subs[event].findIndex(cb => cb===offCb)
              this.subs[event].splice(index, i)
              if(!this.subs[event].length) delete this.subs[event]
          }
      }


  }

  /**
   * 未完 待续
   * https: //juejin.im/post/5bf41990e51d4552ee424d2c
   * https: //juejin.im/post/5cef46226fb9a07eaf2b7516?utm_source=gold_browser_extension#heading-27
   */