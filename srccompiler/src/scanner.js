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
            this.line = 1;
            this.column = 0;
            const contenttxt = fs_1.default.readFileSync(path_1.default.join(`${path_1.default.resolve()}/src/${filename}`), {
                encoding: "utf-8"
            });
            this.content = [...contenttxt];
            this.position = 0;
            // console.log("CONTENT: ", contenttxt);
        }
        catch (error) {
            console.error("ERROR: ", error);
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
            this.column++;
            switch (this.state) {
                case 0:
                    if (this.isChar(currentChar)) {
                        this.state = 1;
                        term += currentChar;
                    }
                    else if (this.isDigit(currentChar)) {
                        this.state = 2;
                        term += currentChar;
                    }
                    else if (this.isSpace(currentChar)) {
                        this.state = 0;
                    }
                    else if (this.isOperator(currentChar)) {
                        term += currentChar;
                        token = new token_1.Token();
                        token.setType(token_1.Token.TK_OPERATOR);
                        token.setText(term);
                        token.setLine(this.line);
                        token.setColumn(this.column - term.length);
                        return token;
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
                    else if (this.isSpace(currentChar) ||
                        this.isOperator(currentChar) ||
                        this.isEndOfFile()) {
                        if (!this.isEndOfFile(currentChar)) {
                            this.back();
                        }
                        // term += currentChar;
                        token = new token_1.Token();
                        token.setType(token_1.Token.TK_IDENTIFIER);
                        token.setText(term);
                        token.setLine(this.line);
                        token.setColumn(this.column - term.length);
                        return token;
                    }
                    else {
                        throw new exception_1.LexicalException("Malformed Identifier: " + currentChar);
                    }
                    break;
                case 2:
                    if (this.isDigit(currentChar) || currentChar == ".") {
                        this.state = 2;
                        term += currentChar;
                    }
                    else if (!this.isChar(currentChar) ||
                        this.isEndOfFile(currentChar)) {
                        if (!this.isEndOfFile(currentChar)) {
                            this.back();
                        }
                        token = new token_1.Token();
                        token.setType(token_1.Token.TK_NUMBER);
                        token.setText(term);
                        token.setLine(this.line);
                        token.setColumn(this.column - term.length);
                        return token;
                    }
                    else {
                        throw new exception_1.LexicalException(`Unrecognized number: ${(term += currentChar)}`);
                    }
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
    isSpace(c) {
        if (c == "\n" || c == "\r") {
            this.line++;
            this.column = 0;
        }
        return c == " " || c == "\t" || c == "\n" || c == "\r";
    }
    nextChar() {
        if (this.isEndOfFile()) {
            return "\0";
        }
        return this.content[this.position++];
    }
    isEndOfFile(c) {
        if (c == undefined) {
            return this.position >= this.content.length;
        }
        return c == "\0";
    }
    back() {
        this.position--;
        this.column--;
    }
}
exports.Scanner = Scanner;
