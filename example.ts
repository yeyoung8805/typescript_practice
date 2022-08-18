class Person {
  name: string = "Mark"; //프로퍼티
  age: number; //!를 제거하고 아래 constructor 에서 정의해준다.
  constructor(age?: number){
    if(age === undefined ){
      this.age = 20;
    }else {
      this.age = age;
    }
    
  }
}

const p1: Person = new Person(38);
const p2: Person = new Person();

console.log(p1);
console.log(p1.age);