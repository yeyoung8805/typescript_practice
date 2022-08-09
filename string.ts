let myName: string = 'Mark';
// let myName: string = "Mark"; //string 값은 ''도 가능하고, ""도 가능하다.

myName = 'Anna';

//Template String
//행에 걸쳐있거나, 표현식을 넣을 수 있는 문자열
let fullName: string = `Bob Bobbington`;
let age: number = 38;

let sentence: string = `Hello, my name is ${ fullName }.
                        I'll be ${ age + 1 } years old next month.`;

//template string을 사용하지 않을 경우
let senetence: string = "Hello, my name is " + fullName + ".\n\n" +
                        "I'll be " + (age+1) + " years old next month.";
