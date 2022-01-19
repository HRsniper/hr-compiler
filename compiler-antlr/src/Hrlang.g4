grammar Hrlang;

@header{
import { Symbol } from "../../datastructs/symbol.js";
import { Variable } from "../../datastructs/variable.js";
import { SymbolTable } from "../../datastructs/symbolTable.js";
import { SemanticException } from "../../exception/exception.js";
}

@members{
this._tipo = new Number();
this._varName = new String();
this._varValue = new String();
this.symbolTable = new SymbolTable();
this.symbol = new Symbol();
}

// parser
prog : 'programa' decl bloco  'fimprog;'
     ;

decl : (declaravar)+
     ;

declaravar : tipo ID {
                       this._varName = this._input.LT(-1).text;
                       this._varValue = null;
                       this.symbol = new Variable(this._varName, this._tipo, this._varValue);
                       this.symbolTable.add(this.symbol);
                     }
             (VIR ID)*
             SC
           ;

tipo : 'numero' { this._tipo = Variable.NUMBER; }
     | 'texto' { this._tipo = Variable.TEXT; }
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
