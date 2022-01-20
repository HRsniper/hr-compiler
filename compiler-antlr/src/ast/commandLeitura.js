import { Variable } from "../datastructs/variable.js";
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
        return `${this.id} = _key.${this.var.getType() == Variable.NUMBER ? "valueOf()" : "valueOf()"};\n`;
    }
}
