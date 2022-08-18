"use strict";
//상속 : 클래스가 다른 클래스를 가져다가 자신의 역할을 추가하는것
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }
    printName() {
        console.log(this._name);
    }
}
// const p = new Parent("Mark", 39);
// p.print();
class Child extends Parent {
    constructor(age) {
        super("Mark Jr.", age);
        this.gender = "male";
        this.printName();
    }
}
const c1 = new Child(5);
c1.print();
