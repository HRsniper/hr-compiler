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
    throw new Error("Method not implemented.");
  }
}
