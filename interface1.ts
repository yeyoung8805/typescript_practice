//interface : JS에는 없는 문법이다.
//npx tsc 명령어로 JS로 어떻게 컴파일(트랜스파일) 되는지도 볼것!

interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person1 = {
  name: "Mark",
  age: 39,
};

hello1(p1);