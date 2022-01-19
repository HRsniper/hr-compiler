import antlr4 from "antlr4";
import HrlangLexer from "./antlr/src/HrlangLexer.js";
import HrlangParser from "./antlr/src/HrlangParser.js";
import HrlangListener from "./antlr/src/HrlangListener.js";
import fs from "fs";
import path from "path";
class Main {
  constructor() {}

  public main(): void {
    try {
      const input = fs.readFileSync(
        path.join(`${path.resolve()}/src/main.hr`),
        {
          encoding: "utf-8"
        }
      );
      const chars = new antlr4.InputStream(input);
      const lexer = new HrlangLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new HrlangParser(tokens);
      parser.buildParseTrees = true;
      const tree = parser.prog();

      console.log("Compilation Successful");
    } catch (error) {
      console.error("ERROR: ", error);
    }
  }
}

const main = new Main();
main.main();