import { AbstractCommand } from "./abstractCommand.js";

export class CommandDecisao extends AbstractCommand {
  private condition: string;
  private listaTrue: Array<AbstractCommand>;
  private listaFalse: Array<AbstractCommand>;

  constructor(
    condition: string,
    lt: Array<AbstractCommand>,
    lf: Array<AbstractCommand>
  ) {
    super();
    this.condition = condition;
    this.listaTrue = lt;
    this.listaFalse = lf;
  }

  public toString(): string {
    return (
      `CommandDecisao: [condition=${this.condition},` +
      ` listaTrue=${this.listaTrue},` +
      ` listaFalse=${this.listaFalse}]`
    );
  }

  public generateJavascriptCode(): string {
    let str: string = "";
    str += `if (${this.condition}) {\n`;
    for (const command of this.listaTrue) {
      str += command.generateJavascriptCode() + "\n";
    }
    str += "}\n";
    if (this.listaFalse.length > 0) {
      str += "else {\n";
      for (const command of this.listaFalse) {
        str += command.generateJavascriptCode() + "\n";
      }
      str += "}\n";
    }
    return str.toString();
  }
}
