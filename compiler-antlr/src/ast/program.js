import fs from "fs";
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
            fs.writeFileSync(`${process.cwd()}/src/mainGEN.js`, str.toString(), "utf-8");
        }
        catch (error) {
            console.log(error);
        }
    }
}
