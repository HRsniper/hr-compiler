import { AbstractCommand } from "./abstractCommand.js";
export class CommandEscrita extends AbstractCommand {
    constructor(id) {
        super();
        this.id = id;
    }
    generateJavascriptCode() {
        throw new Error("Method not implemented.");
    }
}
