"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntaxException = exports.LexicalException = void 0;
class LexicalException extends Error {
    constructor(msg) {
        super(msg);
    }
}
exports.LexicalException = LexicalException;
class SyntaxException extends Error {
    constructor(msg) {
        super(msg);
    }
}
exports.SyntaxException = SyntaxException;
