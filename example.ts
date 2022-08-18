class Person {
  public name: string = "Mark"; //프로퍼티
  private _age!: number; //!를 제거하고 아래 constructor 에서 정의해준다.
  // async constructor(age?: number){ //생성자에는 async 설정할 수 없다!
  public constructor(age?: number){
    if(age === undefined ){
      this._age = 20;
    }else {
      this._age = age;
    }
  }

  public async init(){}
}

const p1: Person = new Person(38);
console.log(p1);
// console.log(p1.age); // not approachable
