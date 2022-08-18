class PersonExtends<T extends string | number> { //T는 (유니온 타입) string 이나 number 만 가능한 것이다.
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends('Mark'); 
new PersonExtends(30); 
new PersonExtends(true); //error : boolean은 string도 number 도 아니므로 넣을 수 없다!
