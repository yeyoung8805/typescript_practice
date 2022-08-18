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
function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
  return obj[key];
}

function setProp(obj: IPerson, key: keyof IPerson, value: string | number): void {
  obj[key] = value;
}