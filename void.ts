function returnVoid(message: string): void{ //return 타입이 void로 추론된다.
  console.log(message);
  return undefined; //return에는 void로 선언돼있던것에 undefined 할당 가능하다.
}

const r = returnVoid("There are no return.");
// const r: undefined = returnVoid("There are no return."); //error : void에는 undefined를 할당할 수 없다.
