(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2425)}])},2425:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return er},default:function(){return ea}});var i=n(5893),l=n(967),r=n(8618),a=n(5161),o=n(8783),s=n(9078),d=n(8519),c=n(1293),u=n(7747),x=n(6948),h=n(5227),A=n(2495),p=n(6554),j=n(7030),g=n(3179),f=n(9417),[v,m]=(0,h.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),b=(0,p.G)(function(e,t){let n=(0,j.jC)("List",e),{children:l,styleType:r="none",stylePosition:a,spacing:o,...s}=(0,g.Lr)(e),d=(0,A.W)(l);return(0,i.jsx)(v,{value:n,children:(0,i.jsx)(f.m.ul,{ref:t,listStyleType:r,listStylePosition:a,role:"list",__css:{...n.container,...o?{"& > *:not(style) ~ *:not(style)":{mt:o}}:{}},...s,children:d})})});b.displayName="List",(0,p.G)((e,t)=>{let{as:n,...l}=e;return(0,i.jsx)(b,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...l})}).displayName="OrderedList",(0,p.G)(function(e,t){let{as:n,...l}=e;return(0,i.jsx)(b,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...l})}).displayName="UnorderedList";var y=(0,p.G)(function(e,t){let n=m();return(0,i.jsx)(f.m.li,{ref:t,...e,__css:n.item})});y.displayName="ListItem";var w=(0,p.G)(function(e,t){let n=m();return(0,i.jsx)(x.J,{ref:t,role:"presentation",...e,__css:n.icon})});w.displayName="ListIcon";var C=n(2883),_=n(4292),k=n(4225),[S,P]=(0,n(5607).eC)("Card"),I=n(5432),L=(0,p.G)(function(e,t){let{className:n,children:l,direction:r="column",justify:a,align:o,...s}=(0,g.Lr)(e),d=(0,j.jC)("Card",e);return(0,i.jsx)(f.m.div,{ref:t,className:(0,I.cx)("chakra-card",n),__css:{display:"flex",flexDirection:r,justifyContent:a,alignItems:o,position:"relative",minWidth:0,wordWrap:"break-word",...d.container},...s,children:(0,i.jsx)(S,{value:d,children:l})})}),z=(0,p.G)(function(e,t){let{className:n,...l}=e,r=P();return(0,i.jsx)(f.m.div,{ref:t,className:(0,I.cx)("chakra-card__body",n),__css:r.body,...l})}),E=n(5281),D=n(2757),M=(0,p.G)(function(e,t){let{className:n,justify:l,...r}=e,a=P();return(0,i.jsx)(f.m.div,{ref:t,className:(0,I.cx)("chakra-card__footer",n),__css:{display:"flex",justifyContent:l,...a.footer},...r})}),N=n(5541),Q=n(9778),H=n(7251),T=n(4859),W=n(6205),F=n(6556),O=n(4253),B=n(9777),G=n(9008),U=n.n(G),R=n(5675),Z=n.n(R),V=n(8193),X=n(1342),Y=n(119),K=n.n(Y),q=n(7294),J=n(8337),$=n(4346),ee=n(5960),et=n(9630),en={src:"/_next/static/media/img.87cc5afa.jpg",height:3120,width:4208,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAT/2gAMAwEAAhADEAAAAJoWf//EABsQAAMAAgMAAAAAAAAAAAAAAAECEQMFABMh/9oACAEBAAE/ANv1DdvMQdnmSsZSqhfef//EABoRAAICAwAAAAAAAAAAAAAAAAEDAAIEEXH/2gAIAQIBAT8AxmtCa6bccsRP/8QAHBEAAQMFAAAAAAAAAAAAAAAAAQACAwQREyEi/9oACAEDAQE/AKqCHILxMPIO2gr/2Q==",blurWidth:8,blurHeight:6};let ei={selectedDataId:null,filterProjectActive:"ALL",filterProjectPlatformActive:"ALL"};function el(e,t){switch(t.type){case"filter-button-change":return{...e,filterProjectActive:t.payload.data};case"filter-platform-button-change":return{...e,filterProjectPlatformActive:t.payload.data};case"select-project-change":return{...e,selectedDataId:t.payload.data};default:return e}}var er=!0;function ea(e){var t,n,x,h,A,p,j,g,f,v,m,S,P,I,B,G,R,Y,ee,et,er,ea,eo,es,eu,ex,eh,eA,ep,ej,eg,ef,ev;let{data:em,dataJobs:eb,dataProjects:ey,dataProjectTypes:ew,dataProjectPlatform:eC}=e,{isOpen:e_,onOpen:ek,onClose:eS}=(0,l.q)(),{isOpen:eP,onOpen:eI,onClose:eL}=(0,l.q)(),[ez]=(0,r.a)("(min-width: ".concat(X.AV.lg,")"),{ssr:!0,fallback:!1}),[eE,eD]=(0,q.useReducer)(el,ei),eM=(0,q.useMemo)(()=>Array.isArray(ey)?ey.filter(e=>{var t;let{attributes:n}=e;return"ALL"===eE.filterProjectActive||null!=n&&null!==(t=n.project_type)&&void 0!==t&&!!t.data&&parseInt(eE.filterProjectActive)===parseInt(n.project_type.data.id)}).filter(e=>{var t;let{attributes:n}=e;return"ALL"===eE.filterProjectPlatformActive||null!=n&&null!==(t=n.project_platform)&&void 0!==t&&!!t.data&&parseInt(eE.filterProjectPlatformActive)===parseInt(n.project_platform.data.id)}):[],[eE.filterProjectActive,eE.filterProjectPlatformActive,ey]),eN=(0,q.useMemo)(()=>Array.isArray(ey)?ey.find(e=>{let{id:t}=e;return parseInt(eE.selectedDataId)===parseInt(t)}):null,[eE.selectedDataId,ey]),eQ=(0,q.useMemo)(()=>!1,[]),eH=(0,a.ff)({hover:"blackAlpha.50",active:"blackAlpha.100",borderColor:"gray.100"},{hover:"bgLayer2",active:"bgLayer1",borderColor:"bgLayer3"});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(U(),{children:[(0,i.jsx)("title",{children:"Halo"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)(o.g,{w:["100%"],height:["100%"],spacing:["50px","100px"],paddingX:[0,null,null,null,"48px","0"],backgroundColor:"bgLayer2",color:"textLayer1",paddingBottom:["100px"],overflowX:"hidden",children:[em&&(0,i.jsx)(ed,{children:(0,i.jsxs)(s.r,{w:["100%"],height:["100%"],gridTemplateColumns:["1fr","repeat(2, 1fr)"],paddingY:["64px"],gap:["30px"],alignItems:["center"],children:[(0,i.jsx)(d.P,{children:(0,i.jsxs)(o.g,{w:["100%"],height:["100%"],alignItems:["flex-start"],spacing:["10px"],justifyContent:["center"],children:[(0,i.jsx)(c.x,{fontSize:["6xl","8xl","9xl"],as:"h1",fontWeight:["bold"],lineHeight:["1em"],children:em&&em.attributes.haloHeader}),(0,i.jsxs)(c.x,{fontSize:["xl","3xl","4xl"],children:["Im ",(0,i.jsx)(u.xu,{as:"span",children:em&&em.attributes.nama}),(0,i.jsx)("br",{}),"Im a"," ",(0,i.jsx)(u.xu,{as:"span",color:["brand.50"],fontSize:["2xl","4xl","5xl"],fontWeight:["bold"],whiteSpace:["nowrap"],children:em&&em.attributes.job})]})]})}),ez&&!!em&&(0,i.jsx)(d.P,{children:(0,i.jsx)(o.g,{w:["100%"],height:["100%"],spacing:["16px"],children:(0,i.jsx)(u.xu,{w:["0",null,null,"400px","450px"],height:["0",null,null,"400px","450px"],position:["relative"],borderWidth:["5px","15px"],borderColor:["brand.50"],borderRadius:["50%"],overflow:["hidden"],children:(0,i.jsx)(Z(),{src:eQ?"".concat("http://localhost:1337").concat(null==em?void 0:null===(h=em.attributes)||void 0===h?void 0:null===(x=h.profile)||void 0===x?void 0:null===(n=x.data)||void 0===n?void 0:null===(t=n.attributes)||void 0===t?void 0:t.url):en,alt:"profile-rhafael",fill:!0,sizes:"(min-width: ".concat(X.AV.lg,") 400px, (min-width: ").concat(X.AV.xl,") 450px"),priority:!0})})})})]})}),em&&(0,i.jsx)(ed,{title:em.attributes.tentangSayaHeader||"Tentang Saya",children:(0,i.jsx)(u.xu,{fontSize:["lg","xl","2xl","3xl"],dangerouslySetInnerHTML:{__html:em.attributes.tentangSaya},className:K().content})}),em&&(0,i.jsx)(ed,{title:em.attributes.kontakHeader||"Kontak Saya",children:(0,i.jsxs)(o.g,{w:["100%"],height:["100%"],alignItems:["flex-start"],spacing:["20px"],children:[em&&(0,i.jsx)(u.xu,{fontSize:["lg","xl","2xl","3xl"],dangerouslySetInnerHTML:{__html:em.attributes.kontak},className:K().content}),(0,i.jsxs)(b,{spacing:3,children:[(0,i.jsx)(y,{children:(0,i.jsxs)(C.r,{href:em.attributes.github,fontSize:["lg","xl","2xl","3xl"],verticalAlign:["middle"],textDecoration:"underline",_hover:{textDecoration:"none"},children:[(0,i.jsx)(w,{as:V.RrF}),"Github"]})}),(0,i.jsx)(y,{children:(0,i.jsxs)(C.r,{href:"mailto:"+em.attributes.email,fontSize:["lg","xl","2xl","3xl"],verticalAlign:["middle"],textDecoration:"underline",_hover:{textDecoration:"none"},children:[(0,i.jsx)(w,{as:V.Uh$}),"Email"]})}),(0,i.jsx)(y,{children:(0,i.jsxs)(C.r,{href:em.attributes.linkedin,fontSize:["lg","xl","2xl","3xl"],verticalAlign:["middle"],textDecoration:"underline",_hover:{textDecoration:"none"},children:[(0,i.jsx)(w,{as:V._iD}),"Linkedin"]})})]})]})}),em&&Array.isArray(eb)&&(0,i.jsx)(ed,{title:em.attributes.riwayatPekerjaanHeader||"Riwayat Pekerjaan",containerProps:{spacing:["32px"]},children:(0,i.jsx)(s.r,{w:["100%"],height:["100%"],gridTemplateColumns:["repeat(6, 1fr)"],gap:["50px 0"],children:eb.map((e,t)=>{let{id:n,attributes:l}=e;return(0,i.jsx)(ec,{attributes:l,isLg:ez,index:t},n)})})}),(0,i.jsxs)(o.g,{w:["100%"],height:["100%"],alignItems:["flex-start"],spacing:["50px"],children:[em&&Array.isArray(eb)&&(0,i.jsxs)(ed,{title:em.attributes.riwayatProjek||"Riwayat Projek",children:[(0,i.jsx)(u.xu,{fontSize:["lg","xl","2xl","3xl"],dangerouslySetInnerHTML:{__html:em.attributes.projek},className:K().content}),(0,i.jsxs)(_.U,{marginTop:["20px!important"],w:["100%"],h:["100%"],alignItems:["flex-start"],children:[(0,i.jsx)(k.z,{onClick:()=>eD({type:"filter-button-change",payload:{data:"ALL"}}),variant:"ALL"===eE.filterProjectActive?"brand":"brandOutline",children:"All"}),Array.isArray(ew)&&ew.map(e=>{let{id:t,attributes:n}=e;return(0,i.jsx)(k.z,{onClick:()=>eD({type:"filter-button-change",payload:{data:t}}),variant:eE.filterProjectActive===t?"brand":"brandOutline",children:n.judul},t)})]}),(0,i.jsxs)(_.U,{marginTop:["20px!important"],w:["100%"],h:["100%"],alignItems:["flex-start"],children:[(0,i.jsx)(k.z,{onClick:()=>eD({type:"filter-platform-button-change",payload:{data:"ALL"}}),variant:"ALL"===eE.filterProjectPlatformActive?"brand":"brandOutline",children:"All"}),Array.isArray(eC)&&eC.map(e=>{let{id:t,attributes:n}=e;return(0,i.jsx)(k.z,{onClick:()=>eD({type:"filter-platform-button-change",payload:{data:t}}),variant:eE.filterProjectPlatformActive===t?"brand":"brandOutline",children:n.platform_name},t)})]})]}),Array.isArray(eM)&&eM.length>0&&(0,i.jsx)(ed,{children:(0,i.jsx)(s.r,{w:["100%"],h:["100%"],templateColumns:["repeat(1, 1fr)",null,"repeat(2, 1fr)",null,"repeat(3, 1fr)"],gap:["60px 30px"],children:eM.map(e=>{let{id:t,attributes:n}=e;return(0,i.jsx)(d.P,{children:(0,i.jsxs)(L,{shadow:"xl",bgColor:["bgLayer3"],_hover:{backgroundColor:eH.hover},_active:{backgroundColor:eH.active},borderColor:eH.borderColor,borderWidth:["1px"],w:["100%"],h:["100%"],cursor:"pointer",onClick:()=>{eD({type:"select-project-change",payload:{data:t}}),ek()},children:[(0,i.jsx)(z,{children:(0,i.jsxs)(E.K,{h:["100%"],mt:"6",spacing:"3",children:[(0,i.jsx)(D.X,{size:["xl"],color:["brand.50"],children:n.judul}),(0,i.jsx)(c.x,{fontSize:["lg"],color:["textLayer1"],children:n.deskripsiSingkat})]})}),(0,i.jsx)(M,{children:(0,i.jsx)(_.U,{w:["100%"],height:["100%"],justifyContent:["flex-start"],flexWrap:["wrap"],spacing:[0],children:(0,i.jsx)(c.x,{fontWeight:["bold"],color:"brand.50",fontSize:["md"],children:n.project_tools.data.map(e=>{let{id:t,attributes:n}=e;return(0,i.jsxs)(q.Fragment,{children:["#",n.judul," "]},t)})})})})]})},t)})})})]})]}),(0,i.jsxs)(N.u_,{size:"xl",isOpen:e_,onClose:eS,children:[(0,i.jsx)(Q.Z,{}),(0,i.jsxs)(H.h,{children:[(0,i.jsxs)(T.x,{color:"brand.50",children:["Project"," ",null==eN?void 0:null===(g=eN.attributes)||void 0===g?void 0:null===(j=g.project_type)||void 0===j?void 0:null===(p=j.data)||void 0===p?void 0:null===(A=p.attributes)||void 0===A?void 0:A.judul]}),(0,i.jsx)(W.o,{color:"brand.50"}),(0,i.jsx)(F.f,{children:(0,i.jsxs)(o.g,{w:["100%"],h:["100%"],alignItems:["flex-start"],spacing:["30px"],children:[eQ&&(0,i.jsx)(u.xu,{w:["100%"],h:["250px"],bgColor:["brand.500"],position:["relative"],cursor:["pointer"],onClick:eI,children:eN&&(0,i.jsx)(Z(),{src:"".concat("http://localhost:1337").concat(null==eN?void 0:null===(S=eN.attributes)||void 0===S?void 0:null===(m=S.gambarProjek)||void 0===m?void 0:null===(v=m.data)||void 0===v?void 0:null===(f=v.attributes)||void 0===f?void 0:f.url),alt:"Image-Of-Project-".concat(eN&&(null==eN?void 0:null===(P=eN.attributes)||void 0===P?void 0:P.judul)),fill:!0,objectFit:"contain",sizes:"90vw, (min-width: ".concat(X.AV.sm,") 90vw, (min-width: ").concat(X.AV.md,") 80vw, (min-width: ").concat(X.AV.lg,") 60vw, (min-width: ").concat(X.AV.xl,") 40vw")})}),(0,i.jsxs)(o.g,{w:["100%"],h:["100%"],alignItems:["flex-start"],children:[(0,i.jsx)(D.X,{fontSize:["lg","xl","2xl","3xl"],fontWeight:["bold"],color:["brand.50"],children:eN&&(null==eN?void 0:null===(I=eN.attributes)||void 0===I?void 0:I.judul)}),(0,i.jsxs)(c.x,{title:"proses pengembangan",fontSize:["xl"],children:[(0,J.Z)(eN&&(null==eN?void 0:null===(B=eN.attributes)||void 0===B?void 0:B.waktuMulaiDevelop))," ","-"," ",(0,J.Z)(eN&&(null==eN?void 0:null===(G=eN.attributes)||void 0===G?void 0:G.waktuSelesaiDevelop))]}),(0,i.jsxs)(c.x,{title:"proses pengembangan",fontSize:["xl"],children:["Project Type :"," ",eN&&(null==eN?void 0:null===(Y=eN.attributes)||void 0===Y?void 0:null===(R=Y.project_type)||void 0===R?void 0:R.data)&&(null==eN?void 0:null===(ea=eN.attributes)||void 0===ea?void 0:null===(er=ea.project_type)||void 0===er?void 0:null===(et=er.data)||void 0===et?void 0:null===(ee=et.attributes)||void 0===ee?void 0:ee.judul)]}),(0,i.jsxs)(c.x,{title:"proses pengembangan",fontSize:["xl"],children:["Technology Used :"," ",eN&&(null==eN?void 0:null===(eu=eN.attributes)||void 0===eu?void 0:null===(es=eu.project_tools)||void 0===es?void 0:null===(eo=es.data)||void 0===eo?void 0:eo.map((e,t,n)=>{let{id:l,attributes:r}=e;return(0,i.jsxs)(q.Fragment,{children:[null==r?void 0:r.judul,t<n.length-1&&", "]},l)}))]})]}),(0,i.jsx)(c.x,{fontSize:["xl"],children:eN&&(null==eN?void 0:null===(ex=eN.attributes)||void 0===ex?void 0:ex.deskripsiPanjang)})]})}),(0,i.jsx)(O.m,{children:(0,i.jsxs)(_.U,{w:["100%"],justifyContent:["flex-end"],children:[eN&&(null==eN?void 0:null===(eh=eN.attributes)||void 0===eh?void 0:eh.tautan)&&(0,i.jsx)(k.z,{variant:"brand",onClick:eS,as:C.r,href:null==eN?void 0:null===(eA=eN.attributes)||void 0===eA?void 0:eA.tautan,children:"Check out this app"}),(0,i.jsx)(k.z,{variant:"brandOutline",onClick:eS,children:"Close"})]})})]})]}),eN&&(0,i.jsx)($.Z,{judul:null==eN?void 0:null===(ep=eN.attributes)||void 0===ep?void 0:ep.judul,url:null==eN?void 0:null===(ev=eN.attributes)||void 0===ev?void 0:null===(ef=ev.gambarProjek)||void 0===ef?void 0:null===(eg=ef.data)||void 0===eg?void 0:null===(ej=eg.attributes)||void 0===ej?void 0:ej.url,isOpen:eP,onClose:eL})]})}let eo=(0,f.m)(ee.E.div,{shouldForwardProp:e=>(0,et.Z)(e)||(0,B.x)(e)}),es={offscreen:{opacity:0,x:500,transition:{duration:1}},onscreen:{opacity:1,x:0,transition:{duration:1}}};function ed(e){let{title:t="",children:n,containerProps:l={}}=e;return(0,i.jsx)(eo,{w:["100%"],h:["100%"],initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:"some"},children:(0,i.jsx)(eo,{w:["100%"],h:["100%"],variants:es,children:(0,i.jsxs)(o.g,{w:["100%"],height:["100%"],alignItems:["flex-start"],...l,children:[t&&(0,i.jsx)(D.X,{as:"h1",color:["brand.50"],fontWeight:["bold"],fontSize:["2xl","3xl","4xl","5xl"],children:t}),n]})})})}function ec(e){let{attributes:t,isLg:n,index:l}=e,[r,a]=(0,q.useState)(()=>0==l),s=(0,q.useMemo)(()=>!n||r,[r,n]);return(0,i.jsxs)(q.Fragment,{children:[n&&(0,i.jsx)(d.P,{children:(0,i.jsxs)(o.g,{w:["100%"],height:["100%"],children:[(0,i.jsx)(u.xu,{w:["70px"],h:["70px"],backgroundColor:["brand.50"],borderRadius:["50%"],borderWidth:["7px"],flexShrink:[0],display:"flex",justifyContent:["center"],alignItems:["center"],fontSize:["md"],color:["white"],fontWeight:["bold"],as:"button",onClick:()=>a(e=>!e),transform:[s?"":"rotate(180deg)"],transition:["0.3s"],title:"".concat(s?"Close":"Open"," Section"),children:(0,i.jsx)(V.j9E,{})}),s&&(0,i.jsx)(u.xu,{w:["10px"],h:["100%"],backgroundColor:["brand.50"]})]})}),(0,i.jsx)(d.P,{colSpan:[6,5],children:(0,i.jsxs)(o.g,{w:["100%"],h:["100%"],spacing:["32px"],alignItems:["flex-start"],children:[(0,i.jsxs)(o.g,{w:["100%"],alignItems:["flex-start"],children:[t.tautan?(0,i.jsx)(C.r,{fontSize:["xl","2xl","3xl"],fontWeight:["bold"],lineHeight:["1.1em"],href:t.tautan,textDecoration:"underline",_hover:{textDecoration:"none"},children:t.namaPerusahaan}):(0,i.jsx)(c.x,{fontSize:["xl","2xl","3xl"],fontWeight:["bold"],lineHeight:["1.1em"],children:t.namaPerusahaan}),(0,i.jsxs)(c.x,{fontSize:["lg","xl","2xl"],lineHeight:["1.1em"],children:["As ",t.jabatan]}),s&&(0,i.jsxs)(c.x,{fontSize:["lg","xl","xl"],lineHeight:["1.1em"],children:[(0,J.Z)(t.dari)," -"," ",t.sampai?(0,J.Z)(t.sampai):"Now"]})]}),s&&(0,i.jsx)(o.g,{w:["100%"],alignItems:["flex-start"],children:(0,i.jsx)(c.x,{fontSize:["lg","xl"],lineHeight:["1.5em",null,null,null,"1.3em"],children:t.deskripsi})})]})})]})}},4346:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var i=n(5893),l=n(119),r=n.n(l),a=n(5541),o=n(9778),s=n(7251),d=n(4859),c=n(6205),u=n(6556),x=n(4292),h=n(4253),A=n(4225),p=n(5675),j=n.n(p);function g(e){let{onClose:t,isOpen:n,judul:l,url:p}=e;return(0,i.jsxs)(a.u_,{onClose:t,size:"full",isOpen:n,children:[(0,i.jsx)(o.Z,{}),(0,i.jsxs)(s.h,{children:[(0,i.jsx)(d.x,{children:l}),(0,i.jsx)(c.o,{}),(0,i.jsx)(u.f,{display:["grid"],gridTemplateColumns:["1fr"],gridTemplateRows:["1fr"],children:(0,i.jsx)(x.U,{w:["100%"],h:["100%"],position:["relative"],children:(0,i.jsx)(j(),{src:"".concat("http://localhost:1337").concat(p),alt:"Project",fill:!0,sizes:"90vw",className:r().objectFit})})}),(0,i.jsx)(h.m,{children:(0,i.jsx)(A.z,{variant:"brand",onClick:t,children:"Close"})})]})]})}},8337:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(7484),l=n.n(i);function r(e){return l()(e).format("MMMM DD, YYYY")}},119:function(e){e.exports={content:"styles_content__rt8Pq",objectFit:"styles_objectFit__2HN7y"}},2757:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var i=n(6554),l=n(7030),r=n(3179),a=n(9417),o=n(5432),s=n(5893),d=(0,i.G)(function(e,t){let n=(0,l.mq)("Heading",e),{className:i,...d}=(0,r.Lr)(e);return(0,s.jsx)(a.m.h2,{ref:t,className:(0,o.cx)("chakra-heading",e.className),...d,__css:n})});d.displayName="Heading"}},function(e){e.O(0,[102,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);