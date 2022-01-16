import { LexicalException } from "./exception";
import { Scanner } from "./lexico";
import { Token } from "./token";

class Main {
  constructor() {}

  public main(): void {
    try {
      let scanner = new Scanner("main.hr");
      let token = null;

      do {
        token = scanner.nextToken();
        if (token != null) {
          console.log(token);
        }
      } while (token != null);
    } catch (error) {
      console.error("ERROR: ", error);

      if (error instanceof LexicalException) {
        console.error("LEXICAL ERROR: ", error.message);
      }
    }
  }
}

const main = new Main();
main.main();
