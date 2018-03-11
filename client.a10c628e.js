webpackJsonp([1],[,,,,function(e,t,r){r(5),e.exports=r(8)},,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),n=r.n(a),i=r(10),c=(r.n(i),r(20));Object(i.render)(n.a.createElement(c.a,null),document.getElementById("app"))},,,,,,,,,,,,function(e,t,r){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function n(){for(var e=new o.a(0).shuffle(),t=new o.a(1).shuffle(),r=new o.a(0,e.cards),n=new o.a(1,t.cards),d=Object(o.b)(0),u=Object.assign({},d,{pips:[].concat(a(d.pips)).reverse()}),h=[],v=0;v<2;v++)h.push(r.dealHand(7)),h.push(n.dealHand(7));return c.a.createElement(i.Fragment,null,c.a.createElement("h1",null,"Card Othello"),c.a.createElement("p",null,"Cards have values from 2 - 14 with their attack pips being all adding up to the value"),c.a.createElement("h2",null,"Proof that reversing pip array allows for comparison"),c.a.createElement("h4",null,"Random Card"),c.a.createElement("code",null,c.a.createElement("pre",null,JSON.stringify(d.pips))),c.a.createElement("h4",null,"Random Card Reversed Pips"),c.a.createElement("code",null,c.a.createElement("pre",null,JSON.stringify(u.pips))),c.a.createElement("div",{className:"card-list",style:{display:"flex"}},c.a.createElement(l.a,s({},d,{style:{margin:"5px"}})),c.a.createElement(l.a,s({},u,{style:{margin:"5px"}}))),c.a.createElement("h2",null,"Hand Deal Examples"),c.a.createElement("h3",null,"Decks Before Deal"),c.a.createElement("h4",null,"Player 1 Deck"),c.a.createElement("div",{className:"card-list",style:{display:"flex",flexWrap:"wrap"}},e.cards.map(function(e){return c.a.createElement(l.a,s({key:e.id},e,{style:{margin:"5px"}}))})),c.a.createElement("h4",null,"Player 2 Deck"),c.a.createElement("div",{className:"card-list",style:{display:"flex",flexWrap:"wrap"}},t.cards.map(function(e){return c.a.createElement(l.a,s({key:e.id},e,{style:{margin:"5px"}}))})),c.a.createElement("h3",null,"Hands"),h.map(function(e,t){return c.a.createElement("div",{key:t,className:"card-list",style:{display:"flex"}},e.map(function(e){return c.a.createElement(l.a,s({key:e.id},e,{style:{margin:"5px"}}))}))}),c.a.createElement("h3",null,"Decks After Deal"),c.a.createElement("h4",null,"Player 1 Deck"),c.a.createElement("div",{className:"card-list",style:{display:"flex",flexWrap:"wrap"}},r.cards.map(function(e){return c.a.createElement(l.a,s({key:e.id},e,{style:{margin:"5px"}}))})),c.a.createElement("h4",null,"Player 2 Deck + sorted"),c.a.createElement("div",{className:"card-list",style:{display:"flex",flexWrap:"wrap"}},n.sort().cards.map(function(e){return c.a.createElement(l.a,s({key:e.id},e,{style:{margin:"5px"}}))})))}var i=r(0),c=r.n(i),l=r(21),o=r(27),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.a=n},function(e,t,r){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.max,n=void 0===a?14:a,i=r.min,c=void 0===i?0:i;if(e){var l=e+t;return l<c?c:l>n?n:l}return e}function n(e){return v[e]||e}var i=r(0),c=r.n(i),l=r(22),o=(r.n(l),r(23)),s=r(24),d=r(25),u=r(26),h=[d.a,s.a,o.a,u.a],v={14:"A",10:"T",11:"J",12:"Q",13:"K"},f=[0,0,0,0,0,0,0,0],p=function(e){var t=e.player,r=void 0===t?0:t,i=e.value,l=void 0===i?1:i,o=e.pips,s=void 0===o?f:o,d=e.suit,u=void 0===d?0:d,v=e.status,p=void 0===v?0:v,m=e.style,y=h[u];return c.a.createElement("div",{className:"card card-player-"+r+" card-suit-"+u+" card-value-"+l+" card-status-"+(p<0?"weak":p>0?"strong":"normal"),style:m},c.a.createElement("div",{className:"value"},c.a.createElement(y,{value:n(l)})),c.a.createElement("div",{className:"pips"},s.map(function(e,t){return e=a(e,p),c.a.createElement("div",{key:t,className:"pip"},e?n(e):null)})))};t.a=p},function(e,t){},function(e,t,r){"use strict";function a(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}var n=r(0),i=r.n(n),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=function(e){var t=e.value,r=void 0===t?0:t,n=e.width,l=void 0===n?30:n,o=e.height,s=void 0===o?30:o,d=e.stroke,u=void 0===d?"red":d,h=e.text,v=void 0===h?"white":h,f=e.strokeWidth,p=void 0===f?"2":f,m=a(e,["value","width","height","stroke","text","strokeWidth"]);return i.a.createElement("svg",c({width:l,height:s,viewBox:"0 0 40 40",fill:u,stroke:u,strokeWidth:p},m),i.a.createElement("path",{d:"m14.51917,34.13318c-9.81414,-8.69721 -13.32308,-14.1989 -13.35152,-20.93398c-0.02593,-6.13984 4.30568,-12.0657 8.79463,-12.03152c2.24158,0.0171 7.04992,2.2769 8.75257,4.11355c0.85789,0.92541 1.26424,0.83416 3.17425,-0.71286c5.19824,-4.21033 10.27438,-4.2987 13.56191,-0.23609c5.25417,6.49291 4.29759,14.24662 -2.74984,22.28932c-3.74682,4.27597 -11.92906,11.86177 -12.79439,11.86177c-0.26331,0 -2.68773,-1.95759 -5.3876,-4.35018l0,0z"}),i.a.createElement("text",{stroke:"none",style:{fontSize:19},fill:v,textAnchor:"middle",x:"20",y:"28"},r))};t.a=l},function(e,t,r){"use strict";function a(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}var n=r(0),i=r.n(n),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=function(e){var t=e.value,r=void 0===t?0:t,n=e.width,l=void 0===n?30:n,o=e.height,s=void 0===o?30:o,d=e.stroke,u=void 0===d?"black":d,h=e.text,v=void 0===h?"white":h,f=e.strokeWidth,p=void 0===f?"2":f,m=a(e,["value","width","height","stroke","text","strokeWidth"]);return i.a.createElement("svg",c({width:l,height:s,viewBox:"0 0 40 40",fill:u,stroke:u,strokeWidth:p},m),i.a.createElement("path",{d:"m14.17807,36.06469c2.05863,-2.00279 3.80574,-4.38821 4.54368,-7.09658c-2.20681,1.56312 -4.23079,4.0773 -7.30919,3.98205c-2.324,0.12427 -5.0924,0.12637 -6.72831,-1.6845c-3.65578,-2.73886 -4.63783,-8.21297 -1.63586,-11.69855c2.05431,-2.51673 5.64158,-3.58389 8.93366,-3.20641c2.07427,-0.81999 -0.4057,-2.89627 -0.6551,-4.19208c-1.54381,-4.70042 2.09314,-10.33849 7.44099,-10.87996c3.83578,-0.51305 7.58557,1.80038 9.46248,4.80272c1.01997,2.10079 0.48853,4.48505 0.25056,6.66447c-0.80135,1.09524 -2.85369,3.74492 0.07508,3.53622c2.89571,-0.0427 5.95362,0.74933 7.86308,2.89469c2.79293,2.88937 3.04912,7.66407 0.23915,10.61647c-1.48639,1.79829 -3.71685,3.23756 -6.24133,3.15743c-2.47088,0.2324 -5.14647,-0.26701 -6.8986,-2.02105c-0.74729,-0.48786 -2.57839,-2.33112 -2.57776,-1.92689c1.83024,3.55239 3.89983,7.2415 7.56114,9.44282c1.30815,0.97996 -1.99252,0.30623 -2.79156,0.50596c-4.84123,0.00399 -9.68245,0.00805 -14.52368,0.01206c0.99719,-0.96963 1.99444,-1.93922 2.99158,-2.90886l0,0z"}),i.a.createElement("text",{stroke:"none",style:{fontSize:19},fill:v,textAnchor:"middle",x:"20",y:"28"},r))};t.a=l},function(e,t,r){"use strict";function a(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}var n=r(0),i=r.n(n),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=function(e){var t=e.value,r=void 0===t?0:t,n=e.width,l=void 0===n?30:n,o=e.height,s=void 0===o?30:o,d=e.stroke,u=void 0===d?"red":d,h=e.text,v=void 0===h?"white":h,f=e.strokeWidth,p=void 0===f?"2":f,m=a(e,["value","width","height","stroke","text","strokeWidth"]);return i.a.createElement("svg",c({width:l,height:s,viewBox:"0 0 40 40",fill:u,stroke:u,strokeWidth:p},m),i.a.createElement("path",{d:"m3.05481,20.76236c3.7795,-7.16059 10.59373,-13.27216 16.39076,-19.33748c6.74361,3.89234 12.56971,12.45541 17.63846,18.4194c-4.52098,6.89842 -11.02885,13.18099 -16.89158,19.36765c-6.32013,-5.66022 -11.72487,-12.12712 -17.13764,-18.44958l0,0z"}),i.a.createElement("text",{stroke:"none",style:{fontSize:19},fill:v,textAnchor:"middle",x:"20",y:"28"},r))};t.a=l},function(e,t,r){"use strict";function a(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}var n=r(0),i=r.n(n),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=function(e){var t=e.value,r=void 0===t?0:t,n=e.width,l=void 0===n?30:n,o=e.height,s=void 0===o?30:o,d=e.stroke,u=void 0===d?"black":d,h=e.text,v=void 0===h?"white":h,f=e.strokeWidth,p=void 0===f?"2":f,m=a(e,["value","width","height","stroke","text","strokeWidth"]);return i.a.createElement("svg",c({width:l,height:s,viewBox:"0 0 40 40",fill:u,stroke:u,strokeWidth:p},m),i.a.createElement("path",{d:"m12.43559,37.98934c2.37477,-2.22792 4.1113,-5.04922 5.56636,-7.90789c0.88886,-1.14017 0.04733,-2.13765 -1.16335,-1.1708c-3.11143,2.01963 -7.34681,2.71222 -10.71559,0.86966c-3.80827,-1.91445 -5.52559,-6.46682 -4.66153,-10.43348c0.5472,-4.01986 3.55669,-7.17079 6.82429,-9.43419c3.75355,-2.6104 7.80692,-4.85132 11.23744,-7.87405c1.4324,0.02792 2.5104,2.21312 4.05197,2.79137c4.09328,2.96398 8.94419,5.14571 12.16753,9.10909c1.62849,2.25838 2.55663,5.03929 2.66025,7.78827c-0.49617,3.72781 -2.78261,7.65927 -6.72561,8.72087c-3.4086,1.00264 -6.91553,-0.26891 -9.88589,-1.88661c-0.36282,-0.0757 -1.69359,-1.09495 -1.16617,-0.30284c1.77577,3.54276 3.72143,7.06064 6.53923,9.93716c0.16562,0.36345 1.46455,1.22575 0.77326,1.21205c-5.78577,0 -11.57152,0 -17.35729,0c0.61835,-0.47287 1.23673,-0.94574 1.8551,-1.41861l0,0z"}),i.a.createElement("text",{stroke:"none",style:{fontSize:19},fill:v,textAnchor:"middle",x:"20",y:"28"},r))};t.a=l},function(e,t,r){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return e=Math.ceil(e),t=Math.floor(t+1),Math.floor(Math.random()*(t-e))+e}function c(e){for(var t=e<=4?i(Math.floor(e/2)+1,e):i(2,6),r=e,a=[0,0,0,0,0,0,0,0],n=0;n<t;n++){var c=t-n-1,l=r-c,o=c?i(1,l):l;r-=o;for(var s=i(0,7);0!==a[s];)s=i(0,7);a[s]=o}return a}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.value,a=void 0===r?i(2,14):r,n=t.suit,l=void 0===n?i(0,3):n;return(a<2||a>14)&&(a=i(2,14)),(l<0||l>3)&&(l=i(0,3)),{player:e,suit:l,value:a,status:0,pips:c(a)}}t.b=l,r.d(t,"a",function(){return u});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=[2,3,4,5,6,7,8,9,10,11,12,13,14],d=[0,1,2,3],u=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];n(this,e),this._cleanCard=function(e){return Object.assign({},e,{status:0,player:t.player})},this.player=r,this._buildDeck(a),this._discard=[]}return o(e,[{key:"_buildDeck",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this._deck=t.length?t.map(this._cleanCard):d.reduce(function(t,r){return[].concat(a(t),a(s.map(function(t){return{id:r+"-"+t,value:t,suit:r,player:e.player,status:0,pips:c(t)}})))}),this}},{key:"sort",value:function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.restoreDiscard(),this._deck.sort(function(e,t){return e.suit<t.suit?-1:e.suit>t.suit?1:e.suit-t.suit||e.value-t.value}),this}},{key:"shuffle",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.restoreDiscard();for(var e,t,r=this._deck.length;0!==r;)t=Math.floor(Math.random()*r),r-=1,e=this._deck[r],this._deck[r]=this._deck[t],this._deck[t]=e;return this}},{key:"returnCards",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i(0,this._deck.length-1);this._deck=[].concat(a(this._deck.slice(0,t)),a(e.map(this._cleanCard)),a(this._deck.slice(t)))}},{key:"restoreDiscard",value:function(){return this._deck=[].concat(a(this._deck),a(this._discard)),this}},{key:"discardCards",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this._discard=[].concat(a(e.map(this._cleanCard)),a(this._discard))}},{key:"dealHand",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[];return this._deck.length<=e?(t=this._deck,this._deck=[],t):(t=this._deck.slice(0,e),this._deck=this._deck.slice(e),t)}},{key:"cards",get:function(){return[].concat(a(this._deck))}},{key:"discardPile",get:function(){return[].concat(a(this._discard))}}]),e}()}],[4]);
//# sourceMappingURL=client.a10c628e.js.map