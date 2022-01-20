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
        throw new Error("Method not implemented.");
    }
}
