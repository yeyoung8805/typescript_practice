"use strict";
class Person {
    constructor(age) {
        this.name = "Mark"; //프로퍼티
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
}
const p1 = new Person(38);
const p2 = new Person();
console.log(p1);
console.log(p1.age);
