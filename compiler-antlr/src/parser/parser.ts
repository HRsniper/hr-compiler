import { SyntaxException } from "../exception/exception";
import { Scanner } from "../lexer/scanner";
import { Token } from "../lexer/token";

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
      throw new SyntaxException(
        `Expected identifier or number: ${
          Token.TK_TEXT[this.token?.getType() || 0]
        } (${this.token?.getText()}) at LINE ${this.token?.getLine()} and COLUMN ${this.token?.getColumn()}`
      );
    }
  }

  public OP() {
    if (this.token?.getType() != Token.TK_OPERATOR) {
      throw new SyntaxException(
        `Expected operator: ${
          Token.TK_TEXT[this.token?.getType() || 0]
        } (${this.token?.getText()}) at LINE ${this.token?.getLine()} and COLUMN ${this.token?.getColumn()}`
      );
    }
  }
}
