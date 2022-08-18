interface IPerson {
  name: string;
  age: number;
}

const personConst: IPerson = {
  name: "Mark",
  age : 30,
};

function getProp(obj: IPerson, key: 'name' | 'age'): string | number {
  return obj[key];
}

function setProp(obj: IPerson, key: 'name' | 'age', value: string | number): void {
  obj[key] = value;
}