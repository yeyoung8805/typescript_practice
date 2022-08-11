function returnAny(message: any) :any { //no implicit any (message에 any 타입이라는 것을 선언해준다.)
  console.log(message);
}

const any1 = returnAny("return whatever");
any1.toString(); //any1이 any 타입으로 지정돼있기 때문에, 어느 것이든 될 수 있다!

//any의 "전파"를 살펴보고자 한다.
let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d; //any로 지정된 곳 이후의 코드가 안전성을 잃을 수 있다. a,b,c,d 도 모두 any 타입이 전파되므로.

function leakingAny(obj: any) {
  const a = obj.num; //a는 any
  const b = a + 1; //b도 any
  return b;
}

const c = leakingAny({num: 0});
c.indexOf("0"); //c도 any (any라는 전파(누수)가 계속 발생하고 있는 것이다.)
