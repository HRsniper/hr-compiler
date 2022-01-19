import { Symbol } from "./symbol.js";
export class Variable extends Symbol {
    constructor(name, type, value) {
        super(name);
        this.type = type;
        this.value = value;
    }
    getType() {
        return this.type;
    }
    setType(value) {
        this.type = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
    toString() {
        return `Variable: [name=${this.name}, type=${this.type}, value=${this.value}]`;
    }
}
Variable.NUMBER = 0;
Variable.TEXT = 1;
