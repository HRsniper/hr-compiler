import { AbstractCommand } from "./abstractCommand.js";

export class CommandAtribuicao extends AbstractCommand {
  private id: string;
  private expr: string;

  constructor(id: string, expr: string) {
    super();
    this.id = id;
    this.expr = expr;
  }

  public generateJavascriptCode(): string {
    throw new Error("Method not implemented.");
  }
}
