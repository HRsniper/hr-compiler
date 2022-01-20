import { AbstractCommand } from "./abstractCommand.js";

export class CommandLeitura extends AbstractCommand {
  private id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }

  public generateJavascriptCode(): string {
    throw new Error("Method not implemented.");
  }
}
