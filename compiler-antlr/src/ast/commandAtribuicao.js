import { AbstractCommand } from "./abstractCommand.js";
export class CommandAtribuicao extends AbstractCommand {
    constructor(id, expr) {
        super();
        this.id = id;
        this.expr = expr;
    }
    generateJavascriptCode() {
        throw new Error("Method not implemented.");
    }
}
