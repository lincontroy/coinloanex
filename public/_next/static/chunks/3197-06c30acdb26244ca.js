(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3197],{53197:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(47568),l=n(14924),s=n(828),o=n(97582),i=n(85893),a=n(67294),c=n(11163),u=n(41514),_=n.n(u),d=n(94184),v=n.n(d),m=n(39414),h=n(84163),f=n(66885),p=n(60529),y=n(77627),N=n(57345),x=n(17190),E=n(24483),g=n(69782),C=n(76401),b=n(47050),w=n.n(b),k=function(e){var t=e.ltvPercent,n=e.value,r=e.handleChangeLtvPercent;return(0,i.jsxs)("div",{className:v()(w().ltvOption,(0,l.Z)({},w().ltvOptionSelected,t===n)),onClick:r(n),children:[100*Number(n),"%"]})},L=n(9735),j=n(61849),S=n.n(j);function V(e){var t,n=e.exchange,r=e.to;e.from;return(0,i.jsxs)("div",{className:S().termsContainer,children:[(0,i.jsxs)("div",{className:S().termsItem,children:[(0,i.jsxs)("div",{className:S().termsName,children:[(0,i.jsx)("p",{children:"Loan Term"}),(0,i.jsx)(y.Z,{alt:"Borrow Bitcoin and other cryptocurrencies",children:"The loan term depends only on your wish to buy your collateral back and close this loan or on reaching the liquidation limit."})]}),(0,i.jsx)("div",{className:S().termsValue,children:"Unlimited"})]}),(0,i.jsxs)("div",{className:S().termsItem,children:[(0,i.jsxs)("div",{className:S().termsName,children:[(0,i.jsx)("p",{children:"Monthly Interest"}),(0,i.jsx)(y.Z,{alt:"how to borrow cryptocurrency",children:"Interest rate is accrued every month from the moment of getting the loan and is paid at the moment of full or partial repayment of the loan"})]}),(0,i.jsxs)("div",{className:S().termsValue,children:[(0,i.jsxs)("div",{className:v()(w().ltvOption,w().ltvOptionSelected),children:[(0,i.jsx)("span",{className:v()(S().termsValue__text_inactive,S().termsValue__text_space_right,S().termsValue__text_hidden),children:"16%"}),(0,i.jsxs)("span",{className:v()(S().termsValue__text_highlighted),children:[null===n||void 0===n?void 0:n.interest_percent,"% APR"]})]}),(0,i.jsx)("div",{children:(0,p.dN)(null===n||void 0===n||null===(t=n.interest_amounts)||void 0===t?void 0:t.month,r,(null===r||void 0===r?void 0:r.is_stable)?2:null===r||void 0===r?void 0:r.decimal_places,!0)})]})]})]})}var T=n(17426),D=n(12775),O=n.n(D),A=n(99451),F=n.n(A);function I(e){var t,n,d=e.pageCurrency,b=(0,N.T)(),w=(0,c.useRouter)(),j=(0,N.C)(x.DE),S=(0,N.C)(C.Gw),D=(0,a.useRef)(),A=(0,a.createRef)(),I=(0,a.useRef)(),R=(0,a.useRef)(!0),B=(0,a.useRef)(!1),Z=(0,a.useState)(null),W=Z[0],U=Z[1],P=(0,a.useState)(null),G=P[0],H=P[1],q=(0,a.useState)(""),M=q[0],X=q[1],Y=(0,a.useState)(null),Q=Y[0],K=Y[1],J=(0,a.useState)(null),z=J[0],$=J[1],ee=(0,a.useState)(!1),te=ee[0],ne=ee[1],re=(0,a.useState)(!1),le=re[0],se=re[1],oe=(0,a.useState)(!0),ie=oe[0],ae=oe[1],ce=(0,a.useState)([]),ue=ce[0],_e=ce[1],de=(0,a.useState)([]),ve=de[0],me=de[1],he=(0,a.useState)(""),fe=he[0],pe=he[1],ye=(0,a.useState)(""),Ne=ye[0],xe=ye[1],Ee=(0,a.useState)([]),ge=Ee[0],Ce=Ee[1],be=(0,a.useState)("0.1"),we=be[0],ke=be[1],Le=(0,a.useRef)(we),je=function(e){ke(e),Le.current=e},Se=function(e){U(e)},Ve=function(e){H(e)};(0,a.useEffect)((function(){return b((0,C.wv)()),clearTimeout(D.current),function(){clearTimeout(D.current),R.current=!1}}),[]),(0,a.useEffect)((function(){var e=A.current.validate().isValid;e!==z&&$(e)}),[Le,M]);var Te=function(e){return function(t){return t.code!==(null===e||void 0===e?void 0:e.code)&&t.network!==(null===e||void 0===e?void 0:e.network)}};(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)((function(){var e,t,n,r,l,s,i,a,c,u,_;return(0,o.__generator)(this,(function(o){if(0===(null===j||void 0===j?void 0:j.length))return[2];B.current=!0,e=[],t=[],n=null,r=!0,l=!1,s=void 0;try{for(i=j[Symbol.iterator]();!(r=(a=i.next()).done);r=!0)(c=a.value).is_loan_deposit_enabled&&e.push(c),c.is_loan_receive_enabled&&t.push(c),d&&!n&&c.code.toLowerCase()===d.code.toLowerCase()&&c.network.toLowerCase()===d.network.toLowerCase()&&(n=c)}catch(v){l=!0,s=v}finally{try{r||null==i.return||i.return()}finally{if(l)throw s}}return e=e.sort((function(e,t){return e.loan_deposit_priority-t.loan_deposit_priority})),t=t.sort((function(e,t){return e.loan_receive_priority-t.loan_receive_priority})),n?n.is_loan_deposit_enabled?u=n:n.is_loan_receive_enabled&&(_=n,u=e.find(Te(_))):u=e[0],_||(_=t.find(Te(u))),R.current&&(U(u),H(_),me(t),_e(e)),[2]}))}));return function(){return e.apply(this,arguments)}}();e()}),[d,j]);var De=function(e,t,n,l){clearTimeout(D.current);var i=n||G,a=l||W;Ne&&i&&a&&!Number.isNaN(parseFloat(e))&&(t===g.iV.direct?ae(!0):se(!0),D.current=setTimeout(function(e,t,n,l){return(0,r.Z)((function(){var r,i,a,c;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return R.current?(I.current=[l,n],[4,(0,E.vK)({from_code:l.code,from_network:l.network,to_code:n.code,to_network:n.network,amount:e,exchange:t,ltv_percent:Ne})]):[2];case 1:return r=o.sent().response,R.current?("message"in r?(pe(r.message),t===g.iV.direct?X("\u2014"):je("\u2014")):(pe(""),t===g.iV.direct?X((0,p.FH)(r.amount_to,null===n||void 0===n?void 0:n.decimal_places)):je((0,p.FH)(r.amount_from,null===l||void 0===l?void 0:l.decimal_places)),i=(0,s.Z)(I.current,2),a=i[0],c=i[1],a.code===l.code&&a.network===l.network&&c.code===n.code&&c.network===n.network&&K(r)),t===g.iV.direct?ae(!1):se(!1),[2]):[2]}}))}))}(e,t,i,a),200))};(0,a.useEffect)((function(){G&&(G.code!==(null===W||void 0===W?void 0:W.code)||G.network!==(null===W||void 0===W?void 0:W.network)?(null===W||void 0===W?void 0:W.is_stable)&&(null===G||void 0===G?void 0:G.is_stable)?U(ue.find((function(e){return e.is_stable}))):B.current?B.current=!1:De(Le.current,g.iV.direct):U(ue.find(Te(G))))}),[G]),(0,a.useEffect)((function(){if(W){var e=null;W.code===(null===G||void 0===G?void 0:G.code)&&W.network===(null===G||void 0===G?void 0:G.network)?(B.current=!0,e=ve.find(Te(W)),H(e)):W.is_stable&&(null===G||void 0===G?void 0:G.is_stable)&&(B.current=!0,e=ve.find((function(e){return e.is_stable})),H(e));var t=W.loan_deposit_default_amount||"10000";je(t),b((0,x.Hy)(W.code)),De(t,g.iV.direct,e,W)}}),[W]);var Oe=function(e){return function(){xe(e)}};function Ae(){return Fe.apply(this,arguments)}function Fe(){return(Fe=(0,r.Z)((function(){var e,t;return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return A.current.validate().isValid?(ne(!0),e=(0,h.Aq)(),[4,(0,E.tX)({deposit:{currency_code:W.code,currency_network:W.network,expected_amount:Q.amount_from},loan:{currency_code:G.code,currency_network:G.network},ltv_percent:Ne,referral:e})]):[2];case 1:return(t=n.sent())&&t.loan_id?(f.B({action:"Loan_landing_step_1_get"}),[4,w.push({pathname:"/loan/confirm",query:{from_code:W.code,from_network:W.network,to_code:G.code,to_network:G.network,amount:Q.amount_from,loan_id:t.loan_id,ltv_percent:Ne}})]):(ne(!1),[2]);case 2:return n.sent(),[2]}}))}))).apply(this,arguments)}(0,a.useEffect)((function(){var e;ae(!0),e=(null===W||void 0===W?void 0:W.ltv_options)?W.ltv_options.map((function(e,t){return(0,i.jsx)(k,{ltvPercent:Ne,value:e.trim(),handleChangeLtvPercent:Oe},t)})):S.ltvOptions.map((function(e,t){return(0,i.jsx)(k,{ltvPercent:Ne,value:e,handleChangeLtvPercent:Oe},t)})),Ce(e),De(Le.current,g.iV.direct)}),[W,Ne]),(0,a.useEffect)((function(){var e,t,n;(null===W||void 0===W||null===(e=W.ltv_options)||void 0===e?void 0:e.at)?xe(null!==(n=null===W||void 0===W||null===(t=W.ltv_options)||void 0===t?void 0:t.at(-1))&&void 0!==n?n:S.ltvDefaultOption):xe(S.ltvDefaultOption)}),[W,j,S.ltvDefaultOption]);var Ie=function(e){clearTimeout(D.current),je(e),De(e,g.iV.direct)},Re=function(e){clearTimeout(D.current),X(e),De(e,g.iV.reverse)},Be=["btc","floki","jasmy","volt","bone","quack","babydoge"].includes(null===d||void 0===d?void 0:d.code)||(null===d||void 0===d?void 0:d.borrowTitle)?"Borrow Against ".concat((null===d||void 0===d||null===(t=d.customFields)||void 0===t?void 0:t.calculatorHeading)||d.name):"".concat((null===d||void 0===d||null===(n=d.customFields)||void 0===n?void 0:n.calculatorHeading)||(null===d||void 0===d?void 0:d.name)," Loan Calculator");return(0,i.jsxs)(_(),{ref:A,children:[!d&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:F().tabs,children:[(0,i.jsx)("div",{className:v()(F().tab,F().activeTab),children:(0,i.jsx)("p",{className:F().tabName,children:"Loans"})}),(0,i.jsxs)("div",{className:F().tab,onClick:function(){w.push("/earn")},children:[(0,i.jsx)("p",{className:F().tabName,children:"Savings"}),(0,i.jsx)("img",{src:O(),alt:"corner_image",className:F().corner,width:34,height:44})]})]}),(0,i.jsx)("div",{className:F().shadow})]}),(0,i.jsx)("div",{className:F().calculator,children:(0,i.jsxs)("div",{className:v()(F().selectionBlock,(0,l.Z)({},F().selectionBlockCoin,void 0!==d)),children:[(0,i.jsxs)("div",{className:F().noticeWrapper,children:[!d&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("h2",{className:F().title,children:"Borrow now & hold for later"})}),d&&(0,i.jsx)("h2",{className:F().title,children:Be})]}),(0,i.jsxs)("div",{className:F().inputsBlock,children:[(0,i.jsx)(u.ValidatorField,{value:Le.current,rules:m.Z.depositAmount(W),children:function(e){var t=e.isValid,n=e.message;return(0,i.jsx)(T.Z,{className:F().inputFrom,onEnter:Ae,coin:W,isLoading:le,onChangeAmount:Ie,onChangeCoin:Se,value:we,label:"Send collateral",list:ue,listFullWidth:!0,children:(fe||!t&&!le&&("\u2014"!==M||"\u2014"!==Le.current))&&(0,i.jsx)("div",{className:F().errorAmount,children:fe||n})})}}),(0,i.jsx)("div",{className:F().ltvWrapper,children:(0,i.jsxs)("div",{className:F().ltv,children:[(0,i.jsx)("span",{className:F().ltvTitle,children:"LTV"}),(0,i.jsx)("div",{className:F().ltvNotice,children:(0,i.jsx)(y.Z,{alt:"ltv-notice",children:"The loan-to-value ratio is the related difference between the loan amount and the current market value of the collateral. The higher the LTV, the more loan funds you will receive, but at the same time the margin call will be higher."})}),(0,i.jsx)("div",{className:F().ltvOptions,children:ge})]})}),(0,i.jsx)(u.ValidatorField,{value:M,rules:m.Z.loanAmount(G),children:function(e){var t=e.isValid,n=e.message;return(0,i.jsx)(T.Z,{className:F().inputTo,onEnter:Ae,coin:G,isLoading:ie,onChangeAmount:Re,onChangeCoin:Ve,value:M,label:"Get funds",list:ve,isStableFirst:!0,listFullWidth:!0,children:!fe&&!t&&!ie&&("\u2014"!==M||"\u2014"!==Le.current)&&(0,i.jsx)("div",{className:F().errorAmount,children:n})})}})]}),(0,i.jsx)(V,{exchange:Q,to:G,from:W})]})}),(0,i.jsx)(L.Z,{isLoading:te,disabled:!z,onClick:Ae,className:F().buttonGetLoan,children:"Get Loan"})]})}},69782:function(e,t,n){"use strict";var r,l,s,o,i,a;n.d(t,{Ny:function(){return o},iV:function(){return a}}),function(e){e.SELL="SELL",e.BUY="BUY"}(r||(r={})),function(e){e.SELL="SELL",e.BUY="BUY"}(l||(l={})),function(e){e.GET_LOAN="get_loan_button_clicked",e.LOAN_CONFIRMED="loan_confirmed",e.LOAN_SUCCESS="loan_success"}(s||(s={})),function(e){e.NEW="new",e.CONFIRMED="confirmed",e.CANCELLED="cancelled",e.DEPOSIT_RECEIVED="deposit_received",e.LOAN_FAILED="loan_failed",e.TRANSACTION_SENT="transaction_sent",e.LOAN_SUCCESS="loan_success",e.ORDER_CREATED="order_created",e.PLEDGE_REDEEMED="pledge_redeemed",e.PLEDGE_TRANSACTION_SENT="pledge_transaction_sent",e.PLEDGE_SENT="pledge_sent",e.CLOSED="closed",e.LIQUIDATED="liquidated",e.FAILED_BY_PARTNER="failed_by_partner"}(o||(o={})),function(e){e.NEW="NEW",e.RECEIVED_HASH="RECEIVED_HASH",e.VERIFIED="VERIFIED",e.SUCCESS="SUCCESS",e.FAILED="FAILED",e.REJECTED="REJECTED"}(i||(i={})),function(e){e.direct="direct",e.reverse="reverse"}(a||(a={}))},47050:function(e){e.exports={ltvOption:"styles_ltvOption___1Zkn",ltvOptionSelected:"styles_ltvOptionSelected___IO4c"}},61849:function(e){e.exports={termsContainer:"styles_termsContainer__Wbw3C",apr:"styles_apr__lb0cr",termsItem:"styles_termsItem__4rL00",loader:"styles_loader__eMFf5",termsName:"styles_termsName__PFfZh",termsValue:"styles_termsValue__kuuTD",crossed:"styles_crossed__W5EL6",highlighted:"styles_highlighted__YkFFQ",termsValue__text_highlighted:"styles_termsValue__text_highlighted__VO5z_",termsValue__text_inactive:"styles_termsValue__text_inactive__m1vv0",termsValue__text_space_right:"styles_termsValue__text_space_right__xWo8Z",termsValue__text_hidden:"styles_termsValue__text_hidden__jK59m",extraItem:"styles_extraItem__tRrXL"}},99451:function(e){e.exports={calculator:"styles_calculator__4eHV4",shadow:"styles_shadow__2CBAW",activeShadow:"styles_activeShadow__9chM4",tabs:"styles_tabs__bKqrD",tab:"styles_tab__5hDZU",icon:"styles_icon__Bq2pu",activeTab:"styles_activeTab__QDCU7",tabName:"styles_tabName___hdUT",noticeWrapper:"styles_noticeWrapper__OftKa",notice:"styles_notice__1XdWv",corner:"styles_corner__m3BIH",buttonGetLoan:"styles_buttonGetLoan__Vt3vr",coinCorner:"styles_coinCorner__Lq4pG",selectionBlock:"styles_selectionBlock__xEdV_",selectionBlockCoin:"styles_selectionBlockCoin__i6UiL",title:"styles_title__cf6s6",titleLoans:"styles_titleLoans__7VS8N",inputsBlock:"styles_inputsBlock__Tr_ws",ltvWrapper:"styles_ltvWrapper__ozJsj",ltv:"styles_ltv__4PZDV",ltvTitle:"styles_ltvTitle__t04TF",ltvNotice:"styles_ltvNotice__5niiw",ltvOptions:"styles_ltvOptions__UNv7N",inputFrom:"styles_inputFrom__aLqXE",inputTo:"styles_inputTo__eXXTo",lineDotsWrapper:"styles_lineDotsWrapper__k7UnM",resultBlock:"styles_resultBlock__dQwUQ",resultBlockValue:"styles_resultBlockValue__ypg7e",getCoin:"styles_getCoin__9mCw9",giveCoin:"styles_giveCoin__cVnhL",errorAmount:"styles_errorAmount__RxfWi",for:"styles_for__m3x1v",desktopOnly:"styles_desktopOnly__yGm3N",mobileOnly:"styles_mobileOnly__Oumpb"}}}]);