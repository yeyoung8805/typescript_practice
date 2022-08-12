interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: "Jane",
  city: "Seoul",
  age: 39, //생략가능
};

