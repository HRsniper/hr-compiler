export class Builder {
constructor() {}
main() {
let a = new Number();
let b = new Number();
let t1 = new String();
console.log('a: Lido corretamente');
console.log('b: Lido corretamente');
b = 2;
a = 1+3*2/b;
if (a>b) {
console.log('a', a);
}
else {
console.log('b', b);
}

}
}
const builder = new Builder();
builder.main();
