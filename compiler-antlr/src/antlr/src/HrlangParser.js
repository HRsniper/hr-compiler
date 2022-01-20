// Generated from src/Hrlang.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import HrlangListener from './HrlangListener.js';

import { Symbol } from "../../datastructs/symbol.js";
import { Variable } from "../../datastructs/variable.js";
import { SymbolTable } from "../../datastructs/symbolTable.js";
import { SemanticException } from "../../exception/exception.js";
import { Program } from "../../ast/program.js";
import { AbstractCommand } from "../../ast/abstractCommand.js";
import { CommandLeitura } from "../../ast/commandLeitura.js";
import { CommandEscrita } from "../../ast/commandEscrita.js";


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0016\u007f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0006\u0003\"\n\u0003\r\u0003\u000e\u0003",
    "#\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0007\u0004,\n\u0004\f\u0004\u000e\u0004/\u000b\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "7\n\u0005\u0003\u0006\u0006\u0006:\n\u0006\r\u0006\u000e\u0006;\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007B\n\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0006\u000bb",
    "\n\u000b\r\u000b\u000e\u000bc\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0006\u000bj\n\u000b\r\u000b\u000e\u000bk\u0003\u000b\u0003\u000b",
    "\u0005\u000bp\n\u000b\u0003\f\u0003\f\u0003\f\u0007\fu\n\f\f\f\u000e",
    "\fx\u000b\f\u0003\r\u0003\r\u0003\r\u0005\r}\n\r\u0003\r\u0002\u0002",
    "\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002",
    "\u0003\u0003\u0002\u0014\u0015\u0002~\u0002\u001a\u0003\u0002\u0002",
    "\u0002\u0004!\u0003\u0002\u0002\u0002\u0006%\u0003\u0002\u0002\u0002",
    "\b6\u0003\u0002\u0002\u0002\n9\u0003\u0002\u0002\u0002\fA\u0003\u0002",
    "\u0002\u0002\u000eC\u0003\u0002\u0002\u0002\u0010K\u0003\u0002\u0002",
    "\u0002\u0012S\u0003\u0002\u0002\u0002\u0014Y\u0003\u0002\u0002\u0002",
    "\u0016q\u0003\u0002\u0002\u0002\u0018|\u0003\u0002\u0002\u0002\u001a",
    "\u001b\u0007\u0003\u0002\u0002\u001b\u001c\u0005\u0004\u0003\u0002\u001c",
    "\u001d\u0005\n\u0006\u0002\u001d\u001e\u0007\u0004\u0002\u0002\u001e",
    "\u001f\b\u0002\u0001\u0002\u001f\u0003\u0003\u0002\u0002\u0002 \"\u0005",
    "\u0006\u0004\u0002! \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002",
    "#!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$\u0005\u0003\u0002",
    "\u0002\u0002%&\u0005\b\u0005\u0002&\'\u0007\u0014\u0002\u0002\'-\b\u0004",
    "\u0001\u0002()\u0007\u0010\u0002\u0002)*\u0007\u0014\u0002\u0002*,\b",
    "\u0004\u0001\u0002+(\u0003\u0002\u0002\u0002,/\u0003\u0002\u0002\u0002",
    "-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.0\u0003\u0002\u0002",
    "\u0002/-\u0003\u0002\u0002\u000201\u0007\r\u0002\u00021\u0007\u0003",
    "\u0002\u0002\u000223\u0007\u0005\u0002\u000237\b\u0005\u0001\u00024",
    "5\u0007\u0006\u0002\u000257\b\u0005\u0001\u000262\u0003\u0002\u0002",
    "\u000264\u0003\u0002\u0002\u00027\t\u0003\u0002\u0002\u00028:\u0005",
    "\f\u0007\u000298\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;",
    "9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<\u000b\u0003\u0002",
    "\u0002\u0002=B\u0005\u000e\b\u0002>B\u0005\u0010\t\u0002?B\u0005\u0012",
    "\n\u0002@B\u0005\u0014\u000b\u0002A=\u0003\u0002\u0002\u0002A>\u0003",
    "\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002A@\u0003\u0002\u0002\u0002",
    "B\r\u0003\u0002\u0002\u0002CD\u0007\u0007\u0002\u0002DE\u0007\u000b",
    "\u0002\u0002EF\u0007\u0014\u0002\u0002FG\b\b\u0001\u0002GH\u0007\f\u0002",
    "\u0002HI\b\b\u0001\u0002IJ\u0007\r\u0002\u0002J\u000f\u0003\u0002\u0002",
    "\u0002KL\u0007\b\u0002\u0002LM\u0007\u000b\u0002\u0002MN\u0007\u0014",
    "\u0002\u0002NO\b\t\u0001\u0002OP\u0007\f\u0002\u0002PQ\b\t\u0001\u0002",
    "QR\u0007\r\u0002\u0002R\u0011\u0003\u0002\u0002\u0002ST\u0007\u0014",
    "\u0002\u0002TU\b\n\u0001\u0002UV\u0007\u000f\u0002\u0002VW\u0005\u0016",
    "\f\u0002WX\u0007\r\u0002\u0002X\u0013\u0003\u0002\u0002\u0002YZ\u0007",
    "\t\u0002\u0002Z[\u0007\u000b\u0002\u0002[\\\u0007\u0014\u0002\u0002",
    "\\]\u0007\u0013\u0002\u0002]^\t\u0002\u0002\u0002^_\u0007\f\u0002\u0002",
    "_a\u0007\u0011\u0002\u0002`b\u0005\f\u0007\u0002a`\u0003\u0002\u0002",
    "\u0002bc\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002",
    "\u0002\u0002de\u0003\u0002\u0002\u0002eo\u0007\u0012\u0002\u0002fg\u0007",
    "\n\u0002\u0002gi\u0007\u0011\u0002\u0002hj\u0005\f\u0007\u0002ih\u0003",
    "\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002",
    "kl\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0007\u0012\u0002",
    "\u0002np\u0003\u0002\u0002\u0002of\u0003\u0002\u0002\u0002op\u0003\u0002",
    "\u0002\u0002p\u0015\u0003\u0002\u0002\u0002qv\u0005\u0018\r\u0002rs",
    "\u0007\u000e\u0002\u0002su\u0005\u0018\r\u0002tr\u0003\u0002\u0002\u0002",
    "ux\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002",
    "\u0002w\u0017\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002yz\u0007",
    "\u0014\u0002\u0002z}\b\r\u0001\u0002{}\u0007\u0015\u0002\u0002|y\u0003",
    "\u0002\u0002\u0002|{\u0003\u0002\u0002\u0002}\u0019\u0003\u0002\u0002",
    "\u0002\f#-6;Ackov|"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class HrlangParser extends antlr4.Parser {

    static grammarFileName = "Hrlang.g4";
    static literalNames = [ null, "'programa'", "'fimprog;'", "'numero'", 
                            "'texto'", "'leia'", "'escreva'", "'se'", "'senao'", 
                            "'('", "')'", "';'", null, "'='", "','", "'{'", 
                            "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "AP", "FP", "SC", "OP", "ATTR", "VIR", 
                             "ACH", "FCH", "OPREL", "ID", "NUMBER", "WS" ];
    static ruleNames = [ "prog", "decl", "declaravar", "tipo", "bloco", 
                         "cmd", "cmdleitura", "cmdescrita", "cmdattrib", 
                         "cmdselecao", "expr", "termo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = HrlangParser.ruleNames;
        this.literalNames = HrlangParser.literalNames;
        this.symbolicNames = HrlangParser.symbolicNames;

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



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, HrlangParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(HrlangParser.T__0);
	        this.state = 25;
	        this.decl();
	        this.state = 26;
	        this.bloco();
	        this.state = 27;
	        this.match(HrlangParser.T__1);

	                 this.program.setComandos(this.curThread);
	               
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decl() {
	    let localctx = new DeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, HrlangParser.RULE_decl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.declaravar();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===HrlangParser.T__2 || _la===HrlangParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaravar() {
	    let localctx = new DeclaravarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, HrlangParser.RULE_declaravar);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.tipo();
	        this.state = 36;
	        this.match(HrlangParser.ID);

	                               this._varName = this._input.LT(-1).text;
	                               this._varValue = null;
	                               this.symbol = new Variable(this._varName, this._tipo, this._varValue);
	                               if(!this.symbolTable.exists(this._varName)){
	                                 this.symbolTable.add(this.symbol);
	                               }else{
	                                 throw new SemanticException("Variable " + this._varName + " already declared");
	                               }
	                             
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===HrlangParser.VIR) {
	            this.state = 38;
	            this.match(HrlangParser.VIR);
	            this.state = 39;
	            this.match(HrlangParser.ID);

	                                   this._varName = this._input.LT(-1).text;
	                                   this._varValue = null;
	                                   this.symbol = new Variable(this._varName, this._tipo, this._varValue);
	                                   if(!this.symbolTable.exists(this._varName)){
	                                     this.symbolTable.add(this.symbol);
	                                   }else{
	                                     throw new SemanticException("Variable " + this._varName + " already declared");
	                                   }
	                                 
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 46;
	        this.match(HrlangParser.SC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, HrlangParser.RULE_tipo);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case HrlangParser.T__2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.match(HrlangParser.T__2);
	             this._tipo = Variable.NUMBER; 
	            break;
	        case HrlangParser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.match(HrlangParser.T__3);
	             this._tipo = Variable.TEXT; 
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloco() {
	    let localctx = new BlocoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, HrlangParser.RULE_bloco);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 54;
	            this.cmd();
	            this.state = 57; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HrlangParser.T__4) | (1 << HrlangParser.T__5) | (1 << HrlangParser.T__6) | (1 << HrlangParser.ID))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cmd() {
	    let localctx = new CmdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, HrlangParser.RULE_cmd);
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case HrlangParser.T__4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 59;
	            this.cmdleitura();
	            break;
	        case HrlangParser.T__5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.cmdescrita();
	            break;
	        case HrlangParser.ID:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 61;
	            this.cmdattrib();
	            break;
	        case HrlangParser.T__6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 62;
	            this.cmdselecao();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cmdleitura() {
	    let localctx = new CmdleituraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, HrlangParser.RULE_cmdleitura);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(HrlangParser.T__4);
	        this.state = 66;
	        this.match(HrlangParser.AP);
	        this.state = 67;
	        this.match(HrlangParser.ID);
	         this.verificaID(this._input.LT(-1).text);
	                                 this._readID = this._input.LT(-1).text;
	                               
	        this.state = 69;
	        this.match(HrlangParser.FP);

	                                let cmd = new CommandLeitura(this._readID);
	                                this.curThread.push(cmd);
	                              
	        this.state = 71;
	        this.match(HrlangParser.SC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cmdescrita() {
	    let localctx = new CmdescritaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, HrlangParser.RULE_cmdescrita);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(HrlangParser.T__5);
	        this.state = 74;
	        this.match(HrlangParser.AP);
	        this.state = 75;
	        this.match(HrlangParser.ID);
	         this.verificaID(this._input.LT(-1).text);
	                                   this._writeID = this._input.LT(-1).text;
	                                 
	        this.state = 77;
	        this.match(HrlangParser.FP);

	                                  let cmd = new CommandEscrita(this._writeID);
	                                  this.curThread.push(cmd);
	                                
	        this.state = 79;
	        this.match(HrlangParser.SC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cmdattrib() {
	    let localctx = new CmdattribContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, HrlangParser.RULE_cmdattrib);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(HrlangParser.ID);
	         this.verificaID(this._input.LT(-1).text); 
	        this.state = 83;
	        this.match(HrlangParser.ATTR);
	        this.state = 84;
	        this.expr();
	        this.state = 85;
	        this.match(HrlangParser.SC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cmdselecao() {
	    let localctx = new CmdselecaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, HrlangParser.RULE_cmdselecao);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(HrlangParser.T__6);
	        this.state = 88;
	        this.match(HrlangParser.AP);
	        this.state = 89;
	        this.match(HrlangParser.ID);
	        this.state = 90;
	        this.match(HrlangParser.OPREL);
	        this.state = 91;
	        _la = this._input.LA(1);
	        if(!(_la===HrlangParser.ID || _la===HrlangParser.NUMBER)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 92;
	        this.match(HrlangParser.FP);
	        this.state = 93;
	        this.match(HrlangParser.ACH);
	        this.state = 95; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 94;
	            this.cmd();
	            this.state = 97; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HrlangParser.T__4) | (1 << HrlangParser.T__5) | (1 << HrlangParser.T__6) | (1 << HrlangParser.ID))) !== 0));
	        this.state = 99;
	        this.match(HrlangParser.FCH);
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HrlangParser.T__7) {
	            this.state = 100;
	            this.match(HrlangParser.T__7);
	            this.state = 101;
	            this.match(HrlangParser.ACH);
	            this.state = 103; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 102;
	                this.cmd();
	                this.state = 105; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HrlangParser.T__4) | (1 << HrlangParser.T__5) | (1 << HrlangParser.T__6) | (1 << HrlangParser.ID))) !== 0));
	            this.state = 107;
	            this.match(HrlangParser.FCH);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, HrlangParser.RULE_expr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.termo();
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===HrlangParser.OP) {
	            this.state = 112;
	            this.match(HrlangParser.OP);
	            this.state = 113;
	            this.termo();
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termo() {
	    let localctx = new TermoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, HrlangParser.RULE_termo);
	    try {
	        this.state = 122;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case HrlangParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 119;
	            this.match(HrlangParser.ID);
	             this.verificaID(this._input.LT(-1).text); 
	            break;
	        case HrlangParser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 121;
	            this.match(HrlangParser.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

HrlangParser.EOF = antlr4.Token.EOF;
HrlangParser.T__0 = 1;
HrlangParser.T__1 = 2;
HrlangParser.T__2 = 3;
HrlangParser.T__3 = 4;
HrlangParser.T__4 = 5;
HrlangParser.T__5 = 6;
HrlangParser.T__6 = 7;
HrlangParser.T__7 = 8;
HrlangParser.AP = 9;
HrlangParser.FP = 10;
HrlangParser.SC = 11;
HrlangParser.OP = 12;
HrlangParser.ATTR = 13;
HrlangParser.VIR = 14;
HrlangParser.ACH = 15;
HrlangParser.FCH = 16;
HrlangParser.OPREL = 17;
HrlangParser.ID = 18;
HrlangParser.NUMBER = 19;
HrlangParser.WS = 20;

HrlangParser.RULE_prog = 0;
HrlangParser.RULE_decl = 1;
HrlangParser.RULE_declaravar = 2;
HrlangParser.RULE_tipo = 3;
HrlangParser.RULE_bloco = 4;
HrlangParser.RULE_cmd = 5;
HrlangParser.RULE_cmdleitura = 6;
HrlangParser.RULE_cmdescrita = 7;
HrlangParser.RULE_cmdattrib = 8;
HrlangParser.RULE_cmdselecao = 9;
HrlangParser.RULE_expr = 10;
HrlangParser.RULE_termo = 11;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HrlangParser.RULE_prog;
    }

	decl() {
	    return this.getTypedRuleContext(DeclContext,0);
	};

	bloco() {
	    return this.getTypedRuleContext(BlocoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.exitProg(this);
		}
	}


}



class DeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HrlangParser.RULE_decl;
    }

	declaravar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaravarContext);
	    } else {
	        return this.getTypedRuleContext(DeclaravarContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.enterDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.exitDecl(this);
		}
	}


}



class DeclaravarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HrlangParser.RULE_declaravar;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HrlangParser.ID);
	    } else {
	        return this.getToken(HrlangParser.ID, i);
	    }
	};


	SC() {
	    return this.getToken(HrlangParser.SC, 0);
	};

	VIR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HrlangParser.VIR);
	    } else {
	        return this.getToken(HrlangParser.VIR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.enterDeclaravar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.exitDeclaravar(this);
		}
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HrlangParser.RULE_tipo;
    }


	enterRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.exitTipo(this);
		}
	}


}



class BlocoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HrlangParser.RULE_bloco;
    }

	cmd = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CmdContext);
	    } else {
	        return this.getTypedRuleContext(CmdContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.enterBloco(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.exitBloco(this);
		}
	}


}



class CmdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HrlangParser.RULE_cmd;
    }

	cmdleitura() {
	    return this.getTypedRuleContext(CmdleituraContext,0);
	};

	cmdescrita() {
	    return this.getTypedRuleContext(CmdescritaContext,0);
	};

	cmdattrib() {
	    return this.getTypedRuleContext(CmdattribContext,0);
	};

	cmdselecao() {
	    return this.getTypedRuleContext(CmdselecaoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.enterCmd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.exitCmd(this);
		}
	}


}



class CmdleituraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HrlangParser.RULE_cmdleitura;
    }

	AP() {
	    return this.getToken(HrlangParser.AP, 0);
	};

	ID() {
	    return this.getToken(HrlangParser.ID, 0);
	};

	FP() {
	    return this.getToken(HrlangParser.FP, 0);
	};

	SC() {
	    return this.getToken(HrlangParser.SC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.enterCmdleitura(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.exitCmdleitura(this);
		}
	}


}



class CmdescritaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HrlangParser.RULE_cmdescrita;
    }

	AP() {
	    return this.getToken(HrlangParser.AP, 0);
	};

	ID() {
	    return this.getToken(HrlangParser.ID, 0);
	};

	FP() {
	    return this.getToken(HrlangParser.FP, 0);
	};

	SC() {
	    return this.getToken(HrlangParser.SC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.enterCmdescrita(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.exitCmdescrita(this);
		}
	}


}



class CmdattribContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HrlangParser.RULE_cmdattrib;
    }

	ID() {
	    return this.getToken(HrlangParser.ID, 0);
	};

	ATTR() {
	    return this.getToken(HrlangParser.ATTR, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SC() {
	    return this.getToken(HrlangParser.SC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.enterCmdattrib(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.exitCmdattrib(this);
		}
	}


}



class CmdselecaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HrlangParser.RULE_cmdselecao;
    }

	AP() {
	    return this.getToken(HrlangParser.AP, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HrlangParser.ID);
	    } else {
	        return this.getToken(HrlangParser.ID, i);
	    }
	};


	OPREL() {
	    return this.getToken(HrlangParser.OPREL, 0);
	};

	FP() {
	    return this.getToken(HrlangParser.FP, 0);
	};

	ACH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HrlangParser.ACH);
	    } else {
	        return this.getToken(HrlangParser.ACH, i);
	    }
	};


	FCH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HrlangParser.FCH);
	    } else {
	        return this.getToken(HrlangParser.FCH, i);
	    }
	};


	NUMBER() {
	    return this.getToken(HrlangParser.NUMBER, 0);
	};

	cmd = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CmdContext);
	    } else {
	        return this.getTypedRuleContext(CmdContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.enterCmdselecao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.exitCmdselecao(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HrlangParser.RULE_expr;
    }

	termo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermoContext);
	    } else {
	        return this.getTypedRuleContext(TermoContext,i);
	    }
	};

	OP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HrlangParser.OP);
	    } else {
	        return this.getToken(HrlangParser.OP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.exitExpr(this);
		}
	}


}



class TermoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HrlangParser.RULE_termo;
    }

	ID() {
	    return this.getToken(HrlangParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(HrlangParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.enterTermo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HrlangListener ) {
	        listener.exitTermo(this);
		}
	}


}




HrlangParser.ProgContext = ProgContext; 
HrlangParser.DeclContext = DeclContext; 
HrlangParser.DeclaravarContext = DeclaravarContext; 
HrlangParser.TipoContext = TipoContext; 
HrlangParser.BlocoContext = BlocoContext; 
HrlangParser.CmdContext = CmdContext; 
HrlangParser.CmdleituraContext = CmdleituraContext; 
HrlangParser.CmdescritaContext = CmdescritaContext; 
HrlangParser.CmdattribContext = CmdattribContext; 
HrlangParser.CmdselecaoContext = CmdselecaoContext; 
HrlangParser.ExprContext = ExprContext; 
HrlangParser.TermoContext = TermoContext; 
