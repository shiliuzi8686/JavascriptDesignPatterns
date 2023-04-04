//没有构造器的时候
const student1 = {
    name: '小明',
    age: '3'
}
const student2 = {
    name: '小红',
    age: '6'
}

//使用构造器
// const stus = [
//     {
//         name: '小明',
//         age: '3'
//     },
//     {
//         name: '小红',
//         age: '6'
//     }
// ]

function Student(name, age) { 
    this.name = name
    this.age = age
}

const stu1 = new Student('小明', 3)
const stu2 = new Student('小红', 6)