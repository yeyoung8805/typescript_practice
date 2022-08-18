class Person {
  public constructor(public _name: string, public age: number){}
  get name() {
    //
    console.log('get');
    return this._name;
  }

  set name(n: string) {
    console.log('set');
    this._name = n;
  }
}

const p1: Person = new Person("Mark", 38);
console.log(p1.name); //get 을 하는 함수 getter
p1.name = "Anna"; //set을 하는 함수 setter
console.log(p1.name);