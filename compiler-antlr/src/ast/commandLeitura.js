import { AbstractCommand } from "./abstractCommand.js";
export class CommandLeitura extends AbstractCommand {
    constructor(id) {
        super();
        this.id = id;
    }
    toString() {
        return `CommandLeitura: [id=${this.id}]`;
    }
    generateJavascriptCode() {
        throw new Error("Method not implemented.");
    }
}
