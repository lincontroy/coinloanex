(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7426],{88286:function(e,n,t){e.exports=function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n){e.exports=t(67294)},function(e,n){e.exports=t(45697)},function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),r=t(1),s=t.n(r);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var p=function(e){function n(){var e,t,o,i;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return o=this,i=(e=a(n)).call.apply(e,[this].concat(s)),t=!i||"object"!==c(i)&&"function"!=typeof i?u(o):i,_(u(t),"onRef",(function(e){!t.node&&e&&(t.node=e)})),_(u(t),"handleEsc",(function(e){var n=e.keyCode,o=t.props,i=o.visible,r=o.onClose;27===n&&i&&r()})),_(u(t),"handleClickOutside",(function(e){var n=t.props,o=n.visible,i=n.onClose;if(!t.node||!t.node.contains(e.target)){if("touchend"===e.type&&(t.isTouch=!0),"click"===e.type&&t.isTouch)return;o&&setTimeout((function(){o&&i()}))}})),t}var t,r;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,o.Component),t=n,(r=[{key:"componentDidMount",value:function(){window.document.addEventListener("click",this.handleClickOutside,!0),window.document.addEventListener("keydown",this.handleEsc,!0)}},{key:"componentWillUnmount",value:function(){window.document.removeEventListener("click",this.handleClickOutside,!0),window.document.addEventListener("keydown",this.handleEsc,!0),this.node&&(this.node=null)}},{key:"render",value:function(){var e=this,n=this.props,t=n.visible,o=n.children;return t?i.a.Children.map(o,(function(n){return i.a.cloneElement(n,{ref:function(n){e.node=n}})})):null}}])&&l(t.prototype,r),n}();p.propTypes={children:s.a.node.isRequired,onClose:s.a.func.isRequired,visible:s.a.bool.isRequired},n.default=p}])},30697:function(e,n,t){"use strict";t.d(n,{X:function(){return p}});var o=t(85893),i=t(67294),r=t(60529),s=t(62328),c=t(51352),l=t.n(c),a=t(2741),u=t.n(a),d=t(34672),_=t.n(d),p=function(e){var n=e.list,t=e.selected,c=e.onChoose,a=e.showBalance,d=void 0!==a&&a,p=e.isStableFirst,y=void 0!==p&&p,h=e.listFullWidth,f=void 0!==h&&h,m=function(e){return function(){return c(e)}},b=(0,i.useState)([]),v=b[0],g=b[1],x=(0,i.useState)([]),w=x[0],N=x[1],j=(0,i.useState)(""),I=j[0],C=j[1];return(0,i.useEffect)((function(){var e=[],i=[],c=!0,l=!1,a=void 0;try{for(var p,y=n[Symbol.iterator]();!(c=(p=y.next()).done);c=!0){var h=p.value,f=h.code;if(h.name.toLowerCase().includes(I)||f.toLowerCase().includes(I)){var b=h.code===(null===t||void 0===t?void 0:t.code)&&h.network===(null===t||void 0===t?void 0:t.network),v=(0,o.jsxs)("div",{className:_().coinsListItem,onClick:m(h),children:[(0,o.jsx)("img",{alt:h.code,width:20,height:20,src:h.logo_url}),(0,o.jsx)("div",{className:_().ticker,children:(0,r.xG)(h,!0)}),(0,o.jsx)(s.u,{currency:h}),(0,o.jsx)("div",{className:_().coinName,children:d&&(null===h||void 0===h?void 0:h.balance)&&h.balance>0?h.balance:h.name}),b&&(0,o.jsx)("img",{src:u(),alt:"CheckedCoin",className:_().checkIcon})]},"".concat(f,"-").concat(h.network));h.is_stable?i.push(v):e.push(v)}}}catch(x){l=!0,a=x}finally{try{c||null==y.return||y.return()}finally{if(l)throw a}}g(e),N(i)}),[I,n]),(0,o.jsxs)("div",{className:_().coinsList,style:{maxWidth:f?"unset":"310px"},children:[(0,o.jsxs)("div",{className:_().search,children:[(0,o.jsx)("img",{src:l(),className:_().searchIcon,alt:"IconInputArrow",width:16,height:16}),(0,o.jsx)("input",{autoFocus:!0,onInput:function(e){C(e.target.value.toLowerCase())},className:_().searchInput,type:"text",placeholder:"Search Crypto"})]}),(0,o.jsxs)("div",{className:_().coinsListScrollbar,children:[y&&w.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:_().searchGroup,children:"Stablecoins"}),w]}),v.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:_().searchGroup,children:"Crypto Assets"}),v]}),!y&&w.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:_().searchGroup,children:"Stablecoins"}),w]})]})]})}},17426:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var o=t(14924),i=t(85893),r=t(67294),s=t(94184),c=t.n(s),l=t(24759),a=t.n(l),u=t(90366),d=t.n(u),_=t(3119),p=t.n(_),y=t(88286),h=t.n(y),f=t(91715),m=t(60529),b=t(48969),v=t(62328),g=t(30697),x=t(28192),w=t.n(x);function N(e){var n=e.onChangeAmount,t=e.onChangeCoin,s=e.value,l=e.label,u=e.coin,_=e.list,y=void 0===_?[]:_,x=e.children,N=e.isLoading,j=e.onEnter,I=e.isStableFirst,C=void 0!==I&&I,L=e.className,M=void 0===L?null:L,k=e.labelClassName,S=void 0===k?null:k,O=e.inputClassName,A=void 0===O?null:O,E=e.inputWrapperClassName,Z=void 0===E?null:E,D=e.bigCurBlock,F=void 0!==D&&D,B=e.showBalance,P=e.listFullWidth,G=void 0!==P&&P,z=function(){R(!1)},T=(0,r.useState)(!1),U=T[0],R=T[1],W=l.replace(" ","_").toLowerCase();return(0,i.jsxs)("div",{className:c()(w().changeCoinFrom,M),children:[(0,i.jsx)("label",{className:c()(w().name,S),htmlFor:W,children:l}),(0,i.jsxs)("div",{className:c()(w().inputBox,Z,(0,o.Z)({},w().inputBoxOpened,U),(0,o.Z)({},w().inputErrorValue,!1)),children:[(0,i.jsx)(b.Z,{className:c()(w().inputField,A,(0,o.Z)({},w().inputFieldOpened,U)),onEnter:j,value:N?"":s,onChange:function(e){var t;(null===(t=String(e.target.value).split(".")[1])||void 0===t?void 0:t.length)>u.decimal_places||(0,f.Z)(e.target.value,n)},id:W}),N&&(0,i.jsx)("img",{src:p(),className:w().loader,alt:"loading"}),x,(0,i.jsxs)("div",{className:w().openListButton,onClick:function(){return R((function(e){return!e}))},children:[u&&u.code&&(0,i.jsxs)("div",{className:c()(w().currency,(0,o.Z)({},w().currency_bigMode,F)),children:[(0,i.jsx)("img",{className:c()(w().currencyIcon,(0,o.Z)({},w().currencyIcon_bigMode,F)),alt:u.code,src:u.logo_url,width:F?36:20,height:F?36:20}),(0,i.jsxs)("div",{className:c()(w().row,w().column),children:[(0,i.jsxs)("div",{className:w().row,children:[(0,i.jsx)("div",{children:(0,m.xG)(u,!0)}),(0,i.jsx)(v.u,{className:c()(w().currencyNetwork,(0,o.Z)({},w().currencyNetwork_bigMode,F)),currency:u})]}),(0,i.jsx)("div",{className:c()(w().balance,(0,o.Z)({},w().balance_bigMode,F)),children:B?(null===u||void 0===u?void 0:u.balance)&&u.balance>0?(0,m.Et)(u.balance):u.name:""})]})]}),y.length>0&&(0,i.jsx)("img",{src:F?d():a(),className:c()((0,o.Z)({},w().openedListArrow,U),(0,o.Z)({},w().iconArrow,F)),alt:"IconInputArrow",width:8,height:4})]}),U&&(0,i.jsx)(h(),{onClose:z,visible:U,children:(0,i.jsx)(g.X,{list:y,showBalance:B,selected:u,onChoose:function(e){t(e),z()},isStableFirst:C,listFullWidth:G})})]})]})}},34672:function(e){e.exports={coinsList:"styles_coinsList__DO0Xt",search:"styles_search___tUZc",searchIcon:"styles_searchIcon__oUaoN",searchInput:"styles_searchInput__Xv_w6",searchGroup:"styles_searchGroup__9tWfV",coinsListScrollbar:"styles_coinsListScrollbar__yWqBA",coinsListItem:"styles_coinsListItem__eRtdu",checkIcon:"styles_checkIcon__EgBUh",coinFullName:"styles_coinFullName__JjnkA",ticker:"styles_ticker__wkdHF",coinName:"styles_coinName__wwEEd"}},28192:function(e){e.exports={row:"styles_row__hmB2N",column:"styles_column__HjY8J",inputBox:"styles_inputBox__kaxWc",inputField:"styles_inputField__PSpqB",inputFieldOpened:"styles_inputFieldOpened__tIjSd",inputBoxOpened:"styles_inputBoxOpened__Rj5fg",changeCoinFrom:"styles_changeCoinFrom__mbkCl",coinsList:"styles_coinsList__Fkn62",name:"styles_name__wJiEN",openListButton:"styles_openListButton__E1lvr",currency:"styles_currency__xqQOd",currency_bigMode:"styles_currency_bigMode__lvswb",currencyIcon:"styles_currencyIcon__aU774",currencyIcon_bigMode:"styles_currencyIcon_bigMode__8Hc3p",currencyNetwork:"styles_currencyNetwork__rnKvA",currencyNetwork_bigMode:"styles_currencyNetwork_bigMode__NLeNU",balance:"styles_balance__FOOAN",balance_bigMode:"styles_balance_bigMode__p0lKf",iconArrow:"styles_iconArrow__iFLJx",openedListArrow:"styles_openedListArrow__7BJrz",inputErrorValue:"styles_inputErrorValue__tap8f",loader:"styles_loader__N5lN3",coin:"styles_coin__F8Mk3"}},2741:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUuNSA5LjQ3NSAyLjAyNSA2IC44NDIgNy4xNzUgNS41IDExLjgzM2wxMC0xMEwxNC4zMjUuNjU4IDUuNSA5LjQ3NVoiIGZpbGw9IiMxMTY4RjEiLz48L3N2Zz4="},24759:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zLjY0NiAzLjY0Ni44NTQuODU0QS41LjUgMCAwIDEgMS4yMDcgMGg1LjU4NmEuNS41IDAgMCAxIC4zNTMuODU0TDQuMzU0IDMuNjQ2YS41LjUgMCAwIDEtLjcwOCAwWiIgZmlsbD0iIzg5ODk4OSIvPjwvc3ZnPg=="},90366:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNiAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xIDFMOCA4TDE1IDEiIHN0cm9rZT0iIzExNjhGMSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPC9zdmc+Cg=="}}]);