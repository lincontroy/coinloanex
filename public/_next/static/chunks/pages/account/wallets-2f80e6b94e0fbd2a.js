(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7874],{61567:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/wallets",function(){return t(54254)}])},49375:function(e,n,t){"use strict";t.d(n,{S:function(){return u}});var s=t(29815),l=t(85893),a=t(67294),i=t(94184),o=t.n(i),c=t(14200),r=t.n(c),u=function(e){var n=e.children,t=e.onClose,i=e.classNames,c=void 0===i?[]:i;return(0,a.useEffect)((function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow="auto"}}),[]),(0,l.jsx)("div",{className:r().background,onClick:t,children:(0,l.jsx)("div",{className:o().apply(void 0,[r().container].concat((0,s.Z)(c))),onClick:function(e){return e.stopPropagation()},children:n})})}},22013:function(e,n,t){"use strict";var s=t(85893),l=t(94184),a=t.n(l),i=t(37584),o=t.n(i);n.Z=function(e){var n=e.children,t=e.className;return(0,s.jsx)("h2",{className:a()(o().popup__heading,t),children:n})}},9262:function(e,n,t){"use strict";var s=t(85893),l=t(94184),a=t.n(l),i=t(35323),o=t.n(i);n.Z=function(e){var n=e.children,t=e.className;return(0,s.jsx)("p",{className:a()(o().popup__subtitle,t),children:n})}},87704:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var s=t(85893),l=t(49375),a=t(57563),i=t(53613),o=t(94184),c=t.n(o),r=t(47138),u=t.n(r),d=t(48871),M=t.n(d),_=t(9262),y=t(22013),j=t(94550),I=t.n(j);function N(e){var n=e.onClose,t=e.handleNextStep,o=e.moveBack,r=e.heading,d=e.subtitle,j=e.message,N=e.amount,g=e.buttonText,x=e.children,m=e.button,p=e.outcome,D=e.subtitleClassname,C=e.containerClassname;return(0,s.jsxs)(l.S,{onClose:n,classNames:[I().container,C],children:[(0,s.jsx)(y.Z,{children:r}),d&&(0,s.jsx)(_.Z,{className:c()(I().container__subtitle,D),children:d}),x,j&&N&&p&&(0,s.jsx)("div",{className:I().comment,children:p.map((function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{children:e.heading}),(0,s.jsx)(i.Z,{children:e.value})]})}))}),(0,s.jsxs)("div",{className:I().nav,children:[o&&(0,s.jsx)("span",{className:I().buttonText,onClick:o,children:"Back"}),m&&(0,s.jsxs)("button",{className:I().button,onClick:t,children:[(0,s.jsx)("img",{src:u(),alt:"wallet"}),(0,s.jsx)("span",{className:I().buttonText,children:g})]})]}),(0,s.jsx)("button",{className:I().btn,type:"button",onClick:n,children:(0,s.jsx)("img",{src:M(),alt:"close"})})]})}},86955:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var s=t(14924),l=t(26042),a=t(69396),i=t(99534),o=t(85893),c=t(94184),r=t.n(c),u=t(67294),d=t(25675),M=t.n(d),_=t(48610),y=t.n(_),j=t(59161),I=t.n(j),N=t(72713),g=t.n(N);function x(e){var n,t=e.className,c=void 0===t?"":t,d=e.disabled,_=void 0!==d&&d,j=e.isLoading,N=void 0!==j&&j,x=e.onClick,m=void 0===x?null:x,p=e.children,D=e.disableHover,C=void 0===D||D,T=e.isAccount,v=void 0!==T&&T,h=e.icon,A=void 0!==h&&h,k=(0,i.Z)(e,["className","disabled","isLoading","onClick","children","disableHover","isAccount","icon"]),z=(0,u.useCallback)((function(){N||_||null===m||void 0===m||m()}),[m]);return(0,o.jsxs)("button",(0,a.Z)((0,l.Z)({className:r()(v?g().accountBtn:g().button,(n={},(0,s.Z)(n,g().hover,!C&&!N),(0,s.Z)(n,g().disabled,_),(0,s.Z)(n,g().isLoading,N),(0,s.Z)(n,g().icon,A),n),c),type:"button",onClick:z,disabled:_},k),{children:[(0,o.jsxs)("div",{className:g().children,children:[v&&(0,o.jsx)(M(),{src:I(),alt:"Wallet",width:56,height:56}),p]}),N&&(0,o.jsx)("img",{src:y(),alt:"Loading",width:25,height:25})]}))}},57563:function(e,n,t){"use strict";var s=t(85893),l=t(94184),a=t.n(l),i=t(299),o=t(57267),c=t.n(o);n.Z=function(e){var n=e.children,t=e.subinfo,l=e.subInfoSmall,o=e.copyButton,r=e.hiddenCopyButton,u=void 0!==r&&r,d=e.isCopied,M=e.onClick,_=e.className;return(0,s.jsxs)("h2",{className:a()(c().heading,t&&c().headingTypeSubinfo,l&&c().headingTypeSubInfoSmall,o&&c().headingTypeCopy,_),onClick:M,children:[n,o&&(0,s.jsx)(i.Z,{isCopied:d,hiddenCopyButton:u})]})}},53613:function(e,n,t){"use strict";var s=t(85893),l=t(94184),a=t.n(l),i=t(299),o=t(68449),c=t.n(o);n.Z=function(e){var n=e.children,t=e.accent,l=e.subinfo,o=e.onClick,r=e.className,u=e.isCopied,d=e.hiddenCopyButton,M=e.copyButton,_=e.copyButtonClassName;return(0,s.jsxs)("h2",{className:a()(c().value,t&&c().valueTypeAccent,l&&c().valueTypeSubinfo,M&&c().copyButton,r),onClick:o,children:[n,M&&(0,s.jsx)(i.Z,{isCopied:u,hiddenCopyButton:d,className:_,messageClassName:c().message})]})}},94073:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var s=t(85893),l=t(94184),a=t.n(l),i=t(28518),o=t.n(i);function c(e){var n=e.className,t=void 0===n?void 0:n;return(0,s.jsx)("span",{className:a()(o().message,t),children:"Copied"})}},299:function(e,n,t){"use strict";var s=t(828),l=t(85893),a=t(94184),i=t.n(a),o=t(83650),c=t(94073),r=t(25675),u=t.n(r),d=t(88301),M=t.n(d),_=t(54233),y=t.n(_);n.Z=function(e){var n=e.hiddenCopyButton,t=void 0!==n&&n,a=e.isCopied,r=e.className,d=e.onClick,_=e.messageClassName,j="desktop"===(0,s.Z)((0,o.Z)(),1)[0],I=j?14:10,N=j?19:12;return a?(0,l.jsx)(c.Z,{className:i()(y().headingCopyMessage,r,_)}):!t&&(0,l.jsx)("div",{className:i()(y().headingIconWrapper,r),onClick:d,children:(0,l.jsx)(u(),{src:M(),alt:"copy icon",layout:"fixed",width:I,height:N})})}},54254:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return de}});var s=t(29815),l=t(85893),a=t(67294),i=t(14354),o=t(97835),c=t(93162),r=t(91761),u=t(42124),d=t(57345),M=t(48233),_=t(64162),y=["Asset name","Price","Balance"],j=t(11163),I=t(43164),N=t(60529),g=t(50463),x=t(14924),m=t(94184),p=t.n(m),D=t(46888),C=t(75358),T=t(86108),v=t(17190),h=(t(85537),t(76237)),A=t(62328),k=t(9499),z=t(30086),L=t.n(z),S=function(e){var n=e.children,t=e.className;return(0,l.jsx)("div",{className:p()(L().cell,t),children:n})},f=function(e){var n=e.columns;return(0,l.jsx)("div",{className:L().cellNames,children:n.map((function(e){return(0,l.jsx)(S,{children:(0,l.jsx)("p",{children:e})},e)}))})},w=function(e){var n=e.onClick,t=e.children,s=e.columns;return(0,l.jsxs)("div",{className:L().container,onClick:n,children:[(0,l.jsx)(f,{columns:s}),(0,l.jsx)("div",{className:L().infoContainer,children:t})]})},E=S,b=function(e){var n=e.className,t=e.amount,s=e.ticker,a=e.network,i=e.additionalAmount,o=e.isLoading,c=(0,d.C)(v.j)(s,a);return o?(0,l.jsx)(k.Z,{className:L().skeleton}):(0,l.jsxs)(S,{className:p()(L().depositAmount,n),children:[(0,l.jsx)("img",{src:null===c||void 0===c?void 0:c.logo_url,alt:"".concat(s," logo"),className:L().depositAmountLogo}),(0,l.jsxs)("div",{className:L().amountAndAdditionalContainer,children:[(0,l.jsxs)("div",{className:L().amountContainer,children:[(0,l.jsxs)("p",{className:L().depositAmountValue,children:[t,"\xa0"]}),(0,l.jsx)("p",{className:L().depositAmountTicker,children:s})]}),(0,l.jsx)("p",{className:L().depositAmountAdditional,children:i})]})]})},O=function(e){var n=e.className,t=e.status,s=e.id,a=e.createdAt;return(0,l.jsxs)(S,{className:L().status,children:[(0,l.jsxs)("div",{className:p()(L().text,n),children:[(0,l.jsx)("p",{children:t}),a&&(0,l.jsx)(h.Fj,{type:h.Q_,creationDate:new Date(a)})]}),s&&(0,l.jsxs)("p",{className:L().id,children:["ID: ",s]})]})},Z=function(e){var n,t,a=e.currency,i=e.period,o=e.className,c=e.color,r=(0,g.e)({currency:a,period:i}).graphData,u=(n=Math).min.apply(n,(0,s.Z)(r.map((function(e){return e.rate})))),d=(t=Math).max.apply(t,(0,s.Z)(r.map((function(e){return e.rate}))));return(0,l.jsx)(S,{className:o,children:(0,l.jsxs)(D.T,{width:120,height:36,data:r,children:[(0,l.jsx)("defs",{children:(0,l.jsxs)("linearGradient",{id:a.code,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,l.jsx)("stop",{offset:"3%",stopColor:c,stopOpacity:.5}),(0,l.jsx)("stop",{offset:"97%",stopColor:c,stopOpacity:0})]})}),(0,l.jsx)(C.B,{width:0,domain:[u,d]}),(0,l.jsx)(T.u,{type:"monotone",dataKey:"rate",stroke:c,fillOpacity:.5,fill:"url(#".concat(a.code,")")})]})})},U=function(e){var n=e.className,t=e.ticker,s=e.network,a=(0,d.C)(v.j)(t,s);return(0,l.jsxs)(S,{className:p()(L().currencyCell,n),children:[(0,l.jsx)("img",{src:null===a||void 0===a?void 0:a.logo_url,alt:"".concat(t," logo"),className:L().depositAmountLogo}),(0,l.jsxs)("div",{className:L().currencyCell__amountAndAdditionalContainer,children:[(0,l.jsx)("p",{className:L().currencyCellTicker,children:t}),(0,l.jsxs)("div",{className:L().currencyCell__secondaryTextContainer,style:{alignItems:"center"},children:[(0,l.jsx)("span",{className:L().currencyCell__secondaryTextContainer_text,children:null===a||void 0===a?void 0:a.name}),(0,l.jsx)(A.u,{currency:a,className:L().currencyCell__network})]})]})]})},Q=t(29807),Y=t.n(Q),W=function(e){var n=e.columns,t=e.onTrackClick,s=e.amountCell,a=e.regularCell,i=e.statusCell,o=e.chartCell,c=e.currencyCell,r=e.isLoading;return(0,l.jsxs)(w,{columns:n,onClick:t,children:[s&&(0,l.jsx)(b,{amount:s.amount,additionalAmount:s.additionalAmount,ticker:s.ticker,network:s.network,className:s.className,isLoading:r}),c&&(0,l.jsx)(U,{ticker:c.ticker,network:c.network}),a&&a.length&&a.map((function(e){return(0,l.jsxs)(E,{className:p()(Y().column,e.date&&Y().dateColumn,e.className),children:[(0,l.jsx)("p",{children:r?(0,l.jsx)(k.Z,{className:Y().skeleton}):e.mainText}),(0,l.jsxs)("span",{className:p()(Y().secondaryDescription,(0,x.Z)({},Y().secondaryDescription__greenText,e.greenText),(0,x.Z)({},Y().secondaryDescription__redText,e.redText)),children:[e.secondaryText,(0,l.jsx)("p",{className:p()(Y().secondaryDescription,Y().secondaryDescription__additional),children:r?(0,l.jsx)(k.Z,{className:Y().skeleton}):e.additionalSecondaryText})]})]},"".concat(e.key).concat(e.mainText).concat(e.secondaryText))})),o&&(0,l.jsx)(Z,{className:o.className,currency:o.currency,period:o.period,color:o.color}),i&&(0,l.jsx)(O,{status:i.status,id:i.id,createdAt:i.createdAt,className:"".concat(Y()[i.status.toLowerCase()])})]})},H=t(99676),G=t.n(H),B=function(e){var n=e.wallet,t=(0,j.useRouter)(),s=(0,d.T)(),i=(0,o.U)({code:n.code,network:n.network}),c=(0,g.e)({currency:i,period:I.x4}),r=c.actualRate,u=c.changeValue,_=(0,a.useState)(!0),x=_[0],m=_[1],p=function(){s((0,M.YF)(n)),t.push("/account/wallets/info?code=".concat(n.code,"&network=").concat(n.network))},D=(0,a.useMemo)((function(){return{columns:y,onTrackClick:p,currencyCell:{ticker:n.code,network:n.network,className:G().currencyCell},regularCell:[{mainText:r?"$".concat((0,N.T4)(r)):void 0,secondaryText:(null===u||void 0===u?void 0:u.value)?"".concat("INCREASE"===u.type?"+":"-").concat(null===u||void 0===u?void 0:u.value,"%"):"0%",className:G().regularCell,greenText:"INCREASE"===(null===u||void 0===u?void 0:u.type),redText:"DECREASE"===(null===u||void 0===u?void 0:u.type),additionalSecondaryText:" 24h",key:"Price"},{mainText:"".concat((0,N.Et)(n.balance,null===i||void 0===i?void 0:i.decimal_places)," ").concat(n.code.toUpperCase()),secondaryText:r&&"$".concat((0,N.Et)((n.balance*r).toFixed(2),null===i||void 0===i?void 0:i.decimal_places)),className:G().balanceCell,key:"Balance"}],chartCell:{currency:i,period:I.vc,className:G().chartCell,color:"INCREASE"===(null===u||void 0===u?void 0:u.type)?"#00d060":"#d84437"}}}),[u,r]);return(0,a.useEffect)((function(){m(!1)}),[i]),(0,l.jsx)(W,{columns:D.columns,onTrackClick:D.onTrackClick,amountCell:D.amountCell,regularCell:D.regularCell,chartCell:D.chartCell,currencyCell:D.currencyCell,isLoading:x})},P=t(31669),R=t(26042),V=t(69396),J=t(64527),F=t.n(J),X=function(e){var n=e.initialState,t=void 0!==n&&n,s=e.onChange,i=e.disabled,o=e.className,c=(0,a.useState)(t),r=c[0],u=c[1];return(0,l.jsx)("div",{className:p()(F().switcher,o),onClick:function(){if(!i){var e=!r;u(e),s&&s(e)}},children:(0,l.jsx)("div",{className:p()(F().circle,(0,x.Z)({},F().circle_checked,r))})})},K=t(59599),q=t.n(K),$=function(e){var n=e.wallet,t=e.add,s=e.remove,a=(0,o.U)({code:n.code,network:n.network});return(0,l.jsxs)("div",{className:q().wallet,children:[(0,l.jsx)("div",{className:q().wallet__logo,children:(0,l.jsx)("img",{className:q().wallet__logo_img,src:null===a||void 0===a?void 0:a.logo_url,alt:"".concat(n.code," logo")})}),(0,l.jsx)("div",{className:q().wallet__mainInfo,children:(0,N.xG)(a,!0)}),(0,l.jsx)("div",{className:q().wallet__subInfo,children:(0,l.jsx)(A.u,{currency:a,className:q().wallet__subInfo__network})}),(0,l.jsx)("div",{className:q().wallet__subInfo__title,children:null===a||void 0===a?void 0:a.name}),(0,l.jsx)(X,{className:q().wallet__subInfo__switcher,initialState:!n.hidden,onChange:function(e){e?t(n):s(n)},disabled:!!n.balance})]})},ee=t(87704),ne=t(86955),te=t(51352),se=t.n(te),le=t(60314),ae=t.n(le),ie=function(e){var n=e.onClose,t=(0,d.T)(),i=(0,d.C)(M.n1),o=(0,d.C)(M.wg),c=(0,a.useState)(),r=c[0],u=c[1],_=(0,a.useState)(1),y=_[0],j=_[1],I=(0,a.useState)(i),N=I[0],g=I[1],m=(0,a.useCallback)((function(e){g((function(n){return(0,s.Z)(n).concat([e])}))}),[]),D=(0,a.useCallback)((function(e){e.balance||g((function(n){return n.filter((function(n){var t,s,l,a;return(null===(t=e.code)||void 0===t?void 0:t.toLowerCase())!==(null===(s=n.code)||void 0===s?void 0:s.toLowerCase())&&(null===(l=e.network)||void 0===l?void 0:l.toLowerCase())!==(null===(a=n.network)||void 0===a?void 0:a.toLowerCase())}))}))}),[]),C=(0,a.useMemo)((function(){var e=o.map((function(e){var n=i.find((function(n){var t,s,l,a;return(null===(t=n.code)||void 0===t?void 0:t.toLowerCase())===(null===(s=e.code)||void 0===s?void 0:s.toLowerCase())&&(null===(l=n.network)||void 0===l?void 0:l.toLowerCase())===(null===(a=e.network)||void 0===a?void 0:a.toLowerCase())}));return n||(0,V.Z)((0,R.Z)({},e),{hidden:!0})})),n=e;return r?n=e.filter((function(e){return e.code.toLowerCase().includes(r.toLowerCase())})):2===y?n=e.filter((function(e){return e.balance>0})):3===y&&(n=e.filter((function(e){return!e.balance}))),n.sort((function(e,n){return e.hidden===n.hidden?0:e.hidden?1:-1}))}),[i,o,r,y]);return(0,a.useEffect)((function(){o.length||t((0,M.h5)())}),[o]),(0,l.jsx)(ee.Z,{onClose:n,heading:"Manage wallets",subtitle:"Select and update your displayed wallets anytime",containerClassname:ae().popupWrapper,subtitleClassname:ae().popupSubtitle,children:(0,l.jsxs)("div",{className:ae().internalWrapper,children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:ae().search,children:[(0,l.jsx)("img",{src:se(),className:ae().search_icon,alt:"icon search arrow"}),(0,l.jsx)("input",{className:ae().search_input,type:"text",placeholder:"Search",onChange:function(e){return u(e.target.value)}})]}),(0,l.jsxs)("div",{className:ae().tabs,children:[(0,l.jsx)("div",{className:p()((0,x.Z)({},ae().tabs_active,1===y)),onClick:function(){return j(1)},children:"All"}),(0,l.jsx)("div",{className:p()((0,x.Z)({},ae().tabs_active,2===y)),onClick:function(){return j(2)},children:"With balance"}),(0,l.jsx)("div",{className:p()((0,x.Z)({},ae().tabs_active,3===y)),onClick:function(){return j(3)},children:"Empty"})]}),(0,l.jsx)("div",{className:ae().walletListWrapper,children:null===C||void 0===C?void 0:C.map((function(e){return(0,l.jsx)($,{wallet:e,add:m,remove:D},"".concat(e.code).concat(e.network))}))})]}),(0,l.jsx)(ne.Z,{className:ae().button,onClick:function(){t((0,M.SZ)({params:N})),n()},children:"Save"})]})})},oe=t(63454),ce=t.n(oe),re=function(e,n,t){t.forEach((function(e){e(0)})),0===e&&n(1),1===e&&n(2),2===e&&n(0)},ue=["Asset name","Network","Balance"].join(",")+"\r\n",de=function(){var e=(0,i.g)("Wallets"),n=(0,d.T)(),t=(0,d.C)(M.n1),y=(0,d.C)(_.hZ),j=(0,o.k)((0,s.Z)(t)),I=(0,a.useState)(!0),N=I[0],g=I[1],x=(0,a.useState)(!1),m=x[0],p=x[1],D=(0,a.useState)(0),C=D[0],T=D[1],v=(0,a.useState)(0),h=v[0],A=v[1],z=(0,a.useState)(1),L=z[0],S=z[1],f=(0,a.useState)(""),w=f[0],E=f[1];(0,a.useEffect)((function(){n((0,M.uJ)())}),[n]),(0,a.useEffect)((function(){n((0,_.SZ)()),(null===t||void 0===t?void 0:t.length)&&g(!1)}),[t]);var b=(0,a.useMemo)((function(){var e=(0,s.Z)(t);return w&&(e=e.filter((function(e){var n=j.find((function(n){var t,s,l,a;return(null===(t=n.code)||void 0===t?void 0:t.toLowerCase())===(null===(s=e.code)||void 0===s?void 0:s.toLowerCase())&&(null===(l=n.network)||void 0===l?void 0:l.toLowerCase())===(null===(a=e.network)||void 0===a?void 0:a.toLowerCase())}));return"".concat(e.code.toLowerCase()).concat(n.name.toLowerCase()).includes(w.toLowerCase())}))),1===C&&(e=e.sort((function(e,n){return e.code.localeCompare(n.code)}))),2===C&&(e=e.sort((function(e,n){return n.code.localeCompare(e.code)}))),2===L&&(e=e.sort((function(e,n){var t,s,l,a,i=null===(s=y[null===e||void 0===e||null===(t=e.code)||void 0===t?void 0:t.toUpperCase()])||void 0===s?void 0:s.USD,o=null===(a=y[null===n||void 0===n||null===(l=n.code)||void 0===l?void 0:l.toUpperCase()])||void 0===a?void 0:a.USD;return(i&&o?e.balance*i:e.balance)-(i&&o?n.balance*o:n.balance)}))),1===L&&(e=e.sort((function(e,n){var t,s,l,a,i=null===(s=y[null===e||void 0===e||null===(t=e.code)||void 0===t?void 0:t.toUpperCase()])||void 0===s?void 0:s.USD,o=null===(a=y[null===n||void 0===n||null===(l=n.code)||void 0===l?void 0:l.toUpperCase()])||void 0===a?void 0:a.USD,c=i&&o?(null===e||void 0===e?void 0:e.balance)*i:e.balance;return(i&&o?(null===n||void 0===n?void 0:n.balance)*o:n.balance)-c}))),2===h&&(e=e.sort((function(e,n){var t,s,l,a;return((null===(s=y[null===e||void 0===e||null===(t=e.code)||void 0===t?void 0:t.toUpperCase()])||void 0===s?void 0:s.USD)||0)-((null===(a=y[null===n||void 0===n||null===(l=n.code)||void 0===l?void 0:l.toUpperCase()])||void 0===a?void 0:a.USD)||0)}))),1===h&&(e=e.sort((function(e,n){var t,s,l,a,i=(null===(s=y[null===e||void 0===e||null===(t=e.code)||void 0===t?void 0:t.toUpperCase()])||void 0===s?void 0:s.USD)||0;return((null===(a=y[null===n||void 0===n||null===(l=n.code)||void 0===l?void 0:l.toUpperCase()])||void 0===a?void 0:a.USD)||0)-i}))),e}),[t,C,h,L,y,w,j]);return(0,l.jsxs)(l.Fragment,{children:[e,(0,l.jsxs)("div",{className:ce().headerWrapper,children:[(0,l.jsx)(r.Z,{title:"Wallets",children:(0,l.jsxs)("div",{className:ce().headerWrapper__head,children:[(0,l.jsx)("p",{onClick:function(){var e=[];t.forEach((function(n){var t=[n.code,n.network,n.balance].join(",")+"\r\n";e.push(t)})),(0,c.saveAs)(new Blob([ue].concat((0,s.Z)(e)),{type:"text/csv;charset=utf-8"}),"CoinRabbit_Wallet_statements.csv")},children:"Download CSV"}),(0,l.jsxs)("div",{className:ce().search,children:[(0,l.jsx)("img",{src:se(),className:ce().searchIcon,alt:"icon search arrow"}),(0,l.jsx)("input",{className:ce().listSearchInput,type:"text",placeholder:"Search",onChange:function(e){return E(e.target.value)}})]})]})}),(0,l.jsx)(u.Q,{title:"Manage wallets",onClick:function(){return p(!0)}})]}),(0,l.jsxs)("div",{className:ce().container,children:[(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(P.Z.ColumnsHeader,{children:[(0,l.jsx)(P.Z.ColumnHeaderCell,{title:"Asset name",onClick:function(){return re(C,T,[A,S])},isActive:!!C}),(0,l.jsx)(P.Z.ColumnHeaderCell,{title:"Price",onClick:function(){return re(h,A,[T,S])},isActive:!!h,className:ce().regularHead}),(0,l.jsx)(P.Z.ColumnHeaderCell,{className:ce().chartHead,title:"30d trend"}),(0,l.jsx)(P.Z.ColumnHeaderCell,{title:"Balance",onClick:function(){return re(L,S,[T,A])},isActive:!!L,className:ce().regularHead})]})}),N&&(0,l.jsx)("div",{className:ce().skeletons,children:new Array(6).fill(1).map((function(e,n){return(0,l.jsx)(k.Z,{},n)}))}),(0,l.jsx)("div",{className:ce().list,children:!!b&&!!b.length&&b.map((function(e){return(0,l.jsx)(B,{wallet:e},"".concat(e.code).concat(e.network))}))})]}),m&&(0,l.jsx)(ie,{onClose:function(){return p(!1)}})]})}},14200:function(e){e.exports={background:"styles_background__OuJ97",container:"styles_container__07TOB"}},64527:function(e){e.exports={switcher:"styles_switcher__VwQZQ",circle:"styles_circle__c3R_p",circle_checked:"styles_circle_checked__rVHR0"}},37584:function(e){e.exports={popup__heading:"styles_popup__heading__7k6PD"}},35323:function(e){e.exports={popup__subtitle:"styles_popup__subtitle__oQFPp"}},94550:function(e){e.exports={background:"styles_background__q1v2i",container:"styles_container__rTwIt",comment:"styles_comment__8Dn4f",nav:"styles_nav__SrQKU",button:"styles_button___T2AX",buttonText:"styles_buttonText__kXWbJ",btn:"styles_btn__QQOxO",text:"styles_text__Prk_Z",textL:"styles_textL__ijbyn",textM:"styles_textM__QkFNL",textS:"styles_textS__DJGE7",textXS:"styles_textXS__raglf",textBlack:"styles_textBlack__MPGP3",textBlue:"styles_textBlue__pcpCD",textGray:"styles_textGray__c23cO",container__subtitle:"styles_container__subtitle__ihpd7"}},72713:function(e){e.exports={button:"styles_button__AioPh",hover:"styles_hover__9U4eF",isLoading:"styles_isLoading__WBuxu",children:"styles_children__ZxdBw",disabled:"styles_disabled__Meroi",accountBtn:"styles_accountBtn__I4FoC",icon:"styles_icon__9NY_P"}},57267:function(e){e.exports={heading:"styles_heading__Q64i3",headingTypeCopy:"styles_headingTypeCopy__WFeZt",headingCopyMessage:"styles_headingCopyMessage__IUi9K",headingIconWrapper:"styles_headingIconWrapper__ABySm",headingTypeSubinfo:"styles_headingTypeSubinfo__2pyMH",headingTypeSubInfoSmall:"styles_headingTypeSubInfoSmall__QLZsG"}},68449:function(e){e.exports={value:"styles_value__pAfM8",valueTypeAccent:"styles_valueTypeAccent__50gjy",valueTypeSubinfo:"styles_valueTypeSubinfo__kO2qO",message:"styles_message__Pz6Vq",copyButton:"styles_copyButton__u57db"}},28518:function(e){e.exports={message:"styles_message__tw1tw"}},54233:function(e){e.exports={headingCopyMessage:"styles_headingCopyMessage__g9O_A",headingIconWrapper:"styles_headingIconWrapper__ZnHUL"}},29807:function(e){e.exports={column:"styles_column__07iHN",dateColumn:"styles_dateColumn__ahRLQ",skeleton:"styles_skeleton__qEeYp",secondaryDescription:"styles_secondaryDescription__slul9",secondaryDescription__greenText:"styles_secondaryDescription__greenText__kVhAY",secondaryDescription__redText:"styles_secondaryDescription__redText__LHYkv",secondaryDescription__additional:"styles_secondaryDescription__additional__5IBxF",statusColumn:"styles_statusColumn__aQpgW",depositColumn:"styles_depositColumn__lD7Tp",active:"styles_active__kaiUo",failed:"styles_failed__SyCid",liquidated:"styles_liquidated__o87SH",closed:"styles_closed__Mpbyt"}},99676:function(e){e.exports={chartCell:"styles_chartCell__RqD_H",balanceCell:"styles_balanceCell__LmByo",regularCell:"styles_regularCell__8jFXU",currencyCell:"styles_currencyCell__96GRe"}},30086:function(e){e.exports={container:"styles_container__5I8tI",skeleton:"styles_skeleton__Cgs7C",cellNames:"styles_cellNames__lZQ3d",infoContainer:"styles_infoContainer__HO8E8",cell:"styles_cell__3dWx2",amountAndAdditionalContainer:"styles_amountAndAdditionalContainer__v5TG5",amountContainer:"styles_amountContainer__xq_Pk",depositAmount:"styles_depositAmount__SOkrV",depositAmountTicker:"styles_depositAmountTicker__XvaPb",depositAmountValue:"styles_depositAmountValue__Lkt1O",depositAmountAdditional:"styles_depositAmountAdditional__Wm9Wj",depositAmountLogo:"styles_depositAmountLogo__kRVGn",status:"styles_status__3h1pV",text:"styles_text___DwKt",id:"styles_id__Evssv",columnsHeader:"styles_columnsHeader__eH_hm",columnHeaderCell:"styles_columnHeaderCell__hCYrL",columnHeaderCellTitle:"styles_columnHeaderCellTitle__q9wW1",columnHeaderCellPressable:"styles_columnHeaderCellPressable__ZBoQ8",columnHeaderCellSortButton:"styles_columnHeaderCellSortButton__UCBeE",columnHeaderCellClearButton:"styles_columnHeaderCellClearButton__hkzyA",currencyCell:"styles_currencyCell___c03h",currencyCellTicker:"styles_currencyCellTicker__TSxg6",currencyCell__secondaryTextContainer:"styles_currencyCell__secondaryTextContainer__jr6Ee",currencyCell__secondaryTextContainer_text:"styles_currencyCell__secondaryTextContainer_text__xMAQL",currencyCell__network:"styles_currencyCell__network__YELai",currencyCell__amountAndAdditionalContainer:"styles_currencyCell__amountAndAdditionalContainer__AmpTM"}},60314:function(e){e.exports={popupWrapper:"styles_popupWrapper__MRLPc",search:"styles_search__uWnMU",search_icon:"styles_search_icon__CTNQe",search_input:"styles_search_input__KJWTv",tabs:"styles_tabs__nuovS",tabs_active:"styles_tabs_active__MldBE",button:"styles_button__efZU5",internalWrapper:"styles_internalWrapper__NM8NU",walletListWrapper:"styles_walletListWrapper__FpB9J",popupSubtitle:"styles_popupSubtitle__zaWSG"}},59599:function(e){e.exports={wallet:"styles_wallet__pse_1",wallet__logo:"styles_wallet__logo__KZH99",wallet__logo_img:"styles_wallet__logo_img__Msslp",wallet__mainInfo:"styles_wallet__mainInfo__Fqr1K",wallet__subInfo:"styles_wallet__subInfo__im9ps",wallet__subInfo__title:"styles_wallet__subInfo__title__AUL3p",wallet__subInfo__switcher:"styles_wallet__subInfo__switcher__Sd7vs"}},63454:function(e){e.exports={chartHead:"styles_chartHead__cCJeW",skeletons:"styles_skeletons__30ACQ",headerWrapper:"styles_headerWrapper__6ZJu0",headerWrapper__head:"styles_headerWrapper__head__v1LFf",container:"styles_container__NlZg3",list:"styles_list__6T7Ax",search:"styles_search__L4dj5",searchIcon:"styles_searchIcon__hMjJB"}},59161:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNSAxMy43ODEySDIzQzI0LjkzMyAxMy43ODEyIDI2LjUgMTUuMzQ4MyAyNi41IDE3LjI4MTJWMjEuNzExN0MyNi41IDIzLjY0NDcgMjQuOTMzIDI1LjIxMTcgMjMgMjUuMjExN0g5LjVWMTMuNzgxMloiIHN0cm9rZT0iIzExNjhGMSIvPgo8cGF0aCBkPSJNMjYuNSAxNy45MjE5SDIyLjU3MTdDMjEuNzAzNyAxNy45MjE5IDIxIDE4LjYyNTYgMjEgMTkuNDkzNkMyMSAyMC4zNjE3IDIxLjcwMzcgMjEuMDY1NCAyMi41NzE3IDIxLjA2NTRIMjYuNVYxNy45MjE5WiIgc3Ryb2tlPSIjMTE2OEYxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjMuMTgwOCAxMy4yODQxQzIyLjU4NzQgMTIuMTA4OCAyMS4yNDc2IDExLjM5NzIgMTkuODUzMyAxMS43MDVMMTIuNzE4MyAxMy4yODAxSDlWMTMuMDc2OEwxOS42Mzc3IDEwLjcyODVDMjEuNzUxMiAxMC4yNjE5IDIzLjc3MSAxMS41NTIzIDI0LjM0MSAxMy41MTA0QzIzLjk3NTggMTMuMzgwNSAyMy41ODYxIDEzLjMwMjEgMjMuMTgwOCAxMy4yODQxWk05LjAwMjUzIDI1LjcxMDZIOVYyNS43MTExTDkuMDAyNTMgMjUuNzEwNloiIGZpbGw9IiMxMTY4RjEiLz4KPG1hc2sgaWQ9InBhdGgtNC1pbnNpZGUtMV83NzIzXzM4NjI0IiBmaWxsPSJ3aGl0ZSI+CjxlbGxpcHNlIGN4PSIyMyIgY3k9IjE5LjQ5NjgiIHJ4PSIxIiByeT0iMS4wMzU4NyIvPgo8L21hc2s+CjxwYXRoIGQ9Ik0yMyAxOS40OTY4QzIzIDE5LjUwODYgMjIuOTk3OCAxOS41MTY2IDIyLjk5NTYgMTkuNTIyQzIyLjk5MzIgMTkuNTI4IDIyLjk5IDE5LjUzMjMgMjIuOTg3NyAxOS41MzQ3QzIyLjk4NTMgMTkuNTM3MiAyMi45ODQ5IDE5LjUzNjcgMjIuOTg3OSAxOS41MzUzQzIyLjk5MTggMTkuNTMzNiAyMi45OTY3IDE5LjUzMjcgMjMgMTkuNTMyN1YyMS41MzI3QzI0LjEzNzUgMjEuNTMyNyAyNSAyMC41ODc3IDI1IDE5LjQ5NjhIMjNaTTIzIDE5LjUzMjdDMjMuMDAzMyAxOS41MzI3IDIzLjAwODIgMTkuNTMzNiAyMy4wMTIxIDE5LjUzNTNDMjMuMDE1MSAxOS41MzY3IDIzLjAxNDcgMTkuNTM3MiAyMy4wMTIzIDE5LjUzNDdDMjMuMDEgMTkuNTMyMyAyMy4wMDY4IDE5LjUyOCAyMy4wMDQ0IDE5LjUyMkMyMy4wMDIyIDE5LjUxNjYgMjMgMTkuNTA4NiAyMyAxOS40OTY4SDIxQzIxIDIwLjU4NzcgMjEuODYyNSAyMS41MzI3IDIzIDIxLjUzMjdWMTkuNTMyN1pNMjMgMTkuNDk2OEMyMyAxOS40ODUgMjMuMDAyMiAxOS40NzcxIDIzLjAwNDQgMTkuNDcxNkMyMy4wMDY4IDE5LjQ2NTYgMjMuMDEgMTkuNDYxNCAyMy4wMTIzIDE5LjQ1ODlDMjMuMDE0NyAxOS40NTY0IDIzLjAxNTEgMTkuNDU2OSAyMy4wMTIxIDE5LjQ1ODNDMjMuMDA4MiAxOS40NiAyMy4wMDMzIDE5LjQ2MDkgMjMgMTkuNDYwOVYxNy40NjA5QzIxLjg2MjUgMTcuNDYwOSAyMSAxOC40MDU5IDIxIDE5LjQ5NjhIMjNaTTIzIDE5LjQ2MDlDMjIuOTk2NyAxOS40NjA5IDIyLjk5MTggMTkuNDYgMjIuOTg3OSAxOS40NTgzQzIyLjk4NDkgMTkuNDU2OSAyMi45ODUzIDE5LjQ1NjQgMjIuOTg3NyAxOS40NTg5QzIyLjk5IDE5LjQ2MTQgMjIuOTkzMiAxOS40NjU2IDIyLjk5NTYgMTkuNDcxNkMyMi45OTc4IDE5LjQ3NzEgMjMgMTkuNDg1IDIzIDE5LjQ5NjhIMjVDMjUgMTguNDA1OSAyNC4xMzc1IDE3LjQ2MDkgMjMgMTcuNDYwOVYxOS40NjA5WiIgZmlsbD0iIzExNjhGMSIgbWFzaz0idXJsKCNwYXRoLTQtaW5zaWRlLTFfNzcyM18zODYyNCkiLz4KPC9zdmc+Cg=="},88301:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMSAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC45ODQzNzUiIHk9IjAuNSIgd2lkdGg9IjYuMjcyODkiIGhlaWdodD0iOC4yMzExNCIgcng9IjEuNSIgc3Ryb2tlPSIjMTE2OEYxIi8+CjxyZWN0IHg9IjMuNzEwOTQiIHk9IjMuMjczNDQiIHdpZHRoPSI2LjI3Mjg5IiBoZWlnaHQ9IjguMjMxMTQiIHJ4PSIxLjUiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMxMTY4RjEiLz4KPC9zdmc+Cg=="},47138:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aAogICAgZD0iTTkuNSAxMy43ODEySDIzQzI0LjkzMyAxMy43ODEyIDI2LjUgMTUuMzQ4MyAyNi41IDE3LjI4MTJWMjEuNzExN0MyNi41IDIzLjY0NDcgMjQuOTMzIDI1LjIxMTcgMjMgMjUuMjExN0g5LjVWMTMuNzgxMloiCiAgICBzdHJva2U9IiMxMTY4RjEiCiAgLz4KICA8cGF0aAogICAgZD0iTTI2LjUgMTcuOTIxOUgyMi41NzE3QzIxLjcwMzcgMTcuOTIxOSAyMSAxOC42MjU2IDIxIDE5LjQ5MzZDMjEgMjAuMzYxNyAyMS43MDM3IDIxLjA2NTQgMjIuNTcxNyAyMS4wNjU0SDI2LjVWMTcuOTIxOVoiCiAgICBzdHJva2U9IiMxMTY4RjEiCiAgLz4KICA8cGF0aAogICAgZmlsbC1ydWxlPSJldmVub2RkIgogICAgY2xpcC1ydWxlPSJldmVub2RkIgogICAgZD0iTTIzLjE4MDggMTMuMjg0MUMyMi41ODc0IDEyLjEwODggMjEuMjQ3NiAxMS4zOTcyIDE5Ljg1MzMgMTEuNzA1TDEyLjcxODMgMTMuMjgwMUg5VjEzLjA3NjhMMTkuNjM3NyAxMC43Mjg1QzIxLjc1MTIgMTAuMjYxOSAyMy43NzEgMTEuNTUyMyAyNC4zNDEgMTMuNTEwNEMyMy45NzU4IDEzLjM4MDUgMjMuNTg2MSAxMy4zMDIxIDIzLjE4MDggMTMuMjg0MVpNOS4wMDI1MyAyNS43MTA2SDlWMjUuNzExMUw5LjAwMjUzIDI1LjcxMDZaIgogICAgZmlsbD0iIzExNjhGMSIKICAvPgogIDxtYXNrIGlkPSJwYXRoLTQtaW5zaWRlLTFfNzcyM18zODYyNCIgZmlsbD0id2hpdGUiPgogICAgPGVsbGlwc2UgY3g9IjIzIiBjeT0iMTkuNDk2OCIgcng9IjEiIHJ5PSIxLjAzNTg3IiAvPgogIDwvbWFzaz4KICA8cGF0aAogICAgZD0iTTIzIDE5LjQ5NjhDMjMgMTkuNTA4NiAyMi45OTc4IDE5LjUxNjYgMjIuOTk1NiAxOS41MjJDMjIuOTkzMiAxOS41MjggMjIuOTkgMTkuNTMyMyAyMi45ODc3IDE5LjUzNDdDMjIuOTg1MyAxOS41MzcyIDIyLjk4NDkgMTkuNTM2NyAyMi45ODc5IDE5LjUzNTNDMjIuOTkxOCAxOS41MzM2IDIyLjk5NjcgMTkuNTMyNyAyMyAxOS41MzI3VjIxLjUzMjdDMjQuMTM3NSAyMS41MzI3IDI1IDIwLjU4NzcgMjUgMTkuNDk2OEgyM1pNMjMgMTkuNTMyN0MyMy4wMDMzIDE5LjUzMjcgMjMuMDA4MiAxOS41MzM2IDIzLjAxMjEgMTkuNTM1M0MyMy4wMTUxIDE5LjUzNjcgMjMuMDE0NyAxOS41MzcyIDIzLjAxMjMgMTkuNTM0N0MyMy4wMSAxOS41MzIzIDIzLjAwNjggMTkuNTI4IDIzLjAwNDQgMTkuNTIyQzIzLjAwMjIgMTkuNTE2NiAyMyAxOS41MDg2IDIzIDE5LjQ5NjhIMjFDMjEgMjAuNTg3NyAyMS44NjI1IDIxLjUzMjcgMjMgMjEuNTMyN1YxOS41MzI3Wk0yMyAxOS40OTY4QzIzIDE5LjQ4NSAyMy4wMDIyIDE5LjQ3NzEgMjMuMDA0NCAxOS40NzE2QzIzLjAwNjggMTkuNDY1NiAyMy4wMSAxOS40NjE0IDIzLjAxMjMgMTkuNDU4OUMyMy4wMTQ3IDE5LjQ1NjQgMjMuMDE1MSAxOS40NTY5IDIzLjAxMjEgMTkuNDU4M0MyMy4wMDgyIDE5LjQ2IDIzLjAwMzMgMTkuNDYwOSAyMyAxOS40NjA5VjE3LjQ2MDlDMjEuODYyNSAxNy40NjA5IDIxIDE4LjQwNTkgMjEgMTkuNDk2OEgyM1pNMjMgMTkuNDYwOUMyMi45OTY3IDE5LjQ2MDkgMjIuOTkxOCAxOS40NiAyMi45ODc5IDE5LjQ1ODNDMjIuOTg0OSAxOS40NTY5IDIyLjk4NTMgMTkuNDU2NCAyMi45ODc3IDE5LjQ1ODlDMjIuOTkgMTkuNDYxNCAyMi45OTMyIDE5LjQ2NTYgMjIuOTk1NiAxOS40NzE2QzIyLjk5NzggMTkuNDc3MSAyMyAxOS40ODUgMjMgMTkuNDk2OEgyNUMyNSAxOC40MDU5IDI0LjEzNzUgMTcuNDYwOSAyMyAxNy40NjA5VjE5LjQ2MDlaIgogICAgZmlsbD0iIzExNjhGMSIKICAgIG1hc2s9InVybCgjcGF0aC00LWluc2lkZS0xXzc3MjNfMzg2MjQpIgogIC8+Cjwvc3ZnPgo="},48871:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEgMSA2IDZtMCAwIDYgNk03IDdsLTYgNm02LTYgNi02IiBzdHJva2U9IiMxMTY4RjEiLz48L3N2Zz4K"},48610:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBzdHJva2Utb3BhY2l0eT0iLjIiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4Ij48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCAxOCAxOCIgdG89IjM2MCAxOCAxOCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9nPjwvc3ZnPg=="}},function(e){e.O(0,[5675,794,8020,6888,3856,9774,2888,179],(function(){return n=61567,e(e.s=n);var n}));var n=e.O();_N_E=n}]);