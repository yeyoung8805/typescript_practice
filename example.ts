class Person {
  public constructor(public name: string, private age: number){
    
  }

}

const p1: Person = new Person("Mark", 38);
console.log(p1);
console.log(p1.age); // not approachable
