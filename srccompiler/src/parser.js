"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const exception_1 = require("./exception");
const token_1 = require("./token");
class Parser {
    constructor(scanner) {
        this.scanner = scanner;
    }
    E() {
        this.T();
        this.El();
        // console.log("E", this.token);
    }
    El() {
        this.token = this.scanner.nextToken();
        // console.log("El", this.token);
        if (this.token != null) {
            this.OP();
            this.T();
            this.El();
        }
    }
    T() {
        var _a, _b;
        this.token = this.scanner.nextToken();
        // console.log("T", this.token);
        if (((_a = this.token) === null || _a === void 0 ? void 0 : _a.getType()) != token_1.Token.TK_IDENTIFIER &&
            ((_b = this.token) === null || _b === void 0 ? void 0 : _b.getType()) != token_1.Token.TK_NUMBER) {
            throw new exception_1.SyntaxException(`Expected identifier or number: ${this.token}`);
        }
    }
    OP() {
        var _a;
        if (((_a = this.token) === null || _a === void 0 ? void 0 : _a.getType()) != token_1.Token.TK_OPERATOR) {
            throw new exception_1.SyntaxException(`Expected operator: ${this.token}`);
        }
    }
}
exports.Parser = Parser;
