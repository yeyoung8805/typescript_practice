//compare "function" in type alias VS interface

//type alias
type EatType = (food: string) => void;

//interface
interface IEat {
  (food: string): void;
}