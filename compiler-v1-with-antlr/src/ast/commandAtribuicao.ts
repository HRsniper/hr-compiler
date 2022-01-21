import { AbstractCommand } from "./abstractCommand.js";

export class CommandAtribuicao extends AbstractCommand {
  private id: string;
  private expr: string;

  constructor(id: string, expr: string) {
    super();
    this.id = id;
    this.expr = expr;
  }

  public toString(): string {
    return `CommandAtribuicao: [id=${this.id}, expr=${this.expr}]`;
  }

  public generateJavascriptCode(): string {
    return `${this.id} = ${this.expr};`;
  }
}
