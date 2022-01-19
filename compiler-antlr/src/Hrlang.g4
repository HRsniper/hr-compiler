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
this.verificaID = function(id){
    if(!this.symbolTable.exists(id)){
      throw new SemanticException("Symbol " + id + " not declared");
    }
  }
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
                       if(!this.symbolTable.exists(this._varName)){
                         this.symbolTable.add(this.symbol);
                       }else{
                         throw new SemanticException("Variable " + this._varName + " already declared");
                       }
                     }
             (VIR ID {
                       this._varName = this._input.LT(-1).text;
                       this._varValue = null;
                       this.symbol = new Variable(this._varName, this._tipo, this._varValue);
                       if(!this.symbolTable.exists(this._varName)){
                         this.symbolTable.add(this.symbol);
                       }else{
                         throw new SemanticException("Variable " + this._varName + " already declared");
                       }
                     }
             )*
             SC
           ;

tipo : 'numero' { this._tipo = Variable.NUMBER; }
     | 'texto' { this._tipo = Variable.TEXT; }
     ;

bloco : (cmd)+
      ;

cmd : cmdleitura
    | cmdescrita
    | cmdattrib
    ;

cmdleitura : 'leia' AP
                    ID { this.verificaID(this._input.LT(-1).text); }
                    FP
                    SC
           ;

cmdescrita : 'escreva' AP
                      ID { this.verificaID(this._input.LT(-1).text); }
                      FP
                      SC
           ;

cmdattrib : ID { this.verificaID(this._input.LT(-1).text); }
            ATTR
            expr
            SC
          ;

expr : termo (OP termo)*
     ;

termo : ID { this.verificaID(this._input.LT(-1).text); } | NUMBER
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
