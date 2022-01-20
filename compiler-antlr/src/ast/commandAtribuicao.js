import { AbstractCommand } from "./abstractCommand.js";
export class CommandAtribuicao extends AbstractCommand {
    constructor(id, expr) {
        super();
        this.id = id;
        this.expr = expr;
    }
    toString() {
        return `CommandAtribuicao: [id=${this.id}, expr=${this.expr}]`;
    }
    generateJavascriptCode() {
        throw new Error("Method not implemented.");
    }
}
