"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
class Token {
    // constructor(type: number, text: string) {
    //   this.type = type;
    //   this.text = text;
    // }
    constructor() { }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getText() {
        return this.text;
    }
    setText(text) {
        this.text = text;
    }
    toString() {
        return `Token: [type=${this.type} - text=${this.text}]`;
    }
}
exports.Token = Token;
Token.TK_IDENTIFIER = 0;
Token.TK_NUMBER = 1;
Token.TK_OPERATOR = 2;
Token.TK_PUNCTUATION = 3;
Token.TK_ASSIGN = 4;
Token.TK_STRING = 5;
