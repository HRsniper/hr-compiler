# Gramatica

## G = (Vn, Vt, P, S)

- `Vn` conjunto de símbolos **nao terminais** da gramatica, são os símbolos que podem ser substituídos _(variáveis)_
- `Vt` conjunto de símbolos **terminais** da gramatica, os quais constituem os símbolos da linguagem
- `P` **regras de produção** da gramatica, responsáveis por produzir as sentenças da linguagem
- `S` **símbolo inicial** da gramatica, por onde se inicia a derivação das sentenças da linguagem

## Classe Gramatica

### Gramatica com estrutura de frase ou _TIPO 0_

- Nenhuma restrição é imposta

### Gramatica sensíveis ao contexto ou _TIPO 1_

- Restrição: nunca o numero de símbolos do **lado esquerdo** da regra pode ser maior ao número de símbolos do **lado direito**

### Gramatica livres de contexto ou _TIPO 2_

- Restrição: no **lado esquerdo** da regra só pode haver **um símbolo nao terminal**, derivando de qualquer sequencia de símbolos **terminais** ou **nao terminais**

### Gramatica regulares ou _TIPO 3_

- Restrição:
  - No **lado esquerdo** da regra **um símbolo nao terminal**, so pode derivar de **um símbolo terminal** _(S -> a)_
  - Ou **um símbolo nao terminal** deriva **um símbolo terminal** seguido de **um símbolo nao terminal** _(S -> aW)_
  - Ou **um símbolo nao terminal** deriva **vazio** _(S -> &)_
