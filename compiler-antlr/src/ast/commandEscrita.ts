import { AbstractCommand } from "./abstractCommand.js";

export class CommandEscrita extends AbstractCommand {
  private id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }

  public toString(): string {
    return `CommandEscrita: [id=${this.id}]`;
  }

  public generateJavascriptCode(): string {
    return `console.log(${this.id});`;
  }
}
