// Generated from src/Hrlang.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import HrlangListener from './HrlangListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0012<\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0006\u0003\u0018\n\u0003\r\u0003\u000e\u0003\u0019\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u001f\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0007\b5\n\b\f\b\u000e\b8\u000b\b\u0003\t\u0003\t\u0003\t\u0002\u0002",
    "\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0003\u0003\u0002\u0010",
    "\u0011\u00027\u0002\u0012\u0003\u0002\u0002\u0002\u0004\u0017\u0003",
    "\u0002\u0002\u0002\u0006\u001e\u0003\u0002\u0002\u0002\b \u0003\u0002",
    "\u0002\u0002\n&\u0003\u0002\u0002\u0002\f,\u0003\u0002\u0002\u0002\u000e",
    "1\u0003\u0002\u0002\u0002\u00109\u0003\u0002\u0002\u0002\u0012\u0013",
    "\u0007\u0003\u0002\u0002\u0013\u0014\u0005\u0004\u0003\u0002\u0014\u0015",
    "\u0007\u0004\u0002\u0002\u0015\u0003\u0003\u0002\u0002\u0002\u0016\u0018",
    "\u0005\u0006\u0004\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u0019",
    "\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a",
    "\u0003\u0002\u0002\u0002\u001a\u0005\u0003\u0002\u0002\u0002\u001b\u001f",
    "\u0005\b\u0005\u0002\u001c\u001f\u0005\n\u0006\u0002\u001d\u001f\u0005",
    "\f\u0007\u0002\u001e\u001b\u0003\u0002\u0002\u0002\u001e\u001c\u0003",
    "\u0002\u0002\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f\u0007\u0003",
    "\u0002\u0002\u0002 !\u0007\u0005\u0002\u0002!\"\u0007\u0007\u0002\u0002",
    "\"#\u0007\u0010\u0002\u0002#$\u0007\b\u0002\u0002$%\u0007\t\u0002\u0002",
    "%\t\u0003\u0002\u0002\u0002&\'\u0007\u0006\u0002\u0002\'(\u0007\u0007",
    "\u0002\u0002()\u0007\u0010\u0002\u0002)*\u0007\b\u0002\u0002*+\u0007",
    "\t\u0002\u0002+\u000b\u0003\u0002\u0002\u0002,-\u0007\u0010\u0002\u0002",
    "-.\u0007\u000b\u0002\u0002./\u0005\u000e\b\u0002/0\u0007\t\u0002\u0002",
    "0\r\u0003\u0002\u0002\u000216\u0005\u0010\t\u000223\u0007\n\u0002\u0002",
    "35\u0005\u0010\t\u000242\u0003\u0002\u0002\u000258\u0003\u0002\u0002",
    "\u000264\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u00027\u000f\u0003",
    "\u0002\u0002\u000286\u0003\u0002\u0002\u00029:\t\u0002\u0002\u0002:",
    "\u0011\u0003\u0002\u0002\u0002\u0005\u0019\u001e6"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class HrlangParser extends antlr4.Parser {

    static grammarFileName = "Hrlang.g4";
    static literalNames = [ null, "'programa'", "'fimprog;'", "'leia'", 
                            "'escreva'", "'('", "')'", "';'", null, "'='", 
                            "','", "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, "AP", "FP", "SC", 
                             "OP", "ATTR", "VIR", "ACH", "FCH", "OPREL", 
                             "ID", "NUMBER", "WS" ];
    static ruleNames = [ "prog", "bloco", "cmd", "cmdleitura", "cmdescrita", 
                         "cmdattrib", "expr", "termo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = HrlangParser.ruleNames;
        this.literalNames = HrlangParser.literalNames;
        this.symbolicNames = HrlangParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, HrlangParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(HrlangParser.T__0);
	        this.state = 17;
	        this.bloco();
	        this.state = 18;
	        this.match(HrlangParser.T__1);
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
	    this.enterRule(localctx, 2, HrlangParser.RULE_bloco);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.cmd();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HrlangParser.T__2) | (1 << HrlangParser.T__3) | (1 << HrlangParser.ID))) !== 0));
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
	    this.enterRule(localctx, 4, HrlangParser.RULE_cmd);
	    try {
	        this.state = 28;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case HrlangParser.T__2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.cmdleitura();
	            break;
	        case HrlangParser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.cmdescrita();
	            break;
	        case HrlangParser.ID:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 27;
	            this.cmdattrib();
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
	    this.enterRule(localctx, 6, HrlangParser.RULE_cmdleitura);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(HrlangParser.T__2);
	        this.state = 31;
	        this.match(HrlangParser.AP);
	        this.state = 32;
	        this.match(HrlangParser.ID);
	        this.state = 33;
	        this.match(HrlangParser.FP);
	        this.state = 34;
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
	    this.enterRule(localctx, 8, HrlangParser.RULE_cmdescrita);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(HrlangParser.T__3);
	        this.state = 37;
	        this.match(HrlangParser.AP);
	        this.state = 38;
	        this.match(HrlangParser.ID);
	        this.state = 39;
	        this.match(HrlangParser.FP);
	        this.state = 40;
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
	    this.enterRule(localctx, 10, HrlangParser.RULE_cmdattrib);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(HrlangParser.ID);
	        this.state = 43;
	        this.match(HrlangParser.ATTR);
	        this.state = 44;
	        this.expr();
	        this.state = 45;
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, HrlangParser.RULE_expr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.termo();
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===HrlangParser.OP) {
	            this.state = 48;
	            this.match(HrlangParser.OP);
	            this.state = 49;
	            this.termo();
	            this.state = 54;
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
	    this.enterRule(localctx, 14, HrlangParser.RULE_termo);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        _la = this._input.LA(1);
	        if(!(_la===HrlangParser.ID || _la===HrlangParser.NUMBER)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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
HrlangParser.AP = 5;
HrlangParser.FP = 6;
HrlangParser.SC = 7;
HrlangParser.OP = 8;
HrlangParser.ATTR = 9;
HrlangParser.VIR = 10;
HrlangParser.ACH = 11;
HrlangParser.FCH = 12;
HrlangParser.OPREL = 13;
HrlangParser.ID = 14;
HrlangParser.NUMBER = 15;
HrlangParser.WS = 16;

HrlangParser.RULE_prog = 0;
HrlangParser.RULE_bloco = 1;
HrlangParser.RULE_cmd = 2;
HrlangParser.RULE_cmdleitura = 3;
HrlangParser.RULE_cmdescrita = 4;
HrlangParser.RULE_cmdattrib = 5;
HrlangParser.RULE_expr = 6;
HrlangParser.RULE_termo = 7;

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
HrlangParser.BlocoContext = BlocoContext; 
HrlangParser.CmdContext = CmdContext; 
HrlangParser.CmdleituraContext = CmdleituraContext; 
HrlangParser.CmdescritaContext = CmdescritaContext; 
HrlangParser.CmdattribContext = CmdattribContext; 
HrlangParser.ExprContext = ExprContext; 
HrlangParser.TermoContext = TermoContext; 
