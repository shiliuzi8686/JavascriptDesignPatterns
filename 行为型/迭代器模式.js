// 迭代器模式提供一种方法顺序访问一个聚合对象中的各个元素，而又不暴露该对象的内部表示

// 迭代器模式就是为了解决遍历这一个问题

// 用ES5写一个能够生成迭代器对象的迭代器生成函数：----》 这里生成的迭代器很简单，它只能处理数组
function iteratorGenerator(list) {
    // idx记录当前访问的索引
    var idx = 0
    // len记录传入集合的长度
    var len = list.length
    return {
        // 自定义next方法
        next: function () {
            // 如果索引还没有超出集合长度，done为false
            var done = idx >= len
            // 如果done为false，则可以继续取值
            var value = !done ? list[idx++] : undefined
            // 将当前值与遍历是否完毕（done）返回
            return {
                done,
                value    
            }
        }
    }
}

var iterator = iteratorGenerator(['一号选手', '二号选手', '三号选手'])
iterator.next()
iterator.next()
iterator.next()