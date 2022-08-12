interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: "Mark",
  gender: "male",
};

// p81.gender = "female"; //error : Cannot assign to 'gender' because it is a read-only property.