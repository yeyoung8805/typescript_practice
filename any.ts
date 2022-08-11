function returnAny(message: any) :any { //no implicit any (message에 any 타입이라는 것을 선언해준다.)
  console.log(message);
}

const any1 = returnAny("return whatever");
any1.toString(); //any1이 any 타입으로 지정돼있기 때문에, 어느 것이든 될 수 있다!
