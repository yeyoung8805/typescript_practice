//상속 : 클래스가 다른 클래스를 가져다가 자신의 역할을 추가하는것
class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print() : void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
  }
}

// const p = new Parent("Mark", 39);
// p.print();

class Child extends Parent {

}

const c1 = new Child("Son", 5);
c1.print();