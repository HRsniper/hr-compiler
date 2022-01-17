# Gramatica

## G = (Vn, Vt, P, S)

Vn = E, T, OP

Vt = id, num, +, -, \*, /

Regras sintáticas:

- _1_: E -> E OP T | T
- _2_: T -> id | num
- _3_: OP -> + | - | \* | /

Reescrevemos a regra 1 para tirar a recursão a esquerda:

- _1a_: E -> T E'
- _1b_: E' -> OP T E' | &
- _2_: T -> id | num
- _3_: OP -> + | - | \* | /

![](asint.jpg)
