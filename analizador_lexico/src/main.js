"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("./exception");
const lexico_1 = require("./lexico");
class Main {
    constructor() { }
    main() {
        try {
            let scanner = new lexico_1.Scanner("main.hr");
            let token = null;
            do {
                token = scanner.nextToken();
                if (token != null) {
                    console.log(token);
                }
            } while (token != null);
        }
        catch (error) {
            console.error("ERROR: ", error);
            if (error instanceof exception_1.LexicalException) {
                console.error("LEXICAL ERROR: ", error.message);
            }
        }
    }
}
const main = new Main();
main.main();
