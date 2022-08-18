class Person {
  name: string = "Mark"; //프로퍼티
  age!: number; //!를 붙임으로써 클래스 내부가 아닌 곳에서 number 값을 할당해주겠다는 뜻 
  constructor(age: number){}
}

const p1: Person = new Person(38);

console.log(p1);
// p1.age = 39;
console.log(p1.age);