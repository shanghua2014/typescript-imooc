// type annotation 类型注解，我们主动告诉 TS 变量是是什么类型
// type inference 类型推断，TS 自动尝试去分解变量类型
// 如果 TS 能主动分析变量类型，我们什么都不需要做
// 如果 TS 无法分析亦是类型，我们就需要使用类型注解

// let count: number;
// count = 123;
// let countInference = 456;

// 类型推断
const firstNumber = 1;
const secondNumber = 2;
const total = firstNumber + secondNumber;

// 类型注解
function getTotal(firstNumber: number, secondNumber: number) {
	return firstNumber + secondNumber;
}
getTotal(3, 4);
