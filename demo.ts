// 数组
const arr: (number | string)[] = [1, 2, '3'];
const stringArr: string[] = ['a'];
const undefinedArr: undefined[] = [undefined];

// 对象数组类型，看起来有点难懂，看下边类型别名
const objectArr: { name: string; age: number }[] = [
	{
		name: 'zhao',
		age: 18,
	},
];
// 类型别名：type class 数据结构正确，都能作为别名使用
type User = { name: string; age: number };
class Teacher {
	name: string;
	age: number;
}
// const objArr: User[] = [
// 	{
// 		name: 'zhao',
// 		age: 18,
// 	},
// ];
const objArr: Teacher[] = [
	// new Teacher(), // 实例可有可无
	{
		name: 'zhao',
		age: 18,
	},
];

// 元组 tuple
const teacherInfo: [string, string, number] = ['dell', 'male', 18];
// 已知数组元素类型与元素个组，不会发生改变，这时使用元组
// 比如：csv表格
const teacherList: [string, string, number][] = [
	['dell', 'male', 18],
	['sun', 'male', 18],
	['jeny', 'male', 18],
];
