export class Token {
  private type: number;
  private text: string | undefined;
  public static TK_IDENTIFIER: number = 0;
  public static TK_NUMBER: number = 1;
  public static TK_OPERATOR: number = 2;
  public static TK_PUNCTUATION: number = 3;
  public static TK_ASSIGN: number = 4;
  public static TK_STRING: number = 5;

  // constructor(type: number, text: string) {
  //   this.type = type;
  //   this.text = text;
  // }

  constructor() {}

  public getType(): number {
    return this.type;
  }

  public setType(type: number): void {
    this.type = type;
  }

  public getText(): string | undefined {
    return this.text;
  }

  public setText(text: string): void {
    this.text = text;
  }

  public toString(): string {
    return `Token: [type=${this.type} - text=${this.text}]`;
  }
}
