"use strict";
function hello3(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
const p31 = {
    name: "Mark",
    age: 39,
};
const p32 = {
    name: "Anna",
    sisters: ["Sung", "Chan"], // [index: string]: any; 이기 때문에 가능
};
const p33 = {
    name: "Bokdaengi",
    father: p31,
    mother: p32, // [index: string]: any; 이기 때문에 가능
};
hello3(p33);
