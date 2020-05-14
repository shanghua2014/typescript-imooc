// 函数返回数字类型
function addNumber(firstNumber: number, secondNumber: number): number {
	return firstNumber + secondNumber;
}

// 函数没有返回值
function sayHello(): void {
	console.log('hello');
}

// 函数永远不会执行到最后
function err(): never {
	while (true) {}
	console.log('这里不会被执行');
}

// 函数解构参数类型
function add({ first, second }: { first: number; second: number }): number {
	return first + second;
}
const count = add({ first: 1, second: 2 });

function getNumber({ first }: { first: number }) {
	return first;
}
const total = getNumber({ first: 3 });
