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
        var _a, _b, _c, _d, _e, _f;
        this.token = this.scanner.nextToken();
        // console.log("T", this.token);
        if (((_a = this.token) === null || _a === void 0 ? void 0 : _a.getType()) != token_1.Token.TK_IDENTIFIER &&
            ((_b = this.token) === null || _b === void 0 ? void 0 : _b.getType()) != token_1.Token.TK_NUMBER) {
            throw new exception_1.SyntaxException(`Expected identifier or number: ${token_1.Token.TK_TEXT[((_c = this.token) === null || _c === void 0 ? void 0 : _c.getType()) || 0]} (${(_d = this.token) === null || _d === void 0 ? void 0 : _d.getText()}) at LINE ${(_e = this.token) === null || _e === void 0 ? void 0 : _e.getLine()} and COLUMN ${(_f = this.token) === null || _f === void 0 ? void 0 : _f.getColumn()}`);
        }
    }
    OP() {
        var _a, _b, _c, _d, _e;
        if (((_a = this.token) === null || _a === void 0 ? void 0 : _a.getType()) != token_1.Token.TK_OPERATOR) {
            throw new exception_1.SyntaxException(`Expected operator: ${token_1.Token.TK_TEXT[((_b = this.token) === null || _b === void 0 ? void 0 : _b.getType()) || 0]} (${(_c = this.token) === null || _c === void 0 ? void 0 : _c.getText()}) at LINE ${(_d = this.token) === null || _d === void 0 ? void 0 : _d.getLine()} and COLUMN ${(_e = this.token) === null || _e === void 0 ? void 0 : _e.getColumn()}`);
        }
    }
}
exports.Parser = Parser;
