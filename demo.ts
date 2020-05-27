// 泛型：规定函数传参，类型保持一致
function test<ABC>(frist: ABC, second: ABC) {
	return `${frist}-${second}`;
}
// function map<ABC>(arg: ABC[]) {
function map<ABC>(arg: Array<ABC>) {
	return arg;
}
test<number>(1, 3);
map([1, 2, 3]);