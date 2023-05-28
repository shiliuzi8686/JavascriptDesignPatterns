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

//
