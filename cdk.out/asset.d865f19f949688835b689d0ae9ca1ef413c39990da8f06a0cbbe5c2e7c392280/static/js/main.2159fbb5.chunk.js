(this["webpackJsonpmui-ui-react"]=this["webpackJsonpmui-ui-react"]||[]).push([[0],{102:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getHeadLines",(function(){return v})),n.d(a,"setSearchString",(function(){return f})),n.d(a,"getSearchResults",(function(){return g}));var r=n(0),c=n.n(r),i=n(31),s=n.n(i),o=(n(102),n(66)),l=n(15),u=n(14),d=n(5),j=n(33),b=n(37),h=n(59),O="GET_HEADLINES",x="GET_EVERYTHING",p="SET_SEARCHSTRING";function v(e){return function(){var t=Object(h.a)(Object(b.a)().mark((function t(n){var a,r;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://2soehekin9.execute-api.us-east-1.amazonaws.com/dev/headlines/".concat(e));case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,n({type:O,payload:r});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function f(e){return function(){var t=Object(h.a)(Object(b.a)().mark((function t(n){return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("inside dispatch"),n({type:p,payload:e});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function g(e){return function(){var t=Object(h.a)(Object(b.a)().mark((function t(n){var a,r;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://2soehekin9.execute-api.us-east-1.amazonaws.com/dev/everything/".concat(e));case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,n({type:x,payload:r});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var m=n(22),y=n(178),w=n(55),S=n(6),k=n(185),E=n(187),C=n(188),T=n(189),I=n(190),L=n(173),R=n(176),N=n(182),D=n(180),G=n(36),F=n(82),W=n.n(F),A=n(83),B=n.n(A),H=n(84),P=n.n(H),z=n(80),M=n.n(z),Y=n(177),_=n(2),J=["expand"],K=Object(S.a)((function(e){e.expand;var t=Object(w.a)(e,J);return Object(_.jsx)(N.a,Object(m.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}}));function V(e){var t=r.useState(!1),n=Object(u.a)(t,2),a=n[0],c=n[1];return Object(_.jsxs)(k.a,{sx:{maxWidth:345},children:[Object(_.jsx)(E.a,{avatar:Object(_.jsx)(R.a,{sx:{bgcolor:G.a[500]},"aria-label":"url",children:e.source.name}),action:Object(_.jsx)(N.a,{"aria-label":"settings",children:Object(_.jsx)(M.a,{})}),title:e.title,subheader:e.publishedAt}),Object(_.jsx)(C.a,{component:"img",height:"194",image:e.urlToImage,alt:e.title}),Object(_.jsx)(T.a,{children:Object(_.jsx)(D.a,{variant:"body2",color:"text.secondary",children:e.content})}),Object(_.jsxs)(I.a,{disableSpacing:!0,children:[Object(_.jsx)(N.a,{"aria-label":"add to favorites",children:Object(_.jsx)(W.a,{})}),Object(_.jsx)(N.a,{"aria-label":"share",children:Object(_.jsx)(B.a,{})}),Object(_.jsx)(K,{expand:a,onClick:function(){c(!a)},"aria-expanded":a,"aria-label":"show more",children:Object(_.jsx)(P.a,{})})]}),Object(_.jsx)(L.a,{in:a,timeout:"auto",unmountOnExit:!0,children:Object(_.jsxs)(T.a,{children:[Object(_.jsx)(D.a,{paragraph:!0,children:e.content}),Object(_.jsx)(D.a,{paragraph:!0,children:Object(_.jsx)(Y.a,{href:e.url,children:e.source.name})})]})})]})}var q=Object(j.b)((function(e){return{headlines:e.headlines,everything:e.everything}}),a)((function(e){var t,n,a,c,i=Object(r.useState)([]),s=Object(u.a)(i,2),o=s[0],l=s[1];return Object(r.useEffect)((function(){var t,n;l(null===e||void 0===e||null===(t=e.headlines)||void 0===t||null===(n=t.headlines)||void 0===n?void 0:n.articles)}),[null===e||void 0===e||null===(t=e.headlines)||void 0===t||null===(n=t.headlines)||void 0===n?void 0:n.articles]),Object(r.useEffect)((function(){var t,n;l(null===e||void 0===e||null===(t=e.everything)||void 0===t||null===(n=t.everything)||void 0===n?void 0:n.articles)}),[null===e||void 0===e||null===(a=e.everything)||void 0===a||null===(c=a.everything)||void 0===c?void 0:c.articles]),Object(_.jsx)(y.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:null===o||void 0===o?void 0:o.map((function(e,t){return Object(_.jsx)(y.a,{item:!0,xs:4,children:Object(r.createElement)(V,Object(m.a)(Object(m.a)({},e),{},{key:t}))})}))})})),Q=n(160),U=n(170),X=n(85),Z=n.n(X),$=n(175),ee=n(169),te=n(167),ne=n(179),ae=n(191),re=["classes","loading","done"],ce=function(e){console.log(e);var t=e.classes,n=e.loading,a=e.done,r=Object(w.a)(e,re);return a?Object(_.jsx)(ne.a,Object(m.a)(Object(m.a)({className:t.button},r),{},{disabled:!0,children:Object(_.jsx)(te.a,{})})):n?Object(_.jsx)(ne.a,Object(m.a)(Object(m.a)({className:t.button},r),{},{children:Object(_.jsx)(ae.a,{})})):Object(_.jsx)(ne.a,Object(m.a)({className:t.button},r))};ce.defaultProps={loading:!1,done:!1};var ie=Object(ee.a)((function(e){return{button:{margin:10}}}))(ce),se=Object(S.a)("div")((function(e){var t=e.theme;return Object(d.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(Q.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(Q.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),oe=Object(S.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),le=Object(S.a)(U.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(d.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var ue=Object(j.b)((function(e){return{data:e}}),a)((function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),a=n[0],c=n[1];return Object(_.jsxs)($.a,{children:[Object(_.jsx)("br",{}),Object(_.jsx)("br",{}),Object(_.jsx)("br",{}),Object(_.jsxs)(se,{children:[Object(_.jsx)(oe,{children:Object(_.jsx)(Z.a,{})}),Object(_.jsx)(le,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"},onKeyDown:function(t){var n;"Enter"===(n=t).key&&(c(!0),n.preventDefault(),e.setSearchString(n.target.value),e.getSearchResults(n.target.value),c(!1))}})]}),Object(_.jsx)(ie,{loading:a,done:a}),Object(_.jsx)(q,{})]})})),de=function(e){return Object(_.jsxs)(l.d,{children:[Object(_.jsx)(l.b,{path:"/",exact:!0,children:Object(_.jsx)(l.a,{to:"/home"})}),Object(_.jsx)(l.b,{path:"/home",component:ue})]})},je=n(181),be=n(13),he=n(183),Oe=n(184),xe=n(87),pe=n.n(xe),ve=n(172);var fe=Object(j.b)((function(e){return{data:e.headlines}}),a)((function(e){var t,n,a=(n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.headlines,Object(be.a)(new Set(null===n||void 0===n?void 0:n.articles.map((function(e){return e.source.name}))))||[]);return Object(_.jsx)(je.a,{children:Object(_.jsx)(he.a,{position:"fixed",children:Object(_.jsxs)(Oe.a,{children:[Object(_.jsx)(N.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:Object(_.jsx)(pe.a,{})}),Object(_.jsx)(D.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:Object(_.jsx)(je.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:null===a||void 0===a?void 0:a.map((function(e){return Object(_.jsx)(ve.a,{children:Object(_.jsx)(D.a,{textAlign:"center",children:e})},e)}))})})]})})})}));function ge(){return Object(_.jsxs)(D.a,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",Object(_.jsx)(Y.a,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}n(113);var me=function(){return Object(_.jsx)("div",{className:"footer",children:Object(_.jsx)(ge,{})})};var ye=function(){return Object(_.jsx)($.a,{maxWidth:"lg",children:Object(_.jsx)(je.a,{children:Object(_.jsx)(D.a,{variant:"h4",component:"h1",gutterBottom:!0,children:Object(_.jsxs)(o.a,{children:[Object(_.jsx)(fe,{}),Object(_.jsx)(ue,{}),Object(_.jsx)(de,{}),Object(_.jsx)(me,{})]})})})})},we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},Se=n(42),ke={everything:{},searchString:""},Ee={headlines:{}},Ce=Object(Se.combineReducers)({headlines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;return t.type===O?Ee={headlines:t.payload}:e},everything:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return ke={everything:t.payload,searchString:e.searchString};case p:return ke={searchString:t.payload,everything:e.everything};default:return e}}}),Te=n(89),Ie=n(88),Le=[Te.a],Re=Object(Se.createStore)(Ce,{headlines:{}},Object(Ie.composeWithDevTools)(Se.applyMiddleware.apply(void 0,Le)));Re.dispatch(v("us"));var Ne=Re;s.a.render(Object(_.jsxs)(c.a.StrictMode,{children:[Object(_.jsx)(j.a,{store:Ne,children:Object(_.jsx)(ye,{})}),","]}),document.getElementById("root")),we()}},[[114,1,2]]]);
//# sourceMappingURL=main.2159fbb5.chunk.js.map