// 抽象类：将共用的方法抽象出来，变成一个抽象的类型放在这里
// 它与 interface 接口有点类似
// 区别在于抽象类是抽离类的，接口是抽象对象或方法的
abstract class Geom {
	width: number;
	getType() {
		return 'Gemo';
	}
	abstract getArea(): number;
}
class Circle extends Geom {
	getArea() {
		return 123;
	}
}