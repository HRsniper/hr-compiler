import { Variable } from "../datastructs/variable.js";
import { AbstractCommand } from "./abstractCommand.js";

export class CommandLeitura extends AbstractCommand {
  private id: string;
  private var: Variable;

  constructor(id: string, vari: Variable) {
    super();
    this.id = id;
    this.var = vari;
  }

  public toString(): string {
    return `CommandLeitura: [id=${this.id}]`;
  }

  public generateJavascriptCode(): string {
    throw new Error("Method not implemented.");
  }
}
