"use strict";
class AbstractPerson {
    constructor() {
        this._name = "Mark";
    }
}
// new AbstractPerson() //완전하지 못하기때문에 이렇게 인스턴스 생성 안된다.
class PersonImp extends AbstractPerson {
    setName(name) {
        this._name = name;
    }
}
const personImp = new PersonImp();
personImp.setName();
