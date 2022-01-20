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
    str += "import readline from 'readline';\n";
    str += "import util from 'util';\n";
    str += "export class Builder {\n";
    str += "constructor() {}\n";
    str += "public main(): void {\n";
    str +=
      "const rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n";
    str += "const Scanner = util.promisify(rl.question).bind(rl);\n";
    str += "const _key = await Scanner('KEY: ');\n";
    for (const symbol of this.varTable.getAll()) {
      str += symbol.generateJavascriptCode() + "\n";
    }
    for (const command of this.comandos) {
      str += command.generateJavascriptCode() + "\n";
    }
    str += "rl.close();\n";
    str += "}\n";
    str += "}\n";

    try {
      fs.writeFileSync(
        `${process.cwd()}/src/mainTS.ts`,
        str,
        // str.toString(),
        "utf-8"
      );
    } catch (error) {
      console.log(error);
    }
  }
}
