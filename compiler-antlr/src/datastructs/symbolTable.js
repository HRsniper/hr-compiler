export class SymbolTable {
    constructor() {
        this.map = new Map();
    }
    add(symbol) {
        this.map.set(symbol.getName(), symbol);
    }
    exists(symbolName) {
        return this.map.get(symbolName) != null;
    }
    get(symbolName) {
        return this.map.get(symbolName);
    }
    getAll() {
        let symbols = new Array();
        for (let symbol of this.map.values()) {
            symbols.push(symbol);
        }
        return symbols;
    }
}
SymbolTable.NUMBER = 0;
SymbolTable.TEXT = 1;
