// getter 和 setter
// class Person {
// 	constructor(private _name: string) {}

// 	// 通过 get 来模拟 name 属性
// 	// 外部调用时看起来像调了 name 属性，其实调用的是 name() 方法
// 	get name() {
// 		return this._name + ', lee';
// 	}
// 	set name(name: string) {
//         const realName = name.split('_')[0]
// 		this._name = realName;
// 	}
// }

// const person = new Person('dell');
// console.log(person.name);
// person.name = 'dell_li';
// console.log(person.name);

// 单例
class Demo {
	private static instance: Demo;
	// 1、私有构造，不能在外部通过 new 来实例化类
	private constructor(public name: string) {}

	// 2、静态方法：直接挂到类上边，而不是类的实例上，方便外部调用
	static getInstance(name: string) {
		// 单例特性：只实例化一次，所以 name 值是第一次传入的值
		if (!this.instance) {
			this.instance = new Demo(name);
		}
		return this.instance;
	}
}

const demo1 = Demo.getInstance('zhao');
const demo2 = Demo.getInstance('shanghua');
console.log(demo1 == demo2);
console.log(demo1.name);
console.log(demo2.name);
