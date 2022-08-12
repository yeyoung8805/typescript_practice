"use strict";
const p41 = {
    name: "Mark",
    age: 39,
    hello: function () {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    },
};
const p42 = {
    name: "Mark",
    age: 39,
    hello() {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    },
};
// cannot run this code in runtime!
// const p43: Person4 = {
//   name: "Mark",
//   age: 39,
//   hello: (this: Person4): void => { //화살표 함수에서는 this 키워드 사용할 수 없다.
//     console.log(`안녕하세요! ${this.name} 입니다.`);
//   },
// };
p41.hello();
p42.hello();
