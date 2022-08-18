class Person {

  public static City = "Seoul";
  public static hello() {
    console.log("안녕하세요.", Person.City);
  }
}

const p1 = new Person();
// p1.hello(); //error : hello() 가 static method 이기 때문

Person.hello();
Person.City;