class Person {
  public readonly name: string = "Mark";
  private readonly country: string;
  public constructor(private _name: string, public age: number){
    this.country = "Korea"; //readonly 는 property와 constructor 안에서만 초기화하여 값을 설정해 줄수 있다. 에러 안난다.
  }
  hello() {
    this.country = "Italy"; //error : country is a readonly property (Person 클래스내의 메소드 안이더라도)
  }
}

const p1: Person = new Person("Mark", 38);
console.log(p1.name); 
p1.name = "Anna"; //Person 클래스 밖에서 name 프로퍼티를 호출하려고 하면 에러 나온다.
console.log(p1.name);