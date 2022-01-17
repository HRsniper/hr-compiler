import { SyntaxException } from "./exception";
import { Scanner } from "./scanner";
import { Token } from "./token";

export class Parser {
  private scanner: Scanner;
  private token: Token | null;

  constructor(scanner: Scanner) {
    this.scanner = scanner;
  }

  public E() {
    this.T();
    this.El();
    // console.log("E", this.token);
  }

  public El() {
    this.token = this.scanner.nextToken();
    // console.log("El", this.token);
    if (this.token != null) {
      this.OP();
      this.T();
      this.El();
    }
  }

  public T() {
    this.token = this.scanner.nextToken();
    // console.log("T", this.token);
    if (
      this.token?.getType() != Token.TK_IDENTIFIER &&
      this.token?.getType() != Token.TK_NUMBER
    ) {
      throw new SyntaxException(`Expected identifier or number: ${this.token}`);
    }
  }

  public OP() {
    if (this.token?.getType() != Token.TK_OPERATOR) {
      throw new SyntaxException(`Expected operator: ${this.token}`);
    }
  }
}
