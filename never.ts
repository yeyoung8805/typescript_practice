//never
//never는 모든 타입의 subtype이다.
//그러나, never 에는 그 어떤것도 할당할 수 없다. any조차도 never 에는 할당할 수 없다.
//잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다.

function error(message: string): never { //return 에 never를 지정함으로써 아무것도 리턴하지 않는다고 선언한다.
  throw new Error(message); //throw 함으로써 method가 종료된다.
}

function fail() {
  return error('failed'); //return 되는 error의 타입이 never로 추론이 되게 된다.
}

function infiniteLoop(): never {
  while(true) {} //반복구문이 계속 실행되며, while문 밑으로는 내려가지 않을 것이므로 return 형이 never 인 것이다.
}

let a: string = "hello";
if(typeof a !== 'string') { //typeof 라는 가드이다.
  a; //never type
}


declare const b: string;
if(typeof b !== 'string') {
  b; //never
}

declare const c: string | number;
if(typeof c !== 'string') {
  c; //number
}

//never 가 쓰이는 예제
//type 이 변수처럼 쓰이는 제네릭이다.
//T가 string 이면? T & {[index: string]: any} 이고 아니면 never 이다.
type Indexable<T> = T extends string ? T & {[index: string]: any} : never;
type ObjectIndexable = Indexable<{}>;
const d : Indexable<{}> = ''; // error : Type 'string' is not assignable to type 'never'.
