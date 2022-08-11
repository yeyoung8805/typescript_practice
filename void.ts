function returnVoid(message: string) { //return 타입이 void로 추론된다.
  console.log(message);
  return;
}

const r = returnVoid("There are no return.");
// const r: undefined = returnVoid("There are no return."); //error : void에는 undefined를 할당할 수 없다.
