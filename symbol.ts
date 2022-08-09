//Symbol : 프리미티브 타입의 값을 담아서 사용
//고유하고 수정 불가능한 값으로 만들어준다.
//그래서 주로 접근을 제어하느데 쓰는 경우가 많다.

console.log(Symbol('foo') === Symbol('foo')); //false

const sym = Symbol();

const obj = {
  sym: "value",
};

obj["sym"] //이렇게 사용할 경우, obj의 sym에 이러한 방식으로 접근할 수가 있다.
