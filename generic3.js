"use strict";
//Array 와 Tuple의 차이점을 비교하자!!
function helloArray(message) {
    return message[0];
}
helloArray(['Hello', 'World']);
helloArray(['Hello', 5]);
// helloArray(['Hello', 5]).length; //error : return type이 string | number 둘 중에 어느 것인지 미리 예측하지 못한다.
function helloTuple(message) {
    return message[0];
}
helloTuple(['Hello', 'World']);
helloTuple(['Hello', 5]);
helloTuple(['Hello', 5]).length; //Tuple 타입이기 때문에 message[0]값은 string 인지 알기 때문에 내장함수 length() 사용 가능하다.
