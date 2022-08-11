declare const maybe: unknown;

const aNumber: number = maybe; //error : Type 'unknown' is not assignable to type 'number'.

if(maybe === true) { //maybe를 boolean으로 가둬놓는 이런 구문을 "타입 가드"라고 한다.
  const aBoolean: boolean = maybe; //maybe는 boolean true
  // const aString: string = maybe; //error : Type 'boolean' is not assignable to type 'string'.
}

if(typeof maybe === 'string') { //maybe를 string 으로 가둬놓는 이런 구문도 "타입가드"라고 한다.
  maybe;
}
