interface IPerson {
  name: string;
  age: number;
}

const personConst: IPerson = {
  name: "Mark",
  age : 30,
};

type Keys = keyof IPerson; //Keys는 결과물의 타입이 반환된다.
const keys: Keys = "name";

// IPerson[keyof IPerson]  
// => IPerson["name" | "age"] 
// => IPerson["name"] | IPerson["age"]
// string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] { //K는 name | age 만 받을 수 있음 
  return obj[key];
}

getProp(personConst, 'age'); //getProp 두번째 파라미터는 'age', 'name' 밖에 못들어간다.

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(personConst, "name", "Jane");