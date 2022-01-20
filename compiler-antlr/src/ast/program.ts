import { SymbolTable } from "../datastructs/symbolTable.js";
import { AbstractCommand } from "./abstractCommand.js";

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

  public generateTarget(): void {}
}
