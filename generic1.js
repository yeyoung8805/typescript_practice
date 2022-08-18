"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
//더 많은 반복적인 함수들이 생길 수 있다..
function hello(message) {
    return message;
}
console.log(hello("Mark"));
console.log(hello(30));
console.log(hello("Mark").length);
console.log(hello(30).length); //number에 .length() 함수는 맞지 않으나 타입이 any 로 선언돼있기에 런타임시 에러 뱉지 않는다.
//Any 와 달리, 제네릭 T 는 함수사용(호출)시 타입과 관련된 연산, 내장함수 사용도 가능해진다.
function helloGeneric(message) {
    return message;
}
console.log(helloGeneric('Mark'));
console.log(helloGeneric(31));
console.log(helloGeneric('Mark').length);
console.log(helloGeneric(true));
