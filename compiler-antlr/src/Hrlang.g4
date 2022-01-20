grammar Hrlang;

@header{
import { Symbol } from "../../datastructs/symbol.js";
import { Variable } from "../../datastructs/variable.js";
import { SymbolTable } from "../../datastructs/symbolTable.js";
import { SemanticException } from "../../exception/exception.js";
import { Program } from "../../ast/program.js";
import { AbstractCommand } from "../../ast/abstractCommand.js";
import { CommandLeitura } from "../../ast/commandLeitura.js";
import { CommandEscrita } from "../../ast/commandEscrita.js";
}

@members{
this._tipo = new Number();
this._varName = new String();
this._varValue = new String();
this.symbolTable = new SymbolTable();
this.symbol = new Symbol();
this.program = new Program();
this.curThread = new Array();
// this.curThread = new Array<AbstractCommand>();
this._readID = new String();
this._writeID = new String();
// this.cmd;

this.verificaID = function(id){
    if(!this.symbolTable.exists(id)){
      throw new SemanticException("Symbol " + id + " not declared");
    }
  }

this.exibeComandos = function(){
    for (const cmds of this.program.getComandos()) {
      console.log(cmds);
    }
  }
}

// parser
prog : 'programa' decl bloco  'fimprog;'
       {
         this.program.setComandos(this.curThread);
         this.exibeComandos();
       }
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
    | cmdselecao
    ;

cmdleitura : 'leia' AP
                    ID { this.verificaID(this._input.LT(-1).text);
                         this._readID = this._input.LT(-1).text;
                       }
                    FP
                      {
                        let cmd = new CommandLeitura(this._readID);
                        this.curThread.push(cmd);
                      }
                    SC
           ;

cmdescrita : 'escreva' AP
                      ID { this.verificaID(this._input.LT(-1).text);
                           this._writeID = this._input.LT(-1).text;
                         }
                      FP
                        {
                          let cmd = new CommandEscrita(this._writeID);
                          this.curThread.push(cmd);
                        }
                      SC
           ;

cmdattrib : ID { this.verificaID(this._input.LT(-1).text); }
            ATTR
            expr
            SC
          ;

cmdselecao : 'se' AP ID OPREL (ID | NUMBER) FP
             ACH (cmd)+ FCH
             ('senao' ACH (cmd)+ FCH)?
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
