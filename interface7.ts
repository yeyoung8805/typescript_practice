interface HelloPerson {
  (name: string, age?: number) : void;
}

const helloPerson: HelloPerson = function(name: string) { //error : Type 'number | undefined' is not assignable to type 'number'.
  console.log(`안녕하세요! ${name} 입니다.`);
}

helloPerson('Mark', 39);