export class Program {
    constructor() { }
    getVarTable() {
        return this.varTable;
    }
    setVarTable(value) {
        this.varTable = value;
    }
    getComandos() {
        return this.comandos;
    }
    setComandos(value) {
        this.comandos = value;
    }
    getProgramName() {
        return this.programName;
    }
    setProgramName(value) {
        this.programName = value;
    }
    generateTarget() {
        let str = "";
        str += "export class Builder {\n";
        str += "constructor() {}\n";
        str += "public main(): void {\n";
        for (const symbol of this.varTable.getAll()) {
            str += symbol.generateJavascriptCode() + "\n";
        }
        str += "}\n";
        str += "}\n";
    }
}
