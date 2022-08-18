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
console.log(hello(30).length);
function helloGeneric(message) {
    return message;
}
console.log(helloGeneric('Mark'));
console.log(helloGeneric(31));
console.log(helloGeneric('Mark').length);
