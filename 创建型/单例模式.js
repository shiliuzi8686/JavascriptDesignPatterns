const {log} = console
//实现一个Storage
/**
 * 有一个获取该实例的方法，特点是：若存在该实例则得到该实例，否则创建一个再返回
 * 既然只有一个实例，我们所有的操作都在该实例上
 */
/** 
 * 这个方法实际上就是基于localStorage的一层封装，
 * 将所有的key、value键值对都存储到一个实例对象身上，
 * 因为全局只需要一个就能实现全局状态共享，全局多个的话，状态分布在多个实例上，状态混乱，不同步
 * 再者...
*/
// class Storage{
//     static getInstance() {
//         if (!Storage.instance) { //在class类里面可以访问 该类吗？？？
//             Storage.instance = new Storage()
//         }
//         return Storage.instance
//     }
//     getItem(key) {
//         return localStorage.getItem(key)
//     }
//     setItem(key, value) {
//         return localStorage.setItem(key, value)
//     }
// }
// const storage1 = Storage.getInstance()
// const storage2 = Storage.getInstance()

// storage1.setItem('name', '李雷')

// log(storage1.getItem('name'))
// log(storage2.getItem('name'))



//闭包版
function StorageBase() { }
StorageBase.prototype.getItem = function (key) {
    return localStorage.getItem(key)
}
StorageBase.prototype.setItem = function (key, value) {
    return localStorage.setItem(key, value)
}
//这里的Storage是一个立即调用函数，意味着程序执行的时候就会全局创建一个单例，Storage此时是什么？？？很关键，立即调用函数return的东西就是定义的变量接收的数据
//并且关键的一点是：你怎么保证单例，用一个立即调用函数，一个程序只执行一次，这样Storage是什么？是一个函数，并且是一个唯一的函数（因为这个整个是一个大程序，只执行一次），这才能保证单例
const Storage = (function() { 
    let instance = null
    return () => {
        if (!instance) {
            instance = new StorageBase()
        }
        return instance
    }
})()

// 这里其实不用 new Storage 的形式调用，直接 Storage() 也会有一样的效果,为什么呢？
const storage1 = new Storage()
const storage2 = new Storage()

storage1.setItem('name', '李雷')
// 李雷
storage1.getItem('name')
// 也是李雷
storage2.getItem('name')

// 返回true
storage1 === storage2