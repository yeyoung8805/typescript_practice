"use strict";
class PersonGeneric {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
new PersonGeneric("Mark", 30);
// new PersonGeneric<string>(30); //error : string 이 올 자리에 number 가 들어가 있기 때문
// new Person<string, number>("Mark", "Anna"); //error : number 가 올자리에 string 이 들어가 있기 때문 
