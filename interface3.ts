interface Person3 {
  name: string;
  age?: number;
  [index: string]: any; //어떠한 이름의 property든지 추가할 수 있다는 뜻.
}

function hello3(person: Person3):void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = {
  name: "Mark",
  age: 39,
};

const p32: Person3 = {
  name: "Anna",
  sisters: ["Sung", "Chan"],  // [index: string]: any; 이기 때문에 가능
};

const p33: Person3 = {
  name: "Bokdaengi",
  father: p31, // [index: string]: any; 이기 때문에 가능
  mother: p32, // [index: string]: any; 이기 때문에 가능
};

hello3(p33);