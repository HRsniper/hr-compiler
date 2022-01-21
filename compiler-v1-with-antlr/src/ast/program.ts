import { SymbolTable } from "../datastructs/symbolTable.js";
import { AbstractCommand } from "./abstractCommand.js";
import fs from "fs";
export class Program {
  private varTable: SymbolTable;
  private comandos: Array<AbstractCommand>;
  private programName: string;

  constructor() {}

  public getVarTable(): SymbolTable {
    return this.varTable;
  }

  public setVarTable(value: SymbolTable) {
    this.varTable = value;
  }

  public getComandos(): Array<AbstractCommand> {
    return this.comandos;
  }

  public setComandos(value: Array<AbstractCommand>) {
    this.comandos = value;
  }

  public getProgramName(): string {
    return this.programName;
  }

  public setProgramName(value: string) {
    this.programName = value;
  }

  public generateTarget(): void {
    let str: string = "";
    str += "export class Builder {\n";
    str += "constructor() {}\n";
    str += "main() {\n";
    for (const symbol of this.varTable.getAll()) {
      str += symbol.generateJavascriptCode() + "\n";
    }
    for (const command of this.comandos) {
      str += command.generateJavascriptCode() + "\n";
    }
    str += "}\n";
    str += "}\n";
    str += "const builder = new Builder();\n";
    str += "builder.main();\n";

    try {
      fs.writeFileSync(
        `${process.cwd()}/mainGEN.js`,
        str.toString(),
        "utf-8"
      );
    } catch (error) {
      console.log(error);
    }
  }
}
