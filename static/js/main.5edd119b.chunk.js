(this["webpackJsonpnews-arevalo-andresleo"]=this["webpackJsonpnews-arevalo-andresleo"]||[]).push([[0],{137:function(e,t,n){e.exports=n.p+"static/media/avion.69accbef.png"},169:function(e,t,n){e.exports=n(270)},178:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},248:function(e,t,n){},255:function(e,t,n){},270:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),l=n(36),i=n(108),u=n(54),s=Object(u.c)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_NEWS_SUCCESS":return t.news;case"CLEAR_NEWS":case"ERROR":return[];default:return e}},loadingError:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR":return t.hasError;default:return e}},loadingInProgress:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_NEWS_IN_PROGRESS":return t.isLoading;default:return e}}}),m=n(136),E=function(e){return function(t){return function(n){var a;return console.groupCollapsed("Dispatching...",n.type),console.log("Previous State: ",e.getState()),console.log("Action: ",n),a=t(n),console.log("Next: ",e.getState()),console.groupEnd(),a}}},g=function(){return Object(u.e)(s,Object(u.d)(Object(u.a)(E,m.a),window.devToolsExtension?window.devToolsExtension():function(e){return e}))},d=(n(178),n(179),"https://api.canillitapp.com"),f=function(e){return{type:"ERROR",hasError:e}},p=function(e){return{type:"LOADING_NEWS_IN_PROGRESS",isLoading:e}},v=function(e,t){e({type:"CLEAR_NEWS"}),e(f(!1)),e(p(!0)),fetch(t).then((function(t){if(!t.ok)throw Error(t.statusText);return e(p(!1)),t})).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:"LOADING_NEWS_SUCCESS",news:e}}(t))})).catch((function(){return e(f(!0))}))},y=n(70),h=(n(180),n(273)),S=n(279),w=n(168),b=n(74),N=n(278),I=n(282),L=n(285),k=n(286),O=n(287),x=n(288),C=n(289),R=n(290),_=n(291),A=(n(181),n(137)),T=n.n(A),G=h.a.Sider,j=function(e){var t=e.collapsed;return r.a.createElement(G,{trigger:null,collapsible:!0,collapsed:t},r.a.createElement("div",{className:"logo"},r.a.createElement(N.a,{src:T.a,alt:"Logo",className:t?"logo-min":"logo-img"}),r.a.createElement(S.a.Title,{level:4,style:{display:t?"none":"flex",marginLeft:"10px"}},"Ac\xe1mica News")),r.a.createElement(I.a,{mode:"inline",defaultSelectedKeys:["1"]},r.a.createElement(I.a.Item,{key:"1",icon:r.a.createElement(L.a,null)},r.a.createElement(l.b,{to:"/home"},"Home")),r.a.createElement(I.a.Item,{key:"2",icon:r.a.createElement(k.a,null)},r.a.createElement(l.b,{to:"/category/1"},"Politica")),r.a.createElement(I.a.Item,{key:"3",icon:r.a.createElement(O.a,null)},r.a.createElement(l.b,{to:"/category/2"},"Internacional")),r.a.createElement(I.a.Item,{key:"4",icon:r.a.createElement(x.a,null)},r.a.createElement(l.b,{to:"/category/3"},"Tecnologia")),r.a.createElement(I.a.Item,{key:"5",icon:r.a.createElement(C.a,null)},r.a.createElement(l.b,{to:"/category/4"},"Espectaculos")),r.a.createElement(I.a.Item,{key:"6",icon:r.a.createElement(R.a,null)},r.a.createElement(l.b,{to:"/category/5"},"Deportes")),r.a.createElement(I.a.Item,{key:"7",icon:r.a.createElement(_.a,null)},r.a.createElement(l.b,{to:"/category/6"},"Dise\xf1o"))))},D=n(280),W=n(274),B=n(275),P=n(292),F=n(293),H=(n(248),h.a.Header),M=D.a.Search,z=function(e){var t=e.collapsed,n=e.onClickToggle,a=e.filterWord;return r.a.createElement(H,{className:"site-layout-background",style:{padding:0}},r.a.createElement(W.a,null,r.a.createElement(B.a,{span:18},r.a.createElement(t?P.a:F.a,{className:"trigger",onClick:n})),r.a.createElement(B.a,{span:6},r.a.createElement(M,{placeholder:"Buscar noticia...",onSearch:function(e){a(e)},style:{verticalAlign:"middle",paddingRight:"17px"},enterButton:!0}))))},J=n(277),U=n(276),K=n(281),Y=n(283),q=n(284),Q=n(294),V=function(e){var t=new Date(1e3*e),n=t.toLocaleDateString(),a=t.toLocaleTimeString();return"".concat(n," ").concat(a)},X=(n(255),S.a.Title),Z=function(e){var t=e.newInfo,n=e.isLoading,a=t.category,c=t.date,o=t.img_url,l=t.source_name,i=t.title,u=t.url,s=function(e){var t=e.icon,n=e.text;return r.a.createElement(U.a,null,r.a.createElement(t),n)};return r.a.createElement(J.b.Item,{key:i,actions:[r.a.createElement(K.a,{loading:n,active:!0},r.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s,{icon:Q.a,text:"Leer m\xe1s en ".concat(l),key:"list-vertical-star-o"})))],extra:n?r.a.createElement(K.a.Image,null):r.a.createElement(N.a,{width:272,alt:"logo",src:o||"https://image.flaticon.com/icons/svg/3076/3076074.svg"})},r.a.createElement(K.a,{avatar:!0,title:!1,loading:n,active:!0},r.a.createElement(J.b.Item.Meta,{avatar:r.a.createElement(Y.a,{src:"https://image.flaticon.com/icons/svg/3075/3075976.svg"}),title:r.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(X,{level:4},i)),description:r.a.createElement("div",null,r.a.createElement(q.a,{color:"blue"},a||"Todas"),V(c))}),i))},$=new Array(10).fill().map((function(e,t){return t})),ee=S.a.Title,te=function(e){var t=e.news,n=e.isLoading;return r.a.createElement(J.b,{itemLayout:"vertical",size:"large",loading:n,locale:{emptyText:r.a.createElement(b.a,{imageStyle:{verticalAlign:"middle",height:120},description:r.a.createElement(ee,{level:3},"No se encontraron resultados.")})},pagination:{onChange:function(e){},pageSize:10},dataSource:n?$:t,renderItem:function(e){return r.a.createElement(Z,{newInfo:e,isLoading:n})}})},ne=n(24),ae=h.a.Content,re=S.a.Title,ce=Object(i.b)((function(e){return{news:e.news,hasError:e.loadingError,isLoading:e.loadingInProgress}}),(function(e,t){return{onGetNews:function(t){return e(function(e){return function(t){var n="".concat(d,"/latest/").concat(e);v(t,n)}}(t))},onGetNewsByCategory:function(t){return e(function(e){return function(t){var n="".concat(d,"/news/category/").concat(e);v(t,n)}}(t))},onGetNewsByFilterWord:function(t){return e((n=t,function(e){var t="".concat(d,"/search/").concat(n);v(e,t)}));var n},onClearNews:function(){return e({type:"CLEAR_NEWS"})}}}))((function(e){var t=e.onGetNews,n=e.onGetNewsByCategory,c=e.onGetNewsByFilterWord,o=e.news,l=e.hasError,i=e.isLoading,u=Object(a.useState)(!1),s=Object(y.a)(u,2),m=s[0],E=s[1],g=Object(ne.f)().id,d=Object(a.useCallback)((function(){g?n(g):f(t)}),[g,t]);Object(a.useEffect)((function(){d()}),[d]);var f=function(e){e(function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return e="".concat(a,"-").concat(n,"-").concat(t)}())};return r.a.createElement(h.a,null,r.a.createElement(j,{collapsed:m}),r.a.createElement(h.a,{className:"site-layout"},r.a.createElement(z,{collapsed:m,onClickToggle:function(){E(!m)},filterWord:c}),r.a.createElement(ae,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:800}},l?r.a.createElement(r.a.Fragment,null,w.b.error("Se presento un error"),r.a.createElement(b.a,{imageStyle:{verticalAlign:"middle",height:120},description:r.a.createElement(re,{level:3},"No se encontraron resultados.")})):r.a.createElement(te,{news:o,isLoading:i}))))}));var oe=function(){return r.a.createElement(ne.c,null,r.a.createElement(ne.a,{exact:!0,path:"/",component:ce}),r.a.createElement(ne.a,{exact:!0,path:"/home",component:ce}),r.a.createElement(ne.a,{exact:!0,path:"/category/:id?",component:ce}))},le=g();o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:le},r.a.createElement(l.a,null,r.a.createElement(oe,null)))),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.5edd119b.chunk.js.map