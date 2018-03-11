webpackJsonp([1],[,,,,function(e,t,r){r(5),e.exports=r(8)},,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r.n(n),i=r(10),c=(r.n(i),r(20));Object(i.render)(a.a.createElement(c.a,null),document.getElementById("app"))},,,,,,,,,,,,function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(){for(var e=new l.a(0).shuffle(),t=new l.a(1).shuffle(),r=Object(l.b)(0),a=Object.assign({},r,{pips:[].concat(n(r.pips)).reverse()}),d=[],u=0;u<2;u++)d.push(e.dealHand(7)),d.push(t.dealHand(7));return c.a.createElement(i.Fragment,null,c.a.createElement("h1",null,"Card Othello"),c.a.createElement("p",null,"Cards have values from 2 - 14 with their attack pips being all adding up to the value"),c.a.createElement("h2",null,"Proof that reversing pip array allows for comparison"),c.a.createElement("h4",null,"Random Card"),c.a.createElement("code",null,c.a.createElement("pre",null,JSON.stringify(r.pips))),c.a.createElement("h4",null,"Random Card Reversed Pips"),c.a.createElement("code",null,c.a.createElement("pre",null,JSON.stringify(a.pips))),c.a.createElement("div",{className:"card-list",style:{display:"flex"}},c.a.createElement(o.a,s({},r,{style:{margin:"5px"}})),c.a.createElement(o.a,s({},a,{style:{margin:"5px"}}))),c.a.createElement("h2",null,"Hand Deal Examples"),d.map(function(e,t){return c.a.createElement("div",{key:t,className:"card-list",style:{display:"flex"}},e.map(function(e){return c.a.createElement(o.a,s({key:e.id},e,{style:{margin:"5px"}}))}))}))}var i=r(0),c=r.n(i),o=r(21),l=r(27),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.a=a},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.max,a=void 0===n?14:n,i=r.min,c=void 0===i?0:i;if(e){var o=e+t;return o<c?c:o>a?a:o}return e}function a(e){return v[e]||e}var i=r(0),c=r.n(i),o=r(22),l=(r.n(o),r(23)),s=r(24),d=r(25),u=r(26),h=[d.a,s.a,l.a,u.a],v={14:"A",10:"T",11:"J",12:"Q",13:"K"},f=[0,0,0,0,0,0,0,0],p=function(e){var t=e.player,r=void 0===t?0:t,i=e.value,o=void 0===i?1:i,l=e.pips,s=void 0===l?f:l,d=e.suit,u=void 0===d?0:d,v=e.status,p=void 0===v?0:v,m=e.style,y=h[u];return c.a.createElement("div",{className:"card card-player-"+r+" card-suit-"+u+" card-value-"+o+" card-status-"+(p<0?"weak":p>0?"strong":"normal"),style:m},c.a.createElement("div",{className:"value"},c.a.createElement(y,{value:a(o)})),c.a.createElement("div",{className:"pips"},s.map(function(e,t){return e=n(e,p),c.a.createElement("div",{key:t,className:"pip"},e?a(e):null)})))};t.a=p},function(e,t){},function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var a=r(0),i=r.n(a),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(e){var t=e.value,r=void 0===t?0:t,a=e.width,o=void 0===a?30:a,l=e.height,s=void 0===l?30:l,d=e.stroke,u=void 0===d?"red":d,h=e.text,v=void 0===h?"white":h,f=e.strokeWidth,p=void 0===f?"2":f,m=n(e,["value","width","height","stroke","text","strokeWidth"]);return i.a.createElement("svg",c({width:o,height:s,viewBox:"0 0 40 40",fill:u,stroke:u,strokeWidth:p},m),i.a.createElement("path",{d:"m14.51917,34.13318c-9.81414,-8.69721 -13.32308,-14.1989 -13.35152,-20.93398c-0.02593,-6.13984 4.30568,-12.0657 8.79463,-12.03152c2.24158,0.0171 7.04992,2.2769 8.75257,4.11355c0.85789,0.92541 1.26424,0.83416 3.17425,-0.71286c5.19824,-4.21033 10.27438,-4.2987 13.56191,-0.23609c5.25417,6.49291 4.29759,14.24662 -2.74984,22.28932c-3.74682,4.27597 -11.92906,11.86177 -12.79439,11.86177c-0.26331,0 -2.68773,-1.95759 -5.3876,-4.35018l0,0z"}),i.a.createElement("text",{stroke:"none",style:{fontSize:19},fill:v,textAnchor:"middle",x:"20",y:"28"},r))};t.a=o},function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var a=r(0),i=r.n(a),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(e){var t=e.value,r=void 0===t?0:t,a=e.width,o=void 0===a?30:a,l=e.height,s=void 0===l?30:l,d=e.stroke,u=void 0===d?"black":d,h=e.text,v=void 0===h?"white":h,f=e.strokeWidth,p=void 0===f?"2":f,m=n(e,["value","width","height","stroke","text","strokeWidth"]);return i.a.createElement("svg",c({width:o,height:s,viewBox:"0 0 40 40",fill:u,stroke:u,strokeWidth:p},m),i.a.createElement("path",{d:"m14.17807,36.06469c2.05863,-2.00279 3.80574,-4.38821 4.54368,-7.09658c-2.20681,1.56312 -4.23079,4.0773 -7.30919,3.98205c-2.324,0.12427 -5.0924,0.12637 -6.72831,-1.6845c-3.65578,-2.73886 -4.63783,-8.21297 -1.63586,-11.69855c2.05431,-2.51673 5.64158,-3.58389 8.93366,-3.20641c2.07427,-0.81999 -0.4057,-2.89627 -0.6551,-4.19208c-1.54381,-4.70042 2.09314,-10.33849 7.44099,-10.87996c3.83578,-0.51305 7.58557,1.80038 9.46248,4.80272c1.01997,2.10079 0.48853,4.48505 0.25056,6.66447c-0.80135,1.09524 -2.85369,3.74492 0.07508,3.53622c2.89571,-0.0427 5.95362,0.74933 7.86308,2.89469c2.79293,2.88937 3.04912,7.66407 0.23915,10.61647c-1.48639,1.79829 -3.71685,3.23756 -6.24133,3.15743c-2.47088,0.2324 -5.14647,-0.26701 -6.8986,-2.02105c-0.74729,-0.48786 -2.57839,-2.33112 -2.57776,-1.92689c1.83024,3.55239 3.89983,7.2415 7.56114,9.44282c1.30815,0.97996 -1.99252,0.30623 -2.79156,0.50596c-4.84123,0.00399 -9.68245,0.00805 -14.52368,0.01206c0.99719,-0.96963 1.99444,-1.93922 2.99158,-2.90886l0,0z"}),i.a.createElement("text",{stroke:"none",style:{fontSize:19},fill:v,textAnchor:"middle",x:"20",y:"28"},r))};t.a=o},function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var a=r(0),i=r.n(a),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(e){var t=e.value,r=void 0===t?0:t,a=e.width,o=void 0===a?30:a,l=e.height,s=void 0===l?30:l,d=e.stroke,u=void 0===d?"red":d,h=e.text,v=void 0===h?"white":h,f=e.strokeWidth,p=void 0===f?"2":f,m=n(e,["value","width","height","stroke","text","strokeWidth"]);return i.a.createElement("svg",c({width:o,height:s,viewBox:"0 0 40 40",fill:u,stroke:u,strokeWidth:p},m),i.a.createElement("path",{d:"m3.05481,20.76236c3.7795,-7.16059 10.59373,-13.27216 16.39076,-19.33748c6.74361,3.89234 12.56971,12.45541 17.63846,18.4194c-4.52098,6.89842 -11.02885,13.18099 -16.89158,19.36765c-6.32013,-5.66022 -11.72487,-12.12712 -17.13764,-18.44958l0,0z"}),i.a.createElement("text",{stroke:"none",style:{fontSize:19},fill:v,textAnchor:"middle",x:"20",y:"28"},r))};t.a=o},function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var a=r(0),i=r.n(a),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(e){var t=e.value,r=void 0===t?0:t,a=e.width,o=void 0===a?30:a,l=e.height,s=void 0===l?30:l,d=e.stroke,u=void 0===d?"black":d,h=e.text,v=void 0===h?"white":h,f=e.strokeWidth,p=void 0===f?"2":f,m=n(e,["value","width","height","stroke","text","strokeWidth"]);return i.a.createElement("svg",c({width:o,height:s,viewBox:"0 0 40 40",fill:u,stroke:u,strokeWidth:p},m),i.a.createElement("path",{d:"m12.43559,37.98934c2.37477,-2.22792 4.1113,-5.04922 5.56636,-7.90789c0.88886,-1.14017 0.04733,-2.13765 -1.16335,-1.1708c-3.11143,2.01963 -7.34681,2.71222 -10.71559,0.86966c-3.80827,-1.91445 -5.52559,-6.46682 -4.66153,-10.43348c0.5472,-4.01986 3.55669,-7.17079 6.82429,-9.43419c3.75355,-2.6104 7.80692,-4.85132 11.23744,-7.87405c1.4324,0.02792 2.5104,2.21312 4.05197,2.79137c4.09328,2.96398 8.94419,5.14571 12.16753,9.10909c1.62849,2.25838 2.55663,5.03929 2.66025,7.78827c-0.49617,3.72781 -2.78261,7.65927 -6.72561,8.72087c-3.4086,1.00264 -6.91553,-0.26891 -9.88589,-1.88661c-0.36282,-0.0757 -1.69359,-1.09495 -1.16617,-0.30284c1.77577,3.54276 3.72143,7.06064 6.53923,9.93716c0.16562,0.36345 1.46455,1.22575 0.77326,1.21205c-5.78577,0 -11.57152,0 -17.35729,0c0.61835,-0.47287 1.23673,-0.94574 1.8551,-1.41861l0,0z"}),i.a.createElement("text",{stroke:"none",style:{fontSize:19},fill:v,textAnchor:"middle",x:"20",y:"28"},r))};t.a=o},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return e=Math.ceil(e),t=Math.floor(t+1),Math.floor(Math.random()*(t-e))+e}function c(e){for(var t=e<=4?i(Math.floor(e/2)+1,e):i(2,6),r=e,n=[0,0,0,0,0,0,0,0],a=0;a<t;a++){var c=t-a-1,o=r-c,l=c?i(1,o):o;r-=l;for(var s=i(0,7);0!==n[s];)s=i(0,7);n[s]=l}return n}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.value,n=void 0===r?i(2,14):r,a=t.suit,o=void 0===a?i(0,3):a;return(n<2||n>14)&&(n=i(2,14)),(o<0||o>3)&&(o=i(0,3)),{player:e,suit:o,value:n,status:0,pips:c(n)}}t.b=o,r.d(t,"a",function(){return u});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=[2,3,4,5,6,7,8,9,10,11,12,13,14],d=[0,1,2,3],u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];a(this,e),this.player=t,this._buildDeck(r),this._discard=[]}return l(e,[{key:"_cleanCard",value:function(e){return Object.assign({},e,{status:0,player:this.player})}},{key:"_buildDeck",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this._deck=t.length?t.map(this._cleanCard):d.reduce(function(t,r){return[].concat(n(t),n(s.map(function(t){return{id:r+"-"+t,value:t,suit:r,player:e.player,status:0,pips:c(t)}})))}),this}},{key:"sort",value:function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.restoreDiscard(),this._deck.sort(function(e,t){return e.suit<t.suit?-1:e.suit>t.suit?1:e.suit-t.suit||e.value-t.value}),this}},{key:"shuffle",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.restoreDiscard();for(var e,t,r=this._deck.length;0!==r;)t=Math.floor(Math.random()*r),r-=1,e=this._deck[r],this._deck[r]=this._deck[t],this._deck[t]=e;return this}},{key:"returnCards",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i(0,this._deck.length-1);this._deck=[].concat(n(this._deck.slice(0,t)),n(e.map(this._cleanCard)),n(this._deck.slice(t)))}},{key:"restoreDiscard",value:function(){return this._deck=[].concat(n(this._deck),n(this._discard)),this}},{key:"discardCards",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this._discard=[].concat(n(e.map(this._cleanCard)),n(this._discard))}},{key:"dealHand",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[];return this._deck.length<=e?(t=this._deck,this._deck=[],t):(t=this._deck.slice(0,e),this._deck=this._deck.slice(e),t)}},{key:"cards",get:function(){return[].concat(n(this._deck))}},{key:"discardPile",get:function(){return[].concat(n(this._discard))}}]),e}()}],[4]);
//# sourceMappingURL=client.397e669a.js.map