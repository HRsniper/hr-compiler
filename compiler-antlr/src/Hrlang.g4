grammar Hrlang;

// parser
prog : 'programa' bloco  'fimprog;'
     ;

bloco : (cmd)+
      ;

cmd : cmdleitura { console.log("leitura"); }
    | cmdescrita { console.log("escrita"); }
    | cmdattrib { console.log("atribuicao"); }
    ;

cmdleitura : 'leia' AP
                    ID { console.log("ID", this._input.LT(-1).type);}
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
