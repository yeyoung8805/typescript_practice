class PersonGeneric<T> {
  private _name: T;
  constructor(name: T) {
    this._name = name;
  }
}

new PersonGeneric("Mark");
new PersonGeneric<string>(30); //errpr : string 이 올 자리에 number 가 들어가 있기 때문