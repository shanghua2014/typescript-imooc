interface Bird {
	fly: boolean;
	sing: () => {};
}

interface Dog {
	fly: boolean;
	bark: () => {};
}

/**
 * 联合类型
 * @param animate Bird | Dog类型
 * 通过类型保护，解决TS语法报错提示
 * 保证代码的严谨性，有以下几种方式：
 */
function trainAnial(animate: Bird | Dog) {
	//
	// 1、类型断言做类型保护
	if (animate.fly) {
		(animate as Bird).sing();
	} else {
		(animate as Dog).bark();
	}

	// 2、in 语法做类型保护
	if ('sing' in animate) {
		animate.sing();
	} else {
		animate.bark();
	}
}
// 3、typeof 语法做类型保护
function add(first: string | number, second: string | number) {
	if (typeof first == 'string' || typeof second == 'string') {
		return `${first}${second}`;
	}
	return first + second;
}

// 4、instanceof 语法做类型保护
class NumberObj {
	count: number;
}
function addSecond(first: object | NumberObj, second: object | NumberObj) {
	if (first instanceof NumberObj && second instanceof NumberObj) {
		return first.count + second.count;
	}
	return 0;
}
