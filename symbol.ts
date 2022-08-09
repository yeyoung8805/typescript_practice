//Symbol : 프리미티브 타입의 값을 담아서 사용
//고유하고 수정 불가능한 값으로 만들어준다.
//그래서 주로 접근을 제어하느데 쓰는 경우가 많다.

console.log(Symbol('foo') === Symbol('foo')); //false

const sym = Symbol();

const obj = {
  [sym]: "value", //이렇게 사용할 경우 sym은 Symbol()을 의미하게 되어 아래와 같이 접근할 수 없게 된다.
};

obj[sym] // 이렇게 접근해야 한다. (접근을 막거나, 접근이 필요한 경우만 허용하는 것에 사용한다.)
