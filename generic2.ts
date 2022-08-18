function helloBasic<T>(message: T): T {
  return message;
}

helloBasic<string>("Mark"); //함수에서 사용할 제네릭 타입을 <string> 으로 지정했다.
helloBasic(36); //입력된 값 36에 의해 제네릭 타입이 36 number로 "추론" 되는 것이다.
