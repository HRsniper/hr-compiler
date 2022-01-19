// Generated from src/Hrlang.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';


import { Symbol } from "../../datastructs/symbol.js";
import { Variable } from "../../datastructs/variable.js";
import { SymbolTable } from "../../datastructs/symbolTable.js";
import { SemanticException } from "../../exception/exception.js";



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0014\u0086\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010m\n\u0010\u0003\u0011\u0003\u0011\u0007\u0011q\n\u0011\f",
    "\u0011\u000e\u0011t\u000b\u0011\u0003\u0012\u0006\u0012w\n\u0012\r\u0012",
    "\u000e\u0012x\u0003\u0012\u0003\u0012\u0006\u0012}\n\u0012\r\u0012\u000e",
    "\u0012~\u0005\u0012\u0081\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0002\u0002\u0014\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019",
    "\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\u0003",
    "\u0002\b\u0005\u0002,-//11\u0004\u0002>>@@\u0003\u0002c|\u0005\u0002",
    "2;C\\c|\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002\u008d",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002",
    "\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002",
    "\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002",
    "\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002",
    "\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002",
    "\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0003",
    "\'\u0003\u0002\u0002\u0002\u00050\u0003\u0002\u0002\u0002\u00079\u0003",
    "\u0002\u0002\u0002\t@\u0003\u0002\u0002\u0002\u000bF\u0003\u0002\u0002",
    "\u0002\rK\u0003\u0002\u0002\u0002\u000fS\u0003\u0002\u0002\u0002\u0011",
    "U\u0003\u0002\u0002\u0002\u0013W\u0003\u0002\u0002\u0002\u0015Y\u0003",
    "\u0002\u0002\u0002\u0017[\u0003\u0002\u0002\u0002\u0019]\u0003\u0002",
    "\u0002\u0002\u001b_\u0003\u0002\u0002\u0002\u001da\u0003\u0002\u0002",
    "\u0002\u001fl\u0003\u0002\u0002\u0002!n\u0003\u0002\u0002\u0002#v\u0003",
    "\u0002\u0002\u0002%\u0082\u0003\u0002\u0002\u0002\'(\u0007r\u0002\u0002",
    "()\u0007t\u0002\u0002)*\u0007q\u0002\u0002*+\u0007i\u0002\u0002+,\u0007",
    "t\u0002\u0002,-\u0007c\u0002\u0002-.\u0007o\u0002\u0002./\u0007c\u0002",
    "\u0002/\u0004\u0003\u0002\u0002\u000201\u0007h\u0002\u000212\u0007k",
    "\u0002\u000223\u0007o\u0002\u000234\u0007r\u0002\u000245\u0007t\u0002",
    "\u000256\u0007q\u0002\u000267\u0007i\u0002\u000278\u0007=\u0002\u0002",
    "8\u0006\u0003\u0002\u0002\u00029:\u0007p\u0002\u0002:;\u0007w\u0002",
    "\u0002;<\u0007o\u0002\u0002<=\u0007g\u0002\u0002=>\u0007t\u0002\u0002",
    ">?\u0007q\u0002\u0002?\b\u0003\u0002\u0002\u0002@A\u0007v\u0002\u0002",
    "AB\u0007g\u0002\u0002BC\u0007z\u0002\u0002CD\u0007v\u0002\u0002DE\u0007",
    "q\u0002\u0002E\n\u0003\u0002\u0002\u0002FG\u0007n\u0002\u0002GH\u0007",
    "g\u0002\u0002HI\u0007k\u0002\u0002IJ\u0007c\u0002\u0002J\f\u0003\u0002",
    "\u0002\u0002KL\u0007g\u0002\u0002LM\u0007u\u0002\u0002MN\u0007e\u0002",
    "\u0002NO\u0007t\u0002\u0002OP\u0007g\u0002\u0002PQ\u0007x\u0002\u0002",
    "QR\u0007c\u0002\u0002R\u000e\u0003\u0002\u0002\u0002ST\u0007*\u0002",
    "\u0002T\u0010\u0003\u0002\u0002\u0002UV\u0007+\u0002\u0002V\u0012\u0003",
    "\u0002\u0002\u0002WX\u0007=\u0002\u0002X\u0014\u0003\u0002\u0002\u0002",
    "YZ\t\u0002\u0002\u0002Z\u0016\u0003\u0002\u0002\u0002[\\\u0007?\u0002",
    "\u0002\\\u0018\u0003\u0002\u0002\u0002]^\u0007.\u0002\u0002^\u001a\u0003",
    "\u0002\u0002\u0002_`\u0007}\u0002\u0002`\u001c\u0003\u0002\u0002\u0002",
    "ab\u0007\u007f\u0002\u0002b\u001e\u0003\u0002\u0002\u0002cm\t\u0003",
    "\u0002\u0002de\u0007@\u0002\u0002em\u0007?\u0002\u0002fg\u0007>\u0002",
    "\u0002gm\u0007?\u0002\u0002hi\u0007?\u0002\u0002im\u0007?\u0002\u0002",
    "jk\u0007#\u0002\u0002km\u0007?\u0002\u0002lc\u0003\u0002\u0002\u0002",
    "ld\u0003\u0002\u0002\u0002lf\u0003\u0002\u0002\u0002lh\u0003\u0002\u0002",
    "\u0002lj\u0003\u0002\u0002\u0002m \u0003\u0002\u0002\u0002nr\t\u0004",
    "\u0002\u0002oq\t\u0005\u0002\u0002po\u0003\u0002\u0002\u0002qt\u0003",
    "\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002",
    "s\"\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002uw\t\u0006\u0002",
    "\u0002vu\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002xv\u0003\u0002",
    "\u0002\u0002xy\u0003\u0002\u0002\u0002y\u0080\u0003\u0002\u0002\u0002",
    "z|\u00070\u0002\u0002{}\t\u0006\u0002\u0002|{\u0003\u0002\u0002\u0002",
    "}~\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002~\u007f\u0003\u0002",
    "\u0002\u0002\u007f\u0081\u0003\u0002\u0002\u0002\u0080z\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081$\u0003\u0002",
    "\u0002\u0002\u0082\u0083\t\u0007\u0002\u0002\u0083\u0084\u0003\u0002",
    "\u0002\u0002\u0084\u0085\b\u0013\u0002\u0002\u0085&\u0003\u0002\u0002",
    "\u0002\t\u0002lprx~\u0080\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class HrlangLexer extends antlr4.Lexer {

    static grammarFileName = "Hrlang.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'programa'", "'fimprog;'", "'numero'", "'texto'", 
                         "'leia'", "'escreva'", "'('", "')'", "';'", null, 
                         "'='", "','", "'{'", "'}'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, "AP", 
                          "FP", "SC", "OP", "ATTR", "VIR", "ACH", "FCH", 
                          "OPREL", "ID", "NUMBER", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "AP", 
                      "FP", "SC", "OP", "ATTR", "VIR", "ACH", "FCH", "OPREL", 
                      "ID", "NUMBER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());

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
HrlangLexer.AP = 7;
HrlangLexer.FP = 8;
HrlangLexer.SC = 9;
HrlangLexer.OP = 10;
HrlangLexer.ATTR = 11;
HrlangLexer.VIR = 12;
HrlangLexer.ACH = 13;
HrlangLexer.FCH = 14;
HrlangLexer.OPREL = 15;
HrlangLexer.ID = 16;
HrlangLexer.NUMBER = 17;
HrlangLexer.WS = 18;



