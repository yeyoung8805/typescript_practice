//class => object 를 만들어냄
//{mark: 'male', jade: 'male'}
//{chloe: 'female', alex: 'male', anna: 'female'}
//위 두 object를 만들어 낼수있는 클래스 만들자
class Students {
  [index: string] : "male" | "female"; //index signature in class
}

const a1 = new Students();
a1.mark = "male";
a1.jade = "male";
console.log(a1);

const b1 = new Students();
b1.chloe = "female";
b1.alex = "male";
b1.anna = "female";
console.log(b1);