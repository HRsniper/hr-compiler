export class LexicalException extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

export class SyntaxException extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
