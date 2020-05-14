// 类型别名type 与 interface区别不大，interface不能直接代码基础类型
// 优先使用interface
// type Person1 = {
// 	name: string;
// };

// 有通用的类型集合，可以用interface来定义
interface Person {
	name: string;
	// readonly name: 'male'; // readonly 表示只读
	age?: number; // ? 表示可有可无
	[propName: string]: any; // 允许传参有其他任意类型
	say(): string;
}

// 接口继承接口
interface Teacher extends Person {
	teach(): string;
}

// 函数类型接口
interface sayHi {
	(word: string): string;
}

// const getPersonName = (person: { name: string }): void => {
const getPersonName = (person: Person): void => {
	console.log(person.name);
};
// const setPersonName = (person: { name: string }, name): void => {
const setPersonName = (person: Teacher, name): void => {
	person.name = name;
};

const person2 = {
	name: 'dell',
	sex: 'male',
	say() {
		return 'hello';
	},
	teach() {
		return 'teach';
	}
};

getPersonName(person2);
setPersonName(person2, 'lee');

// 类实现接口，类里必须定义接口里的属性和方法
class User implements Person {
	name: 'dell';
	sex: 'male';
	say() {
		return 'hello';
	}
}

const say: sayHi = (word: string) => {
	return word;
};
