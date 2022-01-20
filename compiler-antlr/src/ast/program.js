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
            fs.writeFileSync(`${process.cwd()}/src/mainTS.ts`, str, 
            // str.toString(),
            "utf-8");
        }
        catch (error) {
            console.log(error);
        }
    }
}
