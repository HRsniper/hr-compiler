// Generated from src/Hrlang.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';


import { Symbol } from "../../datastructs/symbol.js";
import { Variable } from "../../datastructs/variable.js";
import { SymbolTable } from "../../datastructs/symbolTable.js";
import { SemanticException } from "../../exception/exception.js";
import { Program } from "../../ast/program.js";
import { AbstractCommand } from "../../ast/abstractCommand.js";
import { CommandLeitura } from "../../ast/commandLeitura.js";
import { CommandEscrita } from "../../ast/commandEscrita.js";



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0016\u0093\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012z",
    "\n\u0012\u0003\u0013\u0003\u0013\u0007\u0013~\n\u0013\f\u0013\u000e",
    "\u0013\u0081\u000b\u0013\u0003\u0014\u0006\u0014\u0084\n\u0014\r\u0014",
    "\u000e\u0014\u0085\u0003\u0014\u0003\u0014\u0006\u0014\u008a\n\u0014",
    "\r\u0014\u000e\u0014\u008b\u0005\u0014\u008e\n\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0002\u0002\u0016\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\'\u0015)\u0016\u0003\u0002\b\u0005\u0002,-//11\u0004\u0002>",
    ">@@\u0003\u0002c|\u0005\u00022;C\\c|\u0003\u00022;\u0005\u0002\u000b",
    "\f\u000f\u000f\"\"\u0002\u009a\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002",
    "\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002",
    "!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002",
    "\u0002\u0002\u0003+\u0003\u0002\u0002\u0002\u00054\u0003\u0002\u0002",
    "\u0002\u0007=\u0003\u0002\u0002\u0002\tD\u0003\u0002\u0002\u0002\u000b",
    "J\u0003\u0002\u0002\u0002\rO\u0003\u0002\u0002\u0002\u000fW\u0003\u0002",
    "\u0002\u0002\u0011Z\u0003\u0002\u0002\u0002\u0013`\u0003\u0002\u0002",
    "\u0002\u0015b\u0003\u0002\u0002\u0002\u0017d\u0003\u0002\u0002\u0002",
    "\u0019f\u0003\u0002\u0002\u0002\u001bh\u0003\u0002\u0002\u0002\u001d",
    "j\u0003\u0002\u0002\u0002\u001fl\u0003\u0002\u0002\u0002!n\u0003\u0002",
    "\u0002\u0002#y\u0003\u0002\u0002\u0002%{\u0003\u0002\u0002\u0002\'\u0083",
    "\u0003\u0002\u0002\u0002)\u008f\u0003\u0002\u0002\u0002+,\u0007r\u0002",
    "\u0002,-\u0007t\u0002\u0002-.\u0007q\u0002\u0002./\u0007i\u0002\u0002",
    "/0\u0007t\u0002\u000201\u0007c\u0002\u000212\u0007o\u0002\u000223\u0007",
    "c\u0002\u00023\u0004\u0003\u0002\u0002\u000245\u0007h\u0002\u000256",
    "\u0007k\u0002\u000267\u0007o\u0002\u000278\u0007r\u0002\u000289\u0007",
    "t\u0002\u00029:\u0007q\u0002\u0002:;\u0007i\u0002\u0002;<\u0007=\u0002",
    "\u0002<\u0006\u0003\u0002\u0002\u0002=>\u0007p\u0002\u0002>?\u0007w",
    "\u0002\u0002?@\u0007o\u0002\u0002@A\u0007g\u0002\u0002AB\u0007t\u0002",
    "\u0002BC\u0007q\u0002\u0002C\b\u0003\u0002\u0002\u0002DE\u0007v\u0002",
    "\u0002EF\u0007g\u0002\u0002FG\u0007z\u0002\u0002GH\u0007v\u0002\u0002",
    "HI\u0007q\u0002\u0002I\n\u0003\u0002\u0002\u0002JK\u0007n\u0002\u0002",
    "KL\u0007g\u0002\u0002LM\u0007k\u0002\u0002MN\u0007c\u0002\u0002N\f\u0003",
    "\u0002\u0002\u0002OP\u0007g\u0002\u0002PQ\u0007u\u0002\u0002QR\u0007",
    "e\u0002\u0002RS\u0007t\u0002\u0002ST\u0007g\u0002\u0002TU\u0007x\u0002",
    "\u0002UV\u0007c\u0002\u0002V\u000e\u0003\u0002\u0002\u0002WX\u0007u",
    "\u0002\u0002XY\u0007g\u0002\u0002Y\u0010\u0003\u0002\u0002\u0002Z[\u0007",
    "u\u0002\u0002[\\\u0007g\u0002\u0002\\]\u0007p\u0002\u0002]^\u0007c\u0002",
    "\u0002^_\u0007q\u0002\u0002_\u0012\u0003\u0002\u0002\u0002`a\u0007*",
    "\u0002\u0002a\u0014\u0003\u0002\u0002\u0002bc\u0007+\u0002\u0002c\u0016",
    "\u0003\u0002\u0002\u0002de\u0007=\u0002\u0002e\u0018\u0003\u0002\u0002",
    "\u0002fg\t\u0002\u0002\u0002g\u001a\u0003\u0002\u0002\u0002hi\u0007",
    "?\u0002\u0002i\u001c\u0003\u0002\u0002\u0002jk\u0007.\u0002\u0002k\u001e",
    "\u0003\u0002\u0002\u0002lm\u0007}\u0002\u0002m \u0003\u0002\u0002\u0002",
    "no\u0007\u007f\u0002\u0002o\"\u0003\u0002\u0002\u0002pz\t\u0003\u0002",
    "\u0002qr\u0007@\u0002\u0002rz\u0007?\u0002\u0002st\u0007>\u0002\u0002",
    "tz\u0007?\u0002\u0002uv\u0007?\u0002\u0002vz\u0007?\u0002\u0002wx\u0007",
    "#\u0002\u0002xz\u0007?\u0002\u0002yp\u0003\u0002\u0002\u0002yq\u0003",
    "\u0002\u0002\u0002ys\u0003\u0002\u0002\u0002yu\u0003\u0002\u0002\u0002",
    "yw\u0003\u0002\u0002\u0002z$\u0003\u0002\u0002\u0002{\u007f\t\u0004",
    "\u0002\u0002|~\t\u0005\u0002\u0002}|\u0003\u0002\u0002\u0002~\u0081",
    "\u0003\u0002\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f\u0080",
    "\u0003\u0002\u0002\u0002\u0080&\u0003\u0002\u0002\u0002\u0081\u007f",
    "\u0003\u0002\u0002\u0002\u0082\u0084\t\u0006\u0002\u0002\u0083\u0082",
    "\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0083",
    "\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u008d",
    "\u0003\u0002\u0002\u0002\u0087\u0089\u00070\u0002\u0002\u0088\u008a",
    "\t\u0006\u0002\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u008a\u008b",
    "\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008c",
    "\u0003\u0002\u0002\u0002\u008c\u008e\u0003\u0002\u0002\u0002\u008d\u0087",
    "\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e(",
    "\u0003\u0002\u0002\u0002\u008f\u0090\t\u0007\u0002\u0002\u0090\u0091",
    "\u0003\u0002\u0002\u0002\u0091\u0092\b\u0015\u0002\u0002\u0092*\u0003",
    "\u0002\u0002\u0002\t\u0002y}\u007f\u0085\u008b\u008d\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class HrlangLexer extends antlr4.Lexer {

    static grammarFileName = "Hrlang.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'programa'", "'fimprog;'", "'numero'", "'texto'", 
                         "'leia'", "'escreva'", "'se'", "'senao'", "'('", 
                         "')'", "';'", null, "'='", "','", "'{'", "'}'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, "AP", "FP", "SC", "OP", "ATTR", "VIR", "ACH", 
                          "FCH", "OPREL", "ID", "NUMBER", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "AP", "FP", "SC", "OP", "ATTR", "VIR", "ACH", 
                      "FCH", "OPREL", "ID", "NUMBER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());

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

    get atn() {
        return atn;
    }
}

HrlangLexer.EOF = antlr4.Token.EOF;
HrlangLexer.T__0 = 1;
HrlangLexer.T__1 = 2;
HrlangLexer.T__2 = 3;
HrlangLexer.T__3 = 4;
HrlangLexer.T__4 = 5;
HrlangLexer.T__5 = 6;
HrlangLexer.T__6 = 7;
HrlangLexer.T__7 = 8;
HrlangLexer.AP = 9;
HrlangLexer.FP = 10;
HrlangLexer.SC = 11;
HrlangLexer.OP = 12;
HrlangLexer.ATTR = 13;
HrlangLexer.VIR = 14;
HrlangLexer.ACH = 15;
HrlangLexer.FCH = 16;
HrlangLexer.OPREL = 17;
HrlangLexer.ID = 18;
HrlangLexer.NUMBER = 19;
HrlangLexer.WS = 20;



