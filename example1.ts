abstract class AbstractPerson {
  protected _name: string = "Mark";

  abstract setName(name: string): void;
}