"use strict";
class PersonExtends {
    constructor(name) {
        this._name = name;
    }
}
new PersonExtends('Mark');
new PersonExtends(30);
// new PersonExtends(true); //error : boolean은 string도 number 도 아니므로 넣을 수 없다!
