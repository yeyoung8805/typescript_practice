//object 란?
//a type that represents the non-primitive type
//(참고) non-primitive type : Not (number, string, boolean, bigint, symbol, null, or undefined.)


//create by object literal
const person1 = {name:'Mark', age:39};
//person1 is not "object" type.
//person1 is "{name: string, age: number}" type.

//create by Object.create()
const person2 = Object.create({name:'Mark', age:39}); //Object는 런타임에 준비된 내장객체이다.

let objt: object = {}; //가능하나, 보통 이렇게 사용하지 않는다.
objt = {name: 'Mark'}; //object 넣음
objt = [{name: 'Mark'}]; //array도 넣을 수 있음
// objt = 39; //error : number
// objt = 'Mark'; //error : string
// objt = true; //error : boolean
// objt = 100n; //error : bigint
// objt = Symbol(); //error :symbol
// objt = null; //error : null
// objt = undefined; //error : undefined
