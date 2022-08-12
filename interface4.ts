interface Person4 {
  name: String;
  age: number;
  hello(): void; //hello() 를 개체에서 만들어 내면 된다.
}

const p41: Person4 = {
  name: "Mark",
  age: 39,
  hello: function(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  },
};

const p42: Person4 = {
  name: "Mark",
  age: 39,
  hello(this: Person4): void { //p41와 달리 method 임을 나타내는 형식만 달라짐 //화살표 함수가 아니라서 this 키워드 사용가능 
    console.log(`안녕하세요! ${this.name} 입니다.`);
  },
};

const p43: Person4 = {
  name: "Mark",
  age: 39,
  hello: (this: Person4): void => { //화살표 함수에서는 this 키워드 사용할 수 없다.
    console.log(`안녕하세요! ${this.name} 입니다.`);
  },
};