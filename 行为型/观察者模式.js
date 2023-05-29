// 定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象
// 当这个目标对象的状态发生变化时，会通知所有观察者对象，是它们能够自动更新

// 观察者模式的别名：发布-订阅模式（两者之间存在细微的差异）

// 定义发布者类
class Publisher {
  constructor() {
    this.observers = [];
    console.log("Publisher created");
  }
  // 增加订阅者
  add(observer) {
    console.log("Publisher.add invoked");
    this.observers.push(observer);
  }
  // 移除订阅者
  remove(observer) {
    console.log("Publisher.remove invoked");
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1);
      }
    });
  }
  // 通知所有订阅者
  notify() {
    console.log("Publisher.notify invoked");
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

// 定义订阅者类
class Observer {
  constructor() {
    console.log("Observer created");
  }
  update() {
    console.log("Publisher.update invoked");
  }
}

// 定义一个具体的需求文档（prd）发布类
class PrdPublisher extends Publisher {
  constructor() {
    super()
    // 初始化需求文档
    this.prdState = null
    // 韩梅梅还没有拉群，开发群目前为空
    this.observers = []
    console.log('PrdPublisher created')
  }
  // 该方法用户获取当前的prdState
  getState() {
    console.log('Publisher.getState invoked')
    return this.prdState
  }
  // 该方法用于改变pedState的值
  setState(state) {
    console.log('Publisher.setState invoked')
    // prd的值发生改变
    this.prdState = state
    // 需求文档变更，立刻通知所有开发者
    this.notify()
  }
}

class DeveloperObserver extends Observer {
  constructor() {
    super()
    // 需求文档一开始还不存在，prd初始为空对象
    this.prdState = {}
    console.log('DeveloperObserver created')
  }
  // 重写一个具体的update方法
  update(publisher) {
    console.log("DeveloperObserver.update invoked")
    // 更新需求文档
    this.prdState = publisher.getState()
    // 调用工作函数
    this.work()
  }
  // work方法，一个专门搬砖的方法
  work() {
    // 获取需求文档
    const prd = this.prdState
    // 开始基于需求文档提供的信息搬砖...
    // ...
    console.log('996 begins...')
  }
}

// 创建订阅者：前端李雷
const lilei = new DeveloperObserver() //这个类有：属性：prd，方法：更新功能，更新prd(重写update)，工作
// 创建订阅者，服务端开发小A
const A = new DeveloperObserver() 
// 创建订阅者，测试小B
const B = new DeveloperObserver()

// 韩梅梅：产品
const hanMeiMei = new PrdPublisher() //这个类有：属性：prd，方法：增加、删除订阅者，通知订阅者，设置、获取prd

// 需求文档出现了
const prd = {
  // 具体的需求内容
  // ...
}

// 韩梅梅开始拉群
hanMeiMei.add(lilei)
hanMeiMei.add(A)
hanMeiMei.add(B)

// 韩梅梅发送了需求文档，并@所有人
hanMeiMei.setState(prd)

