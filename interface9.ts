//1.compare "function" in type alias VS interface

//type alias
type EatType = (food: string) => void;

//interface
interface IEat {
  (food: string): void;
}

//2.compare "array" in type alias VS interface
type PersonList = string[];

interface IPersonList {
  [index: number]: string;
}

//3.Intersection
//compare "Intersection" in type alias VS interface
interface ErrorHandling {
  success: boolean;
  error?: {message: string};
}
interface ArtistsData {
  artists: {name: string}[];
}
//type alias 
type ArtistsResponseType = ArtistsData & ErrorHandling;
//interface
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar:IArtistsResponse;

//4.union types
interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}
//type alias
type PetType = Bird | Fish;
// interface IPet extends PetType {} //error : interface cannot extends union type
// class Pet implements PetType {} //error : class cannot implements union type

//5.Declaration merging - interface
//동일한 이름으로 interface 여러개 만들고 각각의 내부 property 가 다르더라도,
//나중엔 같은 이름의 interface가 merge 된다.
interface MergingInterface {
  a: string;
}
interface MergingInterface {
  b: string;
}
let mi: MergingInterface;
mi.a; 
mi.b;

//6.Declaration merging - type alias
//type alias 에서는 interface 와 달리, 
//Declaration merging 이 불가능하다.
type MergingType = {
  a: string;
};
// type MergingType = { //error : Duplicate identifier 'MergingType'.
//   b: string;
// };