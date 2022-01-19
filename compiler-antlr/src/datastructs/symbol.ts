export abstract class Symbol {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string): void {
    this.name = value;
  }

  public toString(): string {
    return `Symbol: [name=${this.name}]`;
  }
}
