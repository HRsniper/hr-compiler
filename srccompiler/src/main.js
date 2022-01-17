"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("./exception");
const scanner_1 = require("./scanner");
const parser_1 = require("./parser");
class Main {
    constructor() { }
    main() {
        try {
            let scanner = new scanner_1.Scanner("main.hr");
            let parser = new parser_1.Parser(scanner);
            parser.E();
            console.log("Compilation Successful");
        }
        catch (error) {
            console.error("ERROR: ", error);
            if (error instanceof exception_1.LexicalException) {
                console.error("LEXICAL ERROR: ", error.message);
            }
            if (error instanceof exception_1.SyntaxException) {
                console.error("SYNTAX ERROR: ", error.message);
            }
        }
    }
}
const main = new Main();
main.main();
