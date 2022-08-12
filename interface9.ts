//compare "function" in type alias VS interface

//type alias
type EatType = (food: string) => void;

//interface
interface IEat {
  (food: string): void;
}

//compare "array" in type alias VS interface
type PersonList = string[];

interface IPersonList {
  [index: number]: string;
}

//Intersection
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
