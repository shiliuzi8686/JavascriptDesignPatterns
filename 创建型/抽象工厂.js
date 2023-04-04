// class factory {
//     constructor(type) {
//         this.type = type
//     }
//     createPhone() {

//     }
// }

class phone{
    constructor() { 

    }
    createOs() { 
        throw new Error('请重写创建os的方法')
    }
    createHardware() { 
        throw new Error('请重写创建硬件的方法')
    }
}

class iphone extends phone{
    createOs() { 
        console.log('这是iphone的os')
    }
    createHardware() { 
        console.log('这是iphone的硬件')
    }
}
class huawei extends phone{
    createOs() { 
        console.log('这是huawei的os')
    }
    createHardware() { 
        console.log('这是huawei的硬件')
    }
}

