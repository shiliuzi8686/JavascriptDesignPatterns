//根据不同的规则创建对象，提取共同点，对不同的地方进行针对性的处理

/**
 * 方式一：通过实例化不同的类
 */
function iphone() { 
    this.equipment = 'phone'
    this.name = 'iphone'
}
function huawei() { 
    this.equipment = 'phone'
    this.name = 'huawei'
}
function CreatePhone(type) { 
    switch (type) {
        case 'iphone':
            return new iphone()
            break
        case 'huawei':
            return new huawei()
            break
    }
}


/**
 * 方式二：创建对象，抽离相同的属性逻辑，不同属性针对处理
 */
function CreatePhone(type) { 
    // let o = new Object()
    // o.equipment = 'phone'
    this.equipment = 'phone'
    switch (type) {
        case 'iphone':
            this.name = 'iphone'
            break
        case 'huawei':
            this.name = 'huawei'
            break
    }
    // return o
}

const iphone1 = new CreatePhone(iphone)
const huawei1 = new CreatePhone(huawei)


