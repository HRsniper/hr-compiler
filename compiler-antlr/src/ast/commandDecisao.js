import { AbstractCommand } from "./abstractCommand.js";
export class CommandDecisao extends AbstractCommand {
    constructor(condition, lt, lf) {
        super();
        this.condition = condition;
        this.listaTrue = lt;
        this.listaFalse = lf;
    }
    toString() {
        return (`CommandDecisao: [condition=${this.condition},` +
            ` listaTrue=${this.listaTrue},` +
            ` listaFalse=${this.listaFalse}]`);
    }
    generateJavascriptCode() {
        let str = "";
        str += `if (${this.condition}) {\n`;
        for (const command of this.listaTrue) {
            str += command.generateJavascriptCode() + "\n";
        }
        str += "}\n";
        if (this.listaFalse.length > 0) {
            str += "else {\n";
            for (const command of this.listaFalse) {
                str += command.generateJavascriptCode() + "\n";
            }
            str += "}\n";
        }
        return str.toString();
    }
}
