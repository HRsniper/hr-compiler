"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scanner = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const exception_1 = require("./exception");
const token_1 = require("./token");
class Scanner {
    constructor(filename) {
        try {
            const contenttxt = fs_1.default.readFileSync(path_1.default.join(`${path_1.default.resolve()}/src/${filename}`), {
                encoding: "utf-8"
            });
            this.content = [...contenttxt];
            this.position = 0;
            console.log("CONTENT: ", contenttxt);
        }
        catch (error) {
            console.error("ERROR: ", error);
            // throw new Error().stack;
        }
    }
    nextToken() {
        let currentChar;
        let term = "";
        let token;
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
                    }
                    else if (this.isDigit(currentChar)) {
                        this.state = 3;
                        term += currentChar;
                    }
                    else if (this.isOperator(currentChar)) {
                        this.state = 5;
                        term += currentChar;
                    }
                    else if (this.isSpace(currentChar)) {
                        this.state = 0;
                    }
                    else {
                        throw new exception_1.LexicalException("Unrecognized symbol: " + currentChar);
                    }
                    break;
                case 1:
                    if (this.isChar(currentChar) || this.isDigit(currentChar)) {
                        this.state = 1;
                        term += currentChar;
                    }
                    else if (this.isSpace(currentChar)) {
                        this.state = 2;
                    }
                    else if (this.isOperator(currentChar)) {
                        this.state = 0;
                        term += currentChar;
                    }
                    else {
                        throw new exception_1.LexicalException("Malformed Identifier: " + currentChar);
                    }
                    break;
                case 2:
                    token = new token_1.Token();
                    token.setType(token_1.Token.TK_IDENTIFIER);
                    token.setText(term);
                    this.back();
                    return token;
                case 3:
                    if (this.isDigit(currentChar)) {
                        this.state = 3;
                        term += currentChar;
                    }
                    else if (!this.isChar(currentChar)) {
                        this.state = 4;
                    }
                    else {
                        throw new exception_1.LexicalException(`Unrecognized number: ${(term += currentChar)}`);
                    }
                    break;
                case 4:
                    token = new token_1.Token();
                    token.setType(token_1.Token.TK_NUMBER);
                    token.setText(term);
                    this.back();
                    return token;
                case 5:
                    term += currentChar;
                    token = new token_1.Token();
                    token.setType(token_1.Token.TK_OPERATOR);
                    token.setText(term);
                    return token;
                case 6:
                    break;
                case 7:
                    break;
                default:
                    break;
            }
        }
    }
    isDigit(c) {
        return c >= "0" && c <= "9";
    }
    isChar(c) {
        return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
    }
    isOperator(c) {
        return (c == "=" ||
            c == "==" ||
            c == ">=" ||
            c == "<=" ||
            c == ">" ||
            c == "<" ||
            c == "!=" ||
            c == "!");
    }
    isSpace(c) {
        return c == " " || c == "\t" || c == "\n" || c == "\r";
    }
    nextChar() {
        return this.content[this.position++];
    }
    isEndOfFile() {
        return this.position == this.content.length;
    }
    back() {
        this.position--;
    }
}
exports.Scanner = Scanner;
