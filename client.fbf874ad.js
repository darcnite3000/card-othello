webpackJsonp([1],[,,function(e,t,r){"use strict";function a(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[],a=e;a<=t;a++)r.push(a);return r}r.d(t,"d",function(){return o}),r.d(t,"a",function(){return s}),r.d(t,"c",function(){return u}),r.d(t,"b",function(){return d}),r.d(t,"f",function(){return h}),r.d(t,"e",function(){return v});var n=r(24),i=r(25),c=r(26),l=r(27),o=[c.a,i.a,n.a,l.a],s={14:"A",10:"T",11:"J",12:"Q",13:"K"},u=2,d=14,h=a(u,d),v=a(0,o.length-1)},,,function(e,t,r){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.max,n=void 0===a?o.b:a,i=r.min,c=void 0===i?0:i;if(e){var l=e+t;return l<c?c:l>n?n:l}return e}function n(e){return o.a[e]||e}r.d(t,"a",function(){return u});var i=r(0),c=r.n(i),l=r(23),o=(r.n(l),r(2)),s=[0,0,0,0,0,0,0,0],u=function(e){var t=e.player,r=void 0===t?0:t,i=e.value,l=void 0===i?1:i,u=e.pips,d=void 0===u?s:u,h=e.suit,v=void 0===h?0:h,f=e.status,p=void 0===f?0:f,m=e.style,y=o.d[v];return c.a.createElement("div",{className:"card card-player-"+r+" card-suit-"+v+" card-value-"+l+" card-status-"+(p<0?"weak":p>0?"strong":"normal"),style:m},c.a.createElement("div",{className:"value"},c.a.createElement(y,{value:n(l)})),c.a.createElement("div",{className:"pips"},d.map(function(e,t){return e=a(e,p),c.a.createElement("div",{key:t,className:"pip"},e?n(e):null)})))}},function(e,t,r){r(7),e.exports=r(10)},,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),n=r.n(a),i=r(12),c=(r.n(i),r(22));Object(i.render)(n.a.createElement(c.a,null),document.getElementById("app"))},,,,,,,,,,,,function(e,t,r){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function n(){for(var e=new s.a(0).shuffle(),t=new s.a(1).shuffle(),r=new s.a(0,e.cards),n=new s.a(1,t.cards),u=Object(s.b)(0),h=Object.assign({},u,{pips:[].concat(a(u.pips)).reverse()}),v=Object(o.b)(),f=[],p=0;p<2;p++)f.push(r.dealHand(7)),f.push(n.dealHand(7));return v[0][0].locked=!0,v[0][1].suit=0,v[2][2].card=f[0][0],v[1][2].card=f[1][0],console.log(v),c.a.createElement(i.Fragment,null,c.a.createElement("h1",null,"Card Othello"),c.a.createElement("a",{href:"https://github.com/darcnite3000/card-othello"},"Source on GitHub"),c.a.createElement("p",null,"Cards have values from 2 - 14 with their attack pips being all adding up to the value"),c.a.createElement("h2",null,"Proof that reversing pip array allows for comparison"),c.a.createElement("h4",null,"Random Card"),c.a.createElement("code",null,c.a.createElement("pre",null,JSON.stringify(u.pips))),c.a.createElement("h4",null,"Random Card Reversed Pips"),c.a.createElement("code",null,c.a.createElement("pre",null,JSON.stringify(h.pips))),c.a.createElement("div",{className:"card-list",style:{display:"flex"}},c.a.createElement(l.a,d({},u,{style:{margin:"5px"}})),c.a.createElement(l.a,d({},h,{style:{margin:"5px"}}))),c.a.createElement("h2",null,"Hand Deal Examples"),c.a.createElement("h3",null,"Decks Before Deal"),c.a.createElement("h4",null,"Player 1 Deck"),c.a.createElement("div",{className:"card-list",style:{display:"flex",flexWrap:"wrap"}},e.cards.map(function(e){return c.a.createElement(l.a,d({key:e.id},e,{style:{margin:"5px"}}))})),c.a.createElement("h4",null,"Player 2 Deck"),c.a.createElement("div",{className:"card-list",style:{display:"flex",flexWrap:"wrap"}},t.cards.map(function(e){return c.a.createElement(l.a,d({key:e.id},e,{style:{margin:"5px"}}))})),c.a.createElement("h3",null,"Hands"),f.map(function(e,t){return c.a.createElement("div",{key:t,className:"card-list",style:{display:"flex"}},e.map(function(e){return c.a.createElement(l.a,d({key:e.id},e,{style:{margin:"5px"}}))}))}),c.a.createElement("h3",null,"Decks After Deal"),c.a.createElement("h4",null,"Player 1 Deck"),c.a.createElement("div",{className:"card-list",style:{display:"flex",flexWrap:"wrap"}},r.cards.map(function(e){return c.a.createElement(l.a,d({key:e.id},e,{style:{margin:"5px"}}))})),c.a.createElement("h4",null,"Player 2 Deck + sorted"),c.a.createElement("div",{className:"card-list",style:{display:"flex",flexWrap:"wrap"}},n.sort().cards.map(function(e){return c.a.createElement(l.a,d({key:e.id},e,{style:{margin:"5px"}}))})),c.a.createElement("h2",null,"Board Tests"),c.a.createElement(o.a,{grid:v}))}var i=r(0),c=r.n(i),l=r(5),o=r(28),s=r(31),u=r(32),d=(r.n(u),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e});t.a=n},function(e,t){},function(e,t,r){"use strict";function a(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}var n=r(0),i=r.n(n),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=function(e){var t=e.value,r=e.width,n=void 0===r?30:r,l=e.height,o=void 0===l?30:l,s=e.stroke,u=void 0===s?"red":s,d=e.text,h=void 0===d?"white":d,v=e.strokeWidth,f=void 0===v?"2":v,p=a(e,["value","width","height","stroke","text","strokeWidth"]);return i.a.createElement("svg",c({width:n,height:o,viewBox:"0 0 40 40",fill:u,stroke:u,strokeWidth:f},p),i.a.createElement("path",{d:"m14.51917,34.13318c-9.81414,-8.69721 -13.32308,-14.1989 -13.35152,-20.93398c-0.02593,-6.13984 4.30568,-12.0657 8.79463,-12.03152c2.24158,0.0171 7.04992,2.2769 8.75257,4.11355c0.85789,0.92541 1.26424,0.83416 3.17425,-0.71286c5.19824,-4.21033 10.27438,-4.2987 13.56191,-0.23609c5.25417,6.49291 4.29759,14.24662 -2.74984,22.28932c-3.74682,4.27597 -11.92906,11.86177 -12.79439,11.86177c-0.26331,0 -2.68773,-1.95759 -5.3876,-4.35018l0,0z"}),void 0!=t?i.a.createElement("text",{stroke:"none",style:{fontSize:19},fill:h,textAnchor:"middle",x:"20",y:"28"},t):null)};t.a=l},function(e,t,r){"use strict";function a(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}var n=r(0),i=r.n(n),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=function(e){var t=e.value,r=e.width,n=void 0===r?30:r,l=e.height,o=void 0===l?30:l,s=e.stroke,u=void 0===s?"black":s,d=e.text,h=void 0===d?"white":d,v=e.strokeWidth,f=void 0===v?"2":v,p=a(e,["value","width","height","stroke","text","strokeWidth"]);return i.a.createElement("svg",c({width:n,height:o,viewBox:"0 0 40 40",fill:u,stroke:u,strokeWidth:f},p),i.a.createElement("path",{d:"m14.17807,36.06469c2.05863,-2.00279 3.80574,-4.38821 4.54368,-7.09658c-2.20681,1.56312 -4.23079,4.0773 -7.30919,3.98205c-2.324,0.12427 -5.0924,0.12637 -6.72831,-1.6845c-3.65578,-2.73886 -4.63783,-8.21297 -1.63586,-11.69855c2.05431,-2.51673 5.64158,-3.58389 8.93366,-3.20641c2.07427,-0.81999 -0.4057,-2.89627 -0.6551,-4.19208c-1.54381,-4.70042 2.09314,-10.33849 7.44099,-10.87996c3.83578,-0.51305 7.58557,1.80038 9.46248,4.80272c1.01997,2.10079 0.48853,4.48505 0.25056,6.66447c-0.80135,1.09524 -2.85369,3.74492 0.07508,3.53622c2.89571,-0.0427 5.95362,0.74933 7.86308,2.89469c2.79293,2.88937 3.04912,7.66407 0.23915,10.61647c-1.48639,1.79829 -3.71685,3.23756 -6.24133,3.15743c-2.47088,0.2324 -5.14647,-0.26701 -6.8986,-2.02105c-0.74729,-0.48786 -2.57839,-2.33112 -2.57776,-1.92689c1.83024,3.55239 3.89983,7.2415 7.56114,9.44282c1.30815,0.97996 -1.99252,0.30623 -2.79156,0.50596c-4.84123,0.00399 -9.68245,0.00805 -14.52368,0.01206c0.99719,-0.96963 1.99444,-1.93922 2.99158,-2.90886l0,0z"}),void 0!=t?i.a.createElement("text",{stroke:"none",style:{fontSize:19},fill:h,textAnchor:"middle",x:"20",y:"28"},t):null)};t.a=l},function(e,t,r){"use strict";function a(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}var n=r(0),i=r.n(n),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=function(e){var t=e.value,r=e.width,n=void 0===r?30:r,l=e.height,o=void 0===l?30:l,s=e.stroke,u=void 0===s?"red":s,d=e.text,h=void 0===d?"white":d,v=e.strokeWidth,f=void 0===v?"2":v,p=a(e,["value","width","height","stroke","text","strokeWidth"]);return i.a.createElement("svg",c({width:n,height:o,viewBox:"0 0 40 40",fill:u,stroke:u,strokeWidth:f},p),i.a.createElement("path",{d:"m3.05481,20.76236c3.7795,-7.16059 10.59373,-13.27216 16.39076,-19.33748c6.74361,3.89234 12.56971,12.45541 17.63846,18.4194c-4.52098,6.89842 -11.02885,13.18099 -16.89158,19.36765c-6.32013,-5.66022 -11.72487,-12.12712 -17.13764,-18.44958l0,0z"}),void 0!=t?i.a.createElement("text",{stroke:"none",style:{fontSize:19},fill:h,textAnchor:"middle",x:"20",y:"28"},t):null)};t.a=l},function(e,t,r){"use strict";function a(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}var n=r(0),i=r.n(n),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=function(e){var t=e.value,r=e.width,n=void 0===r?30:r,l=e.height,o=void 0===l?30:l,s=e.stroke,u=void 0===s?"black":s,d=e.text,h=void 0===d?"white":d,v=e.strokeWidth,f=void 0===v?"2":v,p=a(e,["value","width","height","stroke","text","strokeWidth"]);return i.a.createElement("svg",c({width:n,height:o,viewBox:"0 0 40 40",fill:u,stroke:u,strokeWidth:f},p),i.a.createElement("path",{d:"m12.43559,37.98934c2.37477,-2.22792 4.1113,-5.04922 5.56636,-7.90789c0.88886,-1.14017 0.04733,-2.13765 -1.16335,-1.1708c-3.11143,2.01963 -7.34681,2.71222 -10.71559,0.86966c-3.80827,-1.91445 -5.52559,-6.46682 -4.66153,-10.43348c0.5472,-4.01986 3.55669,-7.17079 6.82429,-9.43419c3.75355,-2.6104 7.80692,-4.85132 11.23744,-7.87405c1.4324,0.02792 2.5104,2.21312 4.05197,2.79137c4.09328,2.96398 8.94419,5.14571 12.16753,9.10909c1.62849,2.25838 2.55663,5.03929 2.66025,7.78827c-0.49617,3.72781 -2.78261,7.65927 -6.72561,8.72087c-3.4086,1.00264 -6.91553,-0.26891 -9.88589,-1.88661c-0.36282,-0.0757 -1.69359,-1.09495 -1.16617,-0.30284c1.77577,3.54276 3.72143,7.06064 6.53923,9.93716c0.16562,0.36345 1.46455,1.22575 0.77326,1.21205c-5.78577,0 -11.57152,0 -17.35729,0c0.61835,-0.47287 1.23673,-0.94574 1.8551,-1.41861l0,0z"}),void 0!=t?i.a.createElement("text",{stroke:"none",style:{fontSize:19},fill:h,textAnchor:"middle",x:"20",y:"28"},t):null)};t.a=l},function(e,t,r){"use strict";function a(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{suit:-1,card:null,locked:!1},a=[],n=0;n<t;n++){for(var i=[],c=0;c<e;c++)i.push(Object.assign({},r));a.push(i)}return a}t.b=a,r.d(t,"a",function(){return s});var n=r(0),i=r.n(n),c=r(29),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=a(),s=function(e){var t=e.grid,r=void 0===t?o:t;return i.a.createElement("div",{className:"board"},r.map(function(e,t){return i.a.createElement("div",{key:t,style:{display:"flex"}},e.map(function(e,t){return i.a.createElement(c.a,l({key:t},e))}))}))}},function(e,t,r){"use strict";function a(e,t){return-1===e?0:e===t?1:-1}var n=r(0),i=r.n(n),c=r(5),l=r(2),o=r(30),s=(r.n(o),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}),u=function(){return i.a.createElement("div",{className:"cell-base-locked"})},d=function(){return i.a.createElement("div",{className:"cell-base-empty"})},h=function(e){var t=e.suit,r=void 0===t?-1:t,n=e.card,o=e.style,h=e.locked,v=void 0!==h&&h,f=v?u:-1===r?d:l.d[r];return i.a.createElement("div",{className:"cell"+(v?" cell-locked":"")+(-1!==r?" cell-suit-"+r:""),style:o},i.a.createElement("div",{className:"cell-base"},i.a.createElement(f,null)),i.a.createElement("div",{className:"cell-card"},n&&i.a.createElement(c.a,s({},n,{status:a(r,n.suit)}))))};t.a=h},function(e,t){},function(e,t,r){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return e=Math.ceil(e),t=Math.floor(t+1),Math.floor(Math.random()*(t-e))+e}function c(e){for(var t=e<=4?i(Math.floor(e/2)+1,e):i(2,6),r=e,a=[0,0,0,0,0,0,0,0],n=0;n<t;n++){var c=t-n-1,l=r-c,o=c?i(1,l):l;r-=o;for(var s=i(0,7);0!==a[s];)s=i(0,7);a[s]=o}return a}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.value,a=void 0===r?i(o.c,o.b):r,n=t.suit,l=void 0===n?i(0,o.e.length):n;return(a<o.c||a>o.b)&&(a=i(o.c,o.b)),(l<0||l>o.e.length)&&(l=i(0,o.e.length)),{player:e,suit:l,value:a,pips:c(a)}}t.b=l,r.d(t,"a",function(){return u});var o=r(2),s=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),u=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];n(this,e),this._cleanCard=function(e){return Object.assign({},e,{player:t.player})},this.player=r,this._buildDeck(a),this._discard=[]}return s(e,[{key:"_buildDeck",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this._deck=t.length?t.map(this._cleanCard):o.e.reduce(function(t,r){return[].concat(a(t),a(o.f.map(function(t){return{id:r+"-"+t,value:t,suit:r,player:e.player,pips:c(t)}})))}),this}},{key:"sort",value:function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.restoreDiscard(),this._deck.sort(function(e,t){return e.suit<t.suit?-1:e.suit>t.suit?1:e.suit-t.suit||e.value-t.value}),this}},{key:"shuffle",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.restoreDiscard();for(var e,t,r=this._deck.length;0!==r;)t=Math.floor(Math.random()*r),r-=1,e=this._deck[r],this._deck[r]=this._deck[t],this._deck[t]=e;return this}},{key:"returnCards",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i(0,this._deck.length-1);this._deck=[].concat(a(this._deck.slice(0,t)),a(e.map(this._cleanCard)),a(this._deck.slice(t)))}},{key:"restoreDiscard",value:function(){return this._deck=[].concat(a(this._deck),a(this._discard)),this}},{key:"discardCards",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this._discard=[].concat(a(e.map(this._cleanCard)),a(this._discard))}},{key:"dealHand",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[];return this._deck.length<=e?(t=this._deck,this._deck=[],t):(t=this._deck.slice(0,e),this._deck=this._deck.slice(e),t)}},{key:"cards",get:function(){return[].concat(a(this._deck))}},{key:"discardPile",get:function(){return[].concat(a(this._discard))}}]),e}()},function(e,t){}],[6]);
//# sourceMappingURL=client.fbf874ad.js.map