//object 란?
//a type that represents the non-primitive type


//create by object literal
const person1 = {name:'Mark', age:39};
//person1 is not "object" type.
//person1 is "{name: string, age: number}" type.

//create by Object.create()
const person2 = Object.create({name:'Mark', age:39}); //Object는 런타임에 준비된 내장객체이다.
