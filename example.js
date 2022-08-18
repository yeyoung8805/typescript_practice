"use strict";
class Person {
    // async constructor(age?: number){ //생성자에는 async 설정할 수 없다!
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
