export class SymbolTable {
    constructor() {
        this.map = new Map();
    }
    add(symbol) {
        this.map.set(symbol.getName(), symbol);
    }
    exits(symbolName) {
        return this.map.get(symbolName) != null;
    }
    get(symbolName) {
        return this.map.get(symbolName);
    }
}
SymbolTable.NUMBER = 0;
SymbolTable.TEXT = 1;
