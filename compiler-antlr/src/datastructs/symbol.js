export class Symbol {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    toString() {
        return `Symbol: [name=${this.name}]`;
    }
}
