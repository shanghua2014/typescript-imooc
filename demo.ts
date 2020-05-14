// 重点！
// super的使用：子类复写了父类的方法之后，可以用super去调用父类被复写的方法
class Person {
	name = 'dell';
	getName() {
		return this.name;
	}
}

class Teacher extends Person {
	getTeacherName() {
		return 'Teacher';
	}
	getName() {
        // return ', lee';
		return super.getName() + ', lee';
	}
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());