grammar Hrlang;

@header{
import { Symbol } from "../../datastructs/symbol.js";
import { Variable } from "../../datastructs/variable.js";
import { SymbolTable } from "../../datastructs/symbolTable.js";
import { SemanticException } from "../../exception/exception.js";
}

@members{
this._tipo = "";
}

// parser
prog : 'programa' decl bloco  'fimprog;'
     ;

decl : (declaravar)+
     ;

declaravar : tipo ID (VIR ID)* SC
           ;

tipo : 'numero' { console.log("tipo numero"); }
     | 'texto' { console.log("tipo texto"); }
     ;

bloco : (cmd)+
      ;

cmd : cmdleitura { console.log("cmd leitura"); }
    | cmdescrita { console.log("cmd escrita"); }
    | cmdattrib { console.log("cmd atribuicao"); }
    ;

cmdleitura : 'leia' AP
                    ID { console.log("ID", this._input.LT(-1).text);}
                    FP
                    SC
           ;

cmdescrita : 'escreva' AP
                      ID
                      FP
                      SC
           ;

cmdattrib : ID
            ATTR
            expr
            SC
          ;

expr : termo (OP termo)*
     ;

termo : ID | NUMBER
      ;

// lexer
AP : '('
   ;

FP : ')'
   ;

SC : ';'
   ;

OP : '+' | '-' | '*' | '/'
   ;

ATTR : '='
     ;

VIR  : ','
     ;

ACH  : '{'
     ;

FCH  : '}'
     ;


OPREL : '>' | '<' | '>=' | '<=' | '==' | '!='
      ;

ID : [a-z] ([a-z] | [A-Z] | [0-9])*
   ;

NUMBER : [0-9]+ ('.' [0-9]+)?
       ;

WS : (' ' | '\t' | '\n' | '\r') -> skip
   ;
