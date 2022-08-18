class Person {
  name: string = "Mark"; //프로퍼티
  age: number; //!를 제거하고 아래 constructor 에서 정의해준다.
  constructor(age: number){
    this.age = age;
  }
}

const p1: Person = new Person(38);

console.log(p1);
console.log(p1.age);