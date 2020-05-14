// 1、类的访问类型：public private protected

// 2、constructor 构造函数
// class Person {
// 	// 传统写法
// 	// public name: string;
// 	// constructor(name: string) {
// 	// 	this.name = name;
// 	// }

// 	// 简化写法
// 	constructor(public name: string) {}
// }
// const person = new Person('dell');
// console.log(person.name);

class Person {
	// constructor(public name: string) {}
}

// 如果子类有 constructor 构造函数
// 那么，不管父类是否有 constructor 构造，都必须调用 super 方法
class Teacher extends Person {
	constructor(public age: number) {
        // super('dell');
        super();
	}
}
const teacher = new Teacher(18);
// console.log(teacher.name);
console.log(teacher.age);
