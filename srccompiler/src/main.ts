import { LexicalException, SyntaxException } from "./exception";
import { Scanner } from "./scanner";
import { Parser } from "./parser";

class Main {
  constructor() {}

  public main(): void {
    try {
      let scanner = new Scanner("main.hr");
      let parser = new Parser(scanner);
      parser.E();
      console.log("Compilation Successful");
    } catch (error) {
      console.error("ERROR: ", error);
      if (error instanceof LexicalException) {
        console.error("LEXICAL ERROR: ", error.message);
      }
      if (error instanceof SyntaxException) {
        console.error("SYNTAX ERROR: ", error.message);
      }
    }
  }
}

const main = new Main();
main.main();
