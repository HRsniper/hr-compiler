import { AbstractCommand } from "./abstractCommand.js";
export class CommandEscrita extends AbstractCommand {
    constructor(id) {
        super();
        this.id = id;
    }
    toString() {
        return `CommandEscrita: [id=${this.id}]`;
    }
    generateJavascriptCode() {
        return `console.log('${this.id}', ${this.id});`;
    }
}
