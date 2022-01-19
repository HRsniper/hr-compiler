import { Symbol } from "./symbol";

export class SymbolTable {
  public static NUMBER: number = 0;
  public static TEXT: number = 1;
  private map: Map<string, Symbol>;
  private value: string;

  constructor() {
    this.map = new Map<string, Symbol>();
  }

  public add(symbol: Symbol): void {
    this.map.set(symbol.getName(), symbol);
  }

  public exits(symbolName: string): boolean {
    return this.map.get(symbolName) != null;
  }

  public get(symbolName: string): Symbol | undefined {
    return this.map.get(symbolName);
  }
}