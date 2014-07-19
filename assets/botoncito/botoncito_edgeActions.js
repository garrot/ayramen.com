
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",89,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",489,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_botonO}","mouseover",function(sym,e){sym.play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Precargador'
(function(symbolName){})("Precargador");
//Edge symbol end:'Precargador'

//=========================================================

//Edge symbol: 'botoncito'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){this.play(0);});
//Edge binding end
})("botoncito");
//Edge symbol end:'botoncito'

//=========================================================

//Edge symbol: 'circulo'
(function(symbolName){})("circulo");
//Edge symbol end:'circulo'

//=========================================================

//Edge symbol: 'botoncito_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){this.play(0);});
//Edge binding end
})("botoncito_1");
//Edge symbol end:'botoncito_1'
})(jQuery,AdobeEdge,"EDGE-17626953");