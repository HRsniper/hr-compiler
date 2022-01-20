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
import { CommandAtribuicao } from "../../ast/commandAtribuicao.js";
import { CommandDecisao } from "../../ast/commandDecisao.js";
}

@members{
this._tipo = new Number();
this._varName = new String();
this._varValue = new String();
this.symbolTable = new SymbolTable();
this.symbol = new Symbol();
this.program = new Program();
this.curThread = new Array();
// this.curThread = new ArrayList<AbstractCommand>();
this._readID = new String();
this._writeID = new String();
// this.cmd;
this._exprID = new String();
this.stack = new Array();
// this.stack = new Stack<ArrayList<AbstractCommand>>();
this._exprDecision = new String();
this.listaTrue = new Array();
this.listaFalse = new Array();
// this.listaTrue = new ArrayList<AbstractCommand>();
// this.listaFalse = new ArrayList<AbstractCommand>();

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
         this.program.setComandos(this.stack.pop());
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

bloco : { let curThread = new Array();
          this.stack.push(curThread);
        }
        (cmd)+
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
                    SC
                    {
                      let cmd = new CommandLeitura(this._readID);
                      this.stack[this.stack.length-1].push(cmd);
                      // this.stack.peek().add(cmd);
                    }
           ;

cmdescrita : 'escreva' AP
                      ID { this.verificaID(this._input.LT(-1).text);
                           this._writeID = this._input.LT(-1).text;
                         }
                      FP
                      SC
                      {
                        let cmd = new CommandEscrita(this._writeID);
                      this.stack[this.stack.length-1].push(cmd);
                      // this.stack.peek().add(cmd);
                      }
           ;

cmdattrib : ID {
                 this.verificaID(this._input.LT(-1).text);
                 this._exprID = this._input.LT(-1).text;
               }
            ATTR { this._exprContent = ""; }
            expr
            SC
            {
              let cmd = new CommandAtribuicao(this._exprID, this._exprContent);
              this.stack[this.stack.length-1].push(cmd);
              // this.stack.peek().add(cmd);
            }
          ;

cmdselecao : 'se' AP
                  ID { this._exprDecision = this._input.LT(-1).text; }
                  OPREL { this._exprDecision += this._input.LT(-1).text; }
                  (ID | NUMBER) { this._exprDecision += this._input.LT(-1).text; }
                  FP
                  ACH
                  { let curThread = new Array();
                    this.stack.push(curThread);
                  }
                  (cmd)+
                  FCH
                  {
                    this.listaTrue = this.stack.pop();
                  }
                  ('senao' ACH
                           { let curThread = new Array();
                             this.stack.push(curThread);
                           }
                           (cmd)+
                           {
                             this.listaFalse = this.stack.pop();
                             let cmd = new CommandDecisao(this._exprDecision, this.listaTrue, this.listaFalse);
                             this.stack[this.stack.length-1].push(cmd);
                           }
                           FCH
                  )?
           ;

expr : termo (
               OP { this._exprContent += this._input.LT(-1).text; }
               termo
             )*
     ;

termo : ID {
             this.verificaID(this._input.LT(-1).text);
             this._exprContent += this._input.LT(-1).text;
           }
      | NUMBER { this._exprContent += this._input.LT(-1).text; }
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
