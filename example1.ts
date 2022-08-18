abstract class AbstractPerson {
  protected _name: string = "Mark";

  abstract setName(name: string): void;
}

// new AbstractPerson() //완전하지 못하기때문에 이렇게 인스턴스 생성 안된다.

class PersonImp extends AbstractPerson {

  setName(name: string): void {
    this._name = name;
  }
}
const personImp = new PersonImp();
personImp.setName();