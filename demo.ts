interface Point {
    x: number,
    y: number
}

const count: Point = {
    x:3,
    y:4
}

const abc: Point = {
    x:5,
    y:6
}

const teacher : {
    name:string,
    age:number
} = {
    name: "abc",
    age :13
}

class Person {}
const xiaoming : Person = new Person();

const numberArr: number[] = [1,2,3];

const getTotal: () => number = () => {
    return 1;
}