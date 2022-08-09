//Javascript vs Typescript

//Javascript
// function add(n1, n2) {{
//   if(typeof n1 !== 'number' || typeof n2 !== 'number') {
//     throw new Error('Incorrect input!');
//   }
//   return n1 + n2;
// }
// const result = add(39, 28);

//Typescript
function add(n1: number, n2: number) { //Type Annotation (runtime에서의 체크로직이 필요 없어진다.)
  return n1 + n2;
}
const result = add(39, 28);
