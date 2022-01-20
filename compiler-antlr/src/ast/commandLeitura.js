import { AbstractCommand } from "./abstractCommand.js";
export class CommandLeitura extends AbstractCommand {
    constructor(id, vari) {
        super();
        this.id = id;
        this.var = vari;
    }
    toString() {
        return `CommandLeitura: [id=${this.id}]`;
    }
    generateJavascriptCode() {
        throw new Error("Method not implemented.");
    }
}
