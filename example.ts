class Person {
  name; //프로퍼티
  constructor(name: string) { //생성자
    this.name = name;
  }
}

const p1 = new Person("Mark");

console.log(p1);