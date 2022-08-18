"use strict";
class Person {
    constructor(age) {
        this.name = "Mark"; //프로퍼티
        this.age = age;
    }
}
const p1 = new Person(38);
console.log(p1);
console.log(p1.age);
