class Person {

  public static City = "Seoul";
  public hello() {
    console.log("안녕하세요.", Person.City);
  }
  public change() {
    Person.City = "LA";
  }
}

const p1 = new Person();
p1.hello(); //error : hello() 가 static method 이기 때문
const p2 = new Person();
p2.hello();

p1.change();
p2.hello();