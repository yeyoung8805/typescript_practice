// let MyName: string = null; //tsconfig.json 에서 "strict": true, 되어 있기 때문에 오류라고 나온다.
// let MyName: string = undefined; //tsconfig.json 때문에 undefined 도 에러 난다.

// let u: undefined = null; //undefined에 null을 넣을수 없다.

// let v: void = void; //우측에는 void가 아닌 실제값이 들어가야 한다.
let v: void = undefined; //undefined 는 type 이기도 하지만 "값"이기도 하다. 그래서 넣을 수 있다.

// let union: String = null; //String null check 가 true로 들어가있기때문에 안된다.
let union: String | null = null; //union Type | 은 합집합의 의미
union = "Mark";
