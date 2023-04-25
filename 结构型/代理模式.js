/**
 * 这种模式的套路就只有一个—— A 不能直接访问 B，A 需要借助一个帮手来访问 B
 * 这个帮手就是代理器
 */


// 事件代理、虚拟代理、缓存代理、保护代理


/**
 * 虚拟代理
 */
// 实现图片懒加载???不太理解
class PreLoadImage{
    // 占位图的url地址
    static LOADING_URL = 'xxx'

    constructor(imgNode) {
        // 获取该实例对应的DOM节点
        this.imgNode = imgNode
    }

    // 该方法用于设置真实的图片地址
    setErs(targetUrl) {
        // img节点初始化时展示的是一个占位图
        this.imgNode.src = PreLoadImage.LOADING_URL
        // 创建一个帮我们加载图片的Image实例
        const image = new Image()
        // 监听目标图片加载的情况，完成时再将DOM上的img节点的src属性设置为目标图片的url
        image.onload = () => {
            this.imgNode.src = targetUrl
        }
        // 设置src属性，Image实例开始加载图片
        image,src = targetUrl
    }
}


/**
 * 缓存代理
 */
// 对传入的参数进行求和

// addAll方法会对你传入的所有参数做求和操作
const addAll = function () {
    console.log('进行了一次新的计算')
    let result = 0
    const len = arguments.length
    for (let i = 0; i < len; i++){
        result += arguments[i]
    }
    return result
}

// 为求和方法创建代理
const proxyAddAll = (function () { 
    // 求和结果的缓存池
    const resultCatche = {}
    return function () { 
        // 将入参转化为一个唯一的入参字符串
        const args = Array.prototype.join.call(arguments, ',')
        // 检查本次入参是否有对应的计算结果
        if (args in resultCatche) {
            // 如果有，则返回缓存池里的结果
            return resultCatche[args]
        }
        return resultCatche[args] = addAll(...arguments)
    }
})

// 保护代理---getter 和 setter 函数里去进行校验和拦截，确保一部分变量是安全的
// Proxy就是为拦截而生的，所以我们目前实现保护代理时，考虑的首要方案就是 ES6 中的 Proxy



