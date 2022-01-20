import { Symbol } from "./symbol.js";

export class Variable extends Symbol {
  public static NUMBER: number = 0;
  public static TEXT: number = 1;
  private type: number;
  private value: string;

  constructor(name: string, type: number, value: string) {
    super(name);
    this.type = type;
    this.value = value;
  }

  public getType(): number {
    return this.type;
  }

  public setType(value: number): void {
    this.type = value;
  }

  public getValue(): string {
    return this.value;
  }

  public setValue(value: string): void {
    this.value = value;
  }

  public toString(): string {
    return `Variable: [name=${this.name}, type=${this.type}, value=${this.value}]`;
  }

  public generateJavascriptCode(): string {
    let str: string;
    if (this.type == Variable.NUMBER) {
      str = `let ${this.name}: number`;
    } else {
      str = `let ${this.name}: string`;
    }
    return str;
  }
}
