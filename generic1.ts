function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

//더 많은 반복적인 함수들이 생길 수 있다..

function hello(message: any) : any {
  return message;
}

console.log(hello("Mark"));
console.log(hello(30));
console.log(hello("Mark").length);
console.log(hello(30).length); //number에 .length() 함수는 맞지 않으나 타입이 any 로 선언돼있기에 런타임시 에러 뱉지 않는다.

function helloGeneric<T>(message: T): T { //제네릭인 T 타입을 사용한다.
  return message;
}

console.log(helloGeneric('Mark'));
console.log(helloGeneric(31));
console.log(helloGeneric('Mark').length);