"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "Mark";
    }
}
const p1 = new Person("Mark", 38);
console.log(p1.name);
p1.name = "Anna"; //Person 클래스 밖에서 name 프로퍼티를 호출하려고 하면 에러 나온다.
console.log(p1.name);
