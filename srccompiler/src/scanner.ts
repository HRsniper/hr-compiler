import fs from "fs";
import path from "path";
import { LexicalException } from "./exception";
import { Token } from "./token";

export class Scanner {
  private content: string[];
  private state: number;
  private position: number;

  constructor(filename: string) {
    try {
      const contenttxt = fs.readFileSync(
        path.join(`${path.resolve()}/src/${filename}`),
        {
          encoding: "utf-8"
        }
      );
      this.content = [...contenttxt];
      this.position = 0;

      // console.log("CONTENT: ", contenttxt);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  }

  public nextToken(): Token | null {
    let currentChar: string;
    let term: string = "";
    let token: Token;

    if (this.isEndOfFile()) {
      return null;
    }

    this.state = 0;
    while (true) {
      currentChar = this.nextChar();

      switch (this.state) {
        case 0:
          if (this.isChar(currentChar)) {
            this.state = 1;
            term += currentChar;
          } else if (this.isDigit(currentChar)) {
            this.state = 2;
            term += currentChar;
          } else if (this.isSpace(currentChar)) {
            this.state = 0;
          } else if (this.isOperator(currentChar)) {
            term += currentChar;
            token = new Token();
            token.setType(Token.TK_OPERATOR);
            token.setText(term);
            return token;
          } else {
            throw new LexicalException("Unrecognized symbol: " + currentChar);
          }
          break;

        case 1:
          if (this.isChar(currentChar) || this.isDigit(currentChar)) {
            this.state = 1;
            term += currentChar;
          } else if (
            this.isSpace(currentChar) ||
            this.isOperator(currentChar) ||
            this.isEndOfFile()
          ) {
            if (!this.isEndOfFile(currentChar)) {
              this.back();
            }
            // term += currentChar;
            token = new Token();
            token.setType(Token.TK_IDENTIFIER);
            token.setText(term);
            return token;
          } else {
            throw new LexicalException("Malformed Identifier: " + currentChar);
          }
          break;

        case 2:
          if (this.isDigit(currentChar) || currentChar == ".") {
            this.state = 2;
            term += currentChar;
          } else if (
            !this.isChar(currentChar) ||
            this.isEndOfFile(currentChar)
          ) {
            if (!this.isEndOfFile(currentChar)) {
              this.back();
            }
            token = new Token();
            token.setType(Token.TK_NUMBER);
            token.setText(term);
            return token;
          } else {
            throw new LexicalException(
              `Unrecognized number: ${(term += currentChar)}`
            );
          }
          break;

        default:
          break;
      }
    }
  }

  private isDigit(c: string): boolean {
    return c >= "0" && c <= "9";
  }

  private isChar(c: string): boolean {
    return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
  }

  private isOperator(c: string): boolean {
    return (
      c == "=" ||
      c == ">" ||
      c == "<" ||
      c == "!" ||
      c == "+" ||
      c == "-" ||
      c == "*" ||
      c == "/"
      // c == "!=" ||
      // c == "==" ||
      // c == ">=" ||
      // c == "<=" ||
    );
  }

  private isSpace(c: string): boolean {
    return c == " " || c == "\t" || c == "\n" || c == "\r";
  }

  private nextChar(): string {
    if (this.isEndOfFile()) {
      return "\0";
    }
    return this.content[this.position++];
  }

  private isEndOfFile(c?: string): boolean {
    if (c == undefined) {
      return this.position >= this.content.length;
    }
    return c == "\0";
  }

  private back(): void {
    this.position--;
  }
}
