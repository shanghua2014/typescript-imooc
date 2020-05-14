// 基础类型：number, string, boolean, void, undefined, symbol, null
const count = 123;
let total: number;
total = 456;

// 对象类型：class, function, {}, []
const func = (str: string): number => {
	return parseInt(str, 10);
};

// 1，定义func2函数，返回传入string类型参数，并返回number类型数据
const func2: (str: string) => number;
// 2，定义func2函数的值，赋值一个函数体
// 协助理解：函数冒号后边跟的是类型，等于后边跟的是函数体
const func2: (str: string) => number = (str) => {
	return parseInt(str, 10);
};
// 小技巧：函数的返回值一般可以通过类型推断，推出来，一般不需要写类型

// 其他知识点
const data = '{name:xiaoming, arg:18}';
// newData是any类型，需要类型注解
let newData = JSON.parse(data);
interface Persion {
	name: 'string';
	age: 'number';
}
let newData: Persion = JSON.parse(data);

let tmp: number | string = 123;
tmp = '456';