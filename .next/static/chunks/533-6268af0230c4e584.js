"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[533],{6526:function(A,e,t){t.d(e,{G:function(){return l},Ji:function(){return n},Ym:function(){return a},iM:function(){return i},v5:function(){return r}});let n=function(){let A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{hidden:{opacity:0},show:{opacity:1,transition:{type:"spring",duration:1.25,delay:A}}}},a=A=>{let{delay:e=0,direction:t="up",offset:n=10}=A;return{hidden:{y:"down"===t?-n:"up"===t?n:0,x:"left"===t?-n:"right"===t?n:0,opacity:0},show:{y:0,x:0,opacity:1,transition:{type:"spring",stiffness:300,damping:20,delay:e}}}},i=A=>{let{delay:e=0,duration:t=1.25,offset:n=20}=A;return{hidden:{y:n,opacity:0},show:{opacity:1,y:0,transition:{type:"spring",delay:e,duration:t}}}},s=i({delay:.5,duration:1.75,offset:50}),r={variants:s,initial:"hidden",whileInView:"show",viewport:{once:!0}},l={hidden:{opacity:0,y:40},show:A=>({opacity:1,y:0,transition:{type:"spring",stiffness:150,damping:20,delay:.2*A}})}},2174:function(A,e,t){t.d(e,{zx:function(){return o},ib:function(){return u},ZG:function(){return p},rU:function(){return f},HC:function(){return g},fe:function(){return j},t:function(){return b},HJ:function(){return N},y2:function(){return E},YE:function(){return B},UH:function(){return z},yv:function(){return H},QZ:function(){return I},IW:function(){return C},p$:function(){return Q},im:function(){return D}});var n=t(5893),a=t(9930),i=t(9428),s=t(1664),r=t.n(s);let l=["center","children","className","size","type","href"];var o=A=>{let{className:e,children:t,type:s="button",size:o="sm",center:c=!1}=A,d="".concat("sm"===o?"p-2 px-4 text-sm border-[1.5px] ":"text-sm p-4 px-6 border-2"," block ").concat(c?"mx-auto":""," w-fit font-mono capitalize rounded border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer ").concat(e);if("link"===A.type){let{sameTab:e,...s}=A;return(0,a.lu)(s,l),(0,n.jsx)(i.E.span,{...s,children:(0,n.jsx)(r(),{className:d,href:A.href,target:e?"_self":"_blank",rel:"noopener noreferrer",children:t})})}return"button"==s?(0,n.jsx)("button",{type:s,className:d,onClick:A.onClick,children:t}):(0,n.jsx)(n.Fragment,{})},c=t(263),d=t(1954),m=t(7294),u=A=>{let{className:e,onClick:t,...a}=A,{isDark:s,toggleTheme:r}=(0,m.useContext)(c.Z);return(0,n.jsx)(i.E.button,{className:"rounded-lg p-1 hover:text-accent focus:text-accent focus:outline-none focus:bg-bg-secondary cursor-pointer w-fit ".concat(e," duration-200"),onClick:A=>{t&&t(A),r()},...a,children:(0,n.jsx)(d.JO,{icon:s?"carbon:sun":"ph:moon",width:"26",height:"26"})})},x=t(5675),h=t.n(x),p=A=>{let{src:e,alt:t}=A;return(0,n.jsxs)("div",{className:"relative w-64 h-64 group sm:w-auto sm:h-auto",children:[(0,n.jsx)(h(),{src:e,alt:t,width:300,height:300,className:"rounded shadow-xl"}),(0,n.jsx)("div",{className:"absolute inset-0 border-[3px] z-[-1] rounded border-accent translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 duration-150 hidden sm:block"})]})},f=A=>{let{href:e,className:t="",children:a,onClick:i=()=>{},withPadding:s=!1,...r}=A;return s?(0,n.jsx)("a",{href:e,className:"group ".concat(t),onClick:i,...r,children:(0,n.jsxs)("span",{className:"relative w-fit",children:[a,(0,n.jsx)("span",{className:"absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:w-full bg-accent duration-300 ease-in-scroll"})]})}):(0,n.jsxs)("a",{href:e,className:"relative ".concat(t," group"),onClick:i,...r,children:[a,(0,n.jsx)("span",{className:"absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:outline-none group-focus:w-full bg-accent duration-300 ease-in-scroll"})]})},g=A=>{let{children:e,className:t=""}=A;return(0,n.jsx)("li",{className:"before:content-['▹'] flex before:mr-3 before:text-accent before:block ".concat(t),children:e})},j=A=>{let{onClick:e,className:t,navbarCollapsed:a}=A,i="bg-accent h-0.5 w-7 duration-200 ".concat(a?"absolute":"");return(0,n.jsx)("button",{className:"".concat(t," w-7 h-7 group transition focus:outline-none"),onClick:e,children:(0,n.jsxs)("div",{className:"space-y-1.5 flex flex-col items-end relative ".concat(a?"space-y-0 rotate-90 duration-300 delay-100":"group-hover:space-y-1 group-focus:space-y-1"),children:[(0,n.jsx)("div",{className:"".concat(i," ").concat(a?"rotate-45":"")}),(0,n.jsx)("div",{className:"".concat(i," w-6 ").concat(a?"opacity-0":"opacity-100")}),(0,n.jsx)("div",{className:"".concat(i," ").concat(a?"-rotate-45":"w-5")})]})})},w=t(7314),b=A=>{let{name:e,url:t,repo:a,year:s,img:r,tags:l,...o}=A,[c,u]=(0,m.useState)(!1);return(0,m.useEffect)(()=>{u(!0)},[]),c?(0,n.jsx)(i.E.div,{...o,className:"w-full max-w-[350px]",children:(0,n.jsxs)("button",{onClick:A=>{A.target.closest("a")||window.open(t)},className:"block w-full overflow-hidden transition-all duration-200 rounded-md shadow-xl group bg-bg-secondary dark:shadow-2xl",children:[(0,n.jsx)("div",{className:"overflow-hidden h-[200px]",children:(0,n.jsx)(h(),{src:r,alt:e,width:300,height:300,placeholder:"blur",blurDataURL:w.jS,className:"object-cover w-full h-full"})}),(0,n.jsxs)("div",{className:"p-4 py-3 space-y-1",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("p",{className:"font-mono text-xs capitalize",children:l.join(" | ")}),(0,n.jsxs)("div",{className:"flex items-center space-x-1.5",children:[(0,n.jsx)("a",{href:a,className:"block duration-200 hover:text-accent",target:"_blank",children:(0,n.jsx)(d.JO,{icon:"tabler:brand-github",width:20,height:20})}),(0,n.jsx)("a",{href:t,className:"block duration-200 hover:text-accent",target:"_blank",children:(0,n.jsx)(d.JO,{icon:"ci:external-link",width:22,height:22})})]})]}),(0,n.jsxs)("h4",{className:"flex justify-between font-medium capitalize duration-200 group-hover:text-accent",children:[(0,n.jsx)("span",{children:e}),(0,n.jsx)("span",{className:"mr-1",children:s})]})]})]})}):(0,n.jsx)(n.Fragment,{})},v=t(9008),y=t.n(v),N=A=>(0,n.jsxs)(y(),{children:[(0,n.jsx)("title",{children:A.title}),(0,n.jsx)("meta",{name:"title",content:A.title}),(0,n.jsx)("meta",{name:"author",content:A.author}),(0,n.jsx)("meta",{name:"description",content:A.description}),(0,n.jsx)("meta",{name:"keywords",content:A.keywords.join(", ")}),(0,n.jsx)("link",{rel:"canonical",href:A.url}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:A.url}),(0,n.jsx)("meta",{property:"og:title",content:A.title}),(0,n.jsx)("meta",{property:"og:description",content:A.description}),(0,n.jsx)("meta",{property:"og:image",content:A.image}),(0,n.jsx)("meta",{property:"og:site_name",content:A.title}),(0,n.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{property:"twitter:url",content:A.url}),(0,n.jsx)("meta",{property:"twitter:title",content:A.title}),(0,n.jsx)("meta",{property:"twitter:description",content:A.description}),(0,n.jsx)("meta",{property:"twitter:image",content:A.image})]}),k=t(9879),E=A=>{let{path:e,className:t=""}=A;return(0,n.jsx)("div",{className:"max-w-sm md:max-w-md ".concat(t),children:(0,n.jsx)(k.J5,{autoplay:!0,loop:!0,src:e})})},S=t(6526),B=A=>{let{children:e,className:t="",side:a="left"}=A;return(0,n.jsxs)(i.E.div,{variants:(0,S.Ji)(2.75),initial:"hidden",animate:"show",className:"fixed bottom-0 flex-col items-center hidden md:flex ".concat(t," ").concat("left"===a?"left-6 xl:left-12":"right-6 xl:right-12"),children:[e,(0,n.jsx)("div",{className:"bg-slate-500 h-24 w-0.5 mt-5"})]})},z=A=>{let{lottie:e,title:t,skills:s,points:r,className:l="",...o}=A;return(0,n.jsxs)(i.E.div,{className:"flex gap-8 sm:gap-10 flex-col lg:flex-row items-center ".concat(l),...o,children:[(0,n.jsxs)("div",{className:"space-y-14 lg:w-1/2",children:[(0,n.jsx)("h3",{className:"mb-5 text-2xl text-center capitalize sm:text-3xl",children:t}),(0,n.jsx)("div",{className:"flex flex-wrap justify-center gap-2",children:s.map(A=>{let{name:e,icon:t}=A;return(0,n.jsx)(H,{src:t,name:e},(0,a.zv)())})},(0,a.zv)()),(0,n.jsx)("ul",{className:"space-y-2 text-base",children:r.map(A=>(0,n.jsx)(g,{children:A},(0,a.zv)()))})]}),(0,n.jsx)(E,{path:e,className:"md:min-h-[448px] md:min-w-[448px]"})]})},H=A=>{let{src:e,name:t}=A;return(0,n.jsxs)("div",{className:"relative grid text-2xl rounded-full shadow-md bg-bg-secondary dark:shadow-xl h-14 w-14 sm:h-16 sm:w-16 place-items-center group",children:[(0,n.jsx)(d.JO,{icon:e,width:"32",height:"32"}),(0,n.jsxs)("div",{className:"absolute invisible px-2 py-1 text-sm text-white capitalize duration-200 rounded opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-8 bg-slate-900/75 dark:bg-slate-700/90 dark:text-slate-100",children:[t,(0,n.jsx)("svg",{className:"absolute left-0 w-full h-2 text-slate-900/75 dark:text-slate-700/90 top-full",x:"0px",y:"0px",viewBox:"0 0 255 255",xmlSpace:"preserve",children:(0,n.jsx)("polygon",{className:"fill-current",points:"0,0 127.5,127.5 255,0"})})]})]})},C=A=>{let{href:e,children:t,className:a=""}=A;return(0,n.jsx)("a",{href:e,target:"_blank",className:"block text-sm p-2.5 hover:text-accent hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ".concat(a),children:t})},I=A=>{let{icon:e,url:t}=A;return(0,n.jsx)("li",{children:(0,n.jsx)(C,{href:t,children:(0,n.jsx)(d.JO,{icon:e,width:24,height:24})})})},F=t(227),Q=A=>{let{experiences:e}=A,[t,i]=(0,m.useState)(0),s=(0,F.Z)(),{role:r,company:l,companyUrl:o,started:c,upto:d,tasks:u}=e[t],x=(0,a.ad)("sm");return(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row text-sm md:text-base gap-6 md:gap-10 min-h-[250px]",children:[(0,n.jsxs)("div",{className:"font-mono text-xs sm:text-sm relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[180px]",children:[e.map((A,e)=>{let{company:s}=A;return(0,n.jsx)("button",{className:"h-10 min-w-[120px] sm:w-auto sm:px-5 sm:!text-left capitalize hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent ".concat(e===t?"text-accent":""),onClick:()=>i(e),children:s},(0,a.zv)())}),(0,n.jsx)("div",{className:"absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-dark-3"}),(0,n.jsx)("div",{style:s<=x?{left:"calc(".concat(t,"*120px)")}:{top:"calc(".concat(t,"*2.5rem)")},className:"absolute h-0.5 w-[120px] sm:w-0.5 sm:h-10 rounded-full bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-250 delay-100 in-scroll"})]}),(0,n.jsxs)("div",{className:"p-1 space-y-5",children:[(0,n.jsxs)("div",{className:"space-y-1",children:[(0,n.jsxs)("h3",{className:"text-lg font-medium capitalize text-dark-2",children:[r," ",(0,n.jsxs)(f,{href:o,target:"_blank",className:"text-accent",children:["@",l]})]}),(0,n.jsx)("p",{className:"font-mono text-xs capitalize",children:(0,n.jsxs)(n.Fragment,{children:[c," - ",d]})})]}),(0,n.jsx)("ul",{className:"space-y-2",children:u.map(A=>(0,n.jsx)(g,{children:A},(0,a.zv)()))})]},(0,a.zv)())]})},D=A=>{let{children:e,as:t="section",className:a="",id:s="",animate:r=!0,...l}=A;if(r){let A=(0,i.E)(t);return(0,n.jsx)(A,{id:s,className:"py-24 md:py-32 ".concat(a),...l,children:e})}if("section"===t)return(0,n.jsx)(i.E.section,{id:s,className:"py-24 md:py-32 ".concat(a),...l,children:e});let o="".concat(t);return(0,n.jsx)(o,{id:s,className:"py-24 md:py-32 ".concat(a),...l,children:e})}},7533:function(A,e,t){t.d(e,{CL:function(){return o},r8:function(){return c},a3:function(){return u},VM:function(){return f},Ar:function(){return N},pj:function(){return E},nA:function(){return B}});var n=t(5893),a=t(6526),i=t(2174),s=t(9930),r=t(5616),l=t(7294),o=()=>{let{title:A,img:e,list:t}=r.aboutSection,[o,c]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{c(!0)},[]),o?(0,n.jsxs)(i.im,{id:"about",...a.v5,children:[(0,n.jsx)("h2",{className:"heading-secondary",children:A}),(0,n.jsxs)("main",{className:"flex flex-col items-center gap-16 lg:items-start lg:flex-row",children:[(0,n.jsxs)("div",{className:"space-y-4 lg:w-3/5",children:[(0,n.jsx)("p",{children:"Hi, my name is Edward Brito, I'm a Full-Stack developer with around 2 years of experience in developing web applications."}),(0,n.jsx)("p",{children:"My main focus these days is to continue learning backend development."}),t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:t.title}),(0,n.jsx)("ul",{className:"grid w-2/3 grid-cols-2 gap-1 text-sm",children:t.items.map(A=>(0,n.jsx)(i.HC,{children:A},(0,s.zv)()))})]})]}),(0,n.jsx)(i.ZG,{src:e,alt:r.v.name})]})]}):(0,n.jsx)(n.Fragment,{})},c=()=>{let{subtitle:A,title:e,paragraphs:t,link:s}=r.contactSection;return(0,n.jsxs)(i.im,{id:"contact",className:"max-w-xl mx-auto text-center  !py-16 md:!py-24 mb-20 md:mb-32",...a.v5,children:[(0,n.jsx)("p",{className:"mb-3 font-mono text-sm capitalize text-accent",children:A}),(0,n.jsx)("h2",{className:"heading-secondary !mb-5",children:e}),t.map((A,e)=>(0,n.jsx)("p",{children:A},e)),(0,n.jsx)(i.zx,{type:"link",size:"lg",href:s,center:!0,className:"mt-12",children:"Say Hello"})]})},d=()=>(0,n.jsx)(i.YE,{side:"right",children:(0,n.jsx)(i.IW,{href:"mailto:".concat(r.v.email),className:"[writing-mode:vertical-lr] font-mono tracking-widest text-xs",children:r.v.email})}),m=t(9428),u=()=>(0,n.jsxs)(m.E.section,{id:"experience",className:"max-w-3xl py-32 mx-auto",...a.v5,children:[(0,n.jsx)("h2",{className:"heading-secondary",children:r.TC.title}),(0,n.jsx)(i.p$,{experiences:r.TC.experiences})]}),x=A=>{let{className:e=""}=A,{socialLinks:t}=r.socialSection;return(0,n.jsx)("ul",{className:e,children:t.map(A=>{let{icon:e,url:t}=A;return(0,n.jsx)(i.QZ,{icon:e,url:t},t)})})},h=()=>(0,n.jsxs)("footer",{className:"max-w-lg mx-auto mb-5 font-mono text-xs text-center",children:[(0,n.jsx)(x,{className:"flex justify-center gap-3 mb-3 md:hidden"}),(0,n.jsx)("a",{href:r.jI.link,target:"_blank",rel:"noopener noreferrer",className:"transition hover:text-accent",children:r.jI.title})]}),p=t(227),f=()=>{var A;let{cta:e,subtitle:t,title:l,tagline:o,description:c,specialText:d}=r.heroSection,u=(0,p.Z)(),x=(0,s.ad)("md"),h=u<=x?.9:1.7,f=function(A){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15;return h+e*A};return(0,n.jsxs)(i.im,{id:"hero",className:"flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0",children:[(0,n.jsx)(m.E.p,{variants:(0,a.iM)({delay:f(0)}),initial:"hidden",animate:"show",className:"font-mono text-sm md:text-base text-accent",children:t}),(0,n.jsxs)("div",{className:"max-w-5xl text-4xl font-bold tracking-tighter md:text-7xl",children:[(0,n.jsx)(m.E.h1,{variants:(0,a.iM)({delay:f(1)}),initial:"hidden",animate:"show",className:"text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.1]",children:l}),(0,n.jsx)(m.E.h1,{variants:(0,a.iM)({delay:f(2)}),initial:"hidden",animate:"show",className:"leading-[1.2]",children:o})]}),(0,n.jsx)(m.E.p,{variants:(0,a.iM)({delay:f(3)}),initial:"hidden",animate:"show",className:"max-w-xl text-base md:text-lg",children:c}),(0,n.jsx)(m.E.p,{variants:(0,a.iM)({delay:f(4)}),initial:"hidden",animate:"show",className:"font-mono text-xs md:text-sm text-accent",children:d}),e&&(0,n.jsx)(i.zx,{size:"lg",type:"link",variants:(0,a.iM)({delay:f(5)}),initial:"hidden",animate:"show",href:null!==(A=null==e?void 0:e.url)&&void 0!==A?A:"#",className:"mt-5 xs:mt-8 md:mt-10 ".concat(e.hideInDesktop?"md:hidden":""),sameTab:null==e?void 0:e.sameTab,children:e.title})]})},g=t(1664),j=t.n(g);let w=A=>{let{id:e="navbar",offset:t=100,when:n=!0}=A,a=document.getElementById(e);if(!a)return;let i=window.pageYOffset;window.onscroll=()=>{if(n){let A=window.pageYOffset;i<A?a.style.top="-".concat(t,"px"):a.style.top="0",i=A}}},b=A=>{let{href:e,children:t,onClick:s,index:r,delay:l}=A;return(0,n.jsx)(m.E.li,{className:"group",variants:(0,a.Ym)({delay:l+r/10,direction:"down"}),initial:"hidden",animate:"show",children:(0,n.jsx)(i.rU,{href:e||"/#".concat(t),className:"block p-2 duration-500 hover:text-accent",onClick:s,withPadding:!0,children:t})})};var v=()=>{let{cta:A,navLinks:e}=r.navbarSection,[t,o]=(0,l.useState)(!1),c=(0,p.Z)(),d=(0,s.ad)("md"),u=c<=d?0:.8;return(0,l.useEffect)(()=>{w({when:!t})},[t]),(0,n.jsxs)(m.E.header,{variants:(0,a.Ji)(.5),initial:"hidden",animate:"show",id:"navbar",className:"fixed inset-x-0 top-0 right-0 z-50 flex items-end justify-between px-8 py-4 duration-500 md:px-6 xl:px-12 backdrop-blur-lg",children:[(0,n.jsx)("h1",{className:"relative text-2xl capitalize font-signature text-accent group top-1",children:(0,n.jsxs)(j(),{href:"/#hero",className:"block",children:[r.v.name,(0,n.jsx)("div",{className:"absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"})]})}),(0,n.jsx)(i.fe,{onClick:()=>{o(A=>!A)},navbarCollapsed:t,className:"md:invisible"}),(t||c>d)&&(0,n.jsx)("nav",{className:"capitalize absolute text-sm duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto",children:(0,n.jsxs)("ul",{className:"flex flex-col items-stretch gap-3 list-style-none lg:gap-5 xl:gap-6 md:flex-row md:items-center",children:[e.map((A,e)=>{let{name:t,url:a}=A;return(0,n.jsx)(b,{href:a,index:e,delay:u,onClick:()=>o(!1),children:t},e)}),(0,n.jsxs)("div",{className:"flex items-center justify-between gap-5 xl:gap-6",children:[A&&(0,n.jsx)(i.zx,{type:"link",href:A.url,sameTab:null==A?void 0:A.sameTab,variants:(0,a.Ym)({delay:u+e.length/10,direction:"down"}),initial:"hidden",animate:"show",children:A.title}),(0,n.jsx)(i.ib,{onClick:()=>o(!1),variants:(0,a.Ym)({delay:u+(e.length+1)/10,direction:"down"}),initial:"hidden",animate:"show"})]})]})})]})},y=()=>(0,n.jsx)(i.YE,{children:(0,n.jsx)(x,{})}),N=A=>{let{children:e,className:t=""}=A;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{}),(0,n.jsx)("main",{className:"mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg ".concat(t),children:e}),(0,n.jsx)(h,{}),(0,n.jsx)(y,{}),(0,n.jsx)(d,{})]})},k=t(7314),E=()=>{let{projects:A,title:e}=r.projectsSection,[t,o]=(0,l.useState)(!1),c=A.slice(0,k.tp),d=t?A:c;return(0,n.jsxs)(i.im,{id:"projects",animate:!1,...a.v5,children:[(0,n.jsx)(m.E.h2,{className:"heading-secondary text-center !mb-12",children:e}),(0,n.jsx)("div",{className:"grid gap-6 grid-cols-auto-250 xs:grid-cols-auto-300 place-items-center",children:(0,s.z_)(d).map((A,e)=>e<k.tp?(0,l.createElement)(i.t,{...A,key:A.id,variants:a.G,initial:"hidden",whileInView:"show",custom:e,viewport:{once:!0}}):(0,l.createElement)(i.t,{...A,key:A.id,variants:a.G,initial:"hidden",animate:"show",custom:e-k.tp}))}),A.length>k.tp&&(0,n.jsx)(i.zx,{size:"lg",className:"!mt-20",center:!0,onClick:()=>o(A=>!A),children:t?"show less":"show more"})]})},S=t(263),B=()=>{let{title:A,skills:e}=r.skillsSection,{isDark:t}=(0,l.useContext)(S.Z);return(0,n.jsxs)(i.im,{id:"skills",...a.v5,children:[(0,n.jsx)("h2",{className:"text-center heading-secondary",children:A}),(0,n.jsx)("div",{className:"space-y-32",children:e.map(A=>{let{id:e,lottie:s,softwareSkills:r,points:l,title:o}=A;return(0,n.jsx)(i.UH,{className:"odd:lg:flex-row-reverse",lottie:s[t?"dark":"light"],skills:r,points:l,title:o,...a.v5},e)})})]})}},227:function(A,e,t){var n=t(7294);e.Z=()=>{let[A,e]=(0,n.useState)(0);return window.addEventListener("resize",()=>{e(window.innerWidth)}),(0,n.useEffect)(()=>{e(window.innerWidth)},[]),A}},7314:function(A,e,t){t.d(e,{jS:function(){return i},mH:function(){return a},tp:function(){return n}});let n=6,a="resume.pdf",i="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAEZAmYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="},9930:function(A,e,t){t.d(e,{ad:function(){return l},lu:function(){return d},z_:function(){return c},zv:function(){return o}});var n=t(2987),a=t.n(n),i=t(6926),s=t.n(i);let r=s()(a()),l=A=>{var e;return+(null==r?void 0:null===(e=r.theme)||void 0===e?void 0:e.screens[A].slice(0,-2))},o=()=>"id".concat(Math.random().toString(16).slice(2)),c=A=>A.sort((A,e)=>e.year-A.year),d=(A,e)=>{e.forEach(e=>delete A[e])}},5616:function(A,e,t){t.d(e,{TC:function(){return d},aboutSection:function(){return o},contactSection:function(){return u},hD:function(){return s},heroSection:function(){return l},jI:function(){return h},navbarSection:function(){return r},projectsSection:function(){return m},skillsSection:function(){return c},socialSection:function(){return x},v:function(){return i}});var n=t(7314),a=t(9930);let i={name:"Edward Brito",email:"edwardbrito11@hotmail.com"},s={title:"Edward Brito | Full-Stack Developer",description:"Edward Brito is a Full-Stack developer who specializes in building complete Frontend and Backend applications.",author:i.name,image:"",url:"https://edwardb11-github-io.vercel.app/",keywords:["Edward","Edward Brito","@brito_edward11","edwardbrito","Portfolio","Edward Portfolio ","Edward Brito Portfolio"]},r={navLinks:[{name:"about",url:"/#about"},{name:"skills",url:"/#skills"},{name:"experience",url:"/#experience"},{name:"projects",url:"/#projects"},{name:"contact",url:"/#contact"}],cta:{title:"resume",url:"/".concat(n.mH)}},l={subtitle:"Hi, my name is",title:"Edward Brito.",tagline:"I create visually pleasing interfaces for the web.",description:"I am a Full-Stack web developer having experience in web applications with React.js and Next.js with TypeScript and TailwindCSS and Next.Js and ExpressJs.",cta:{title:"see my resume",url:"/".concat(n.mH),hideInDesktop:!0}},o={title:"about me",list:{title:"Here are a few technologies I’ve been working with recently:",items:["ReactJs","NextJs","TailwindCSS","ExpressJs","NestJs","TypeScript","PostgreSQL","AppSheet"]},img:"/edward-brito.jpeg"},c={title:"what i do",skills:[{id:(0,a.zv)(),title:"full stack development",lottie:{light:"/lotties/frontend.json",dark:"/lotties/frontend-dark.json"},points:["Building responsive static websites using Next.js","Building responsive Single Page Apps in React.js","Building RESTful APIs in Express and NestJs"],softwareSkills:[{name:"html-5",icon:"vscode-icons:file-type-html"},{name:"CSS-3",icon:"vscode-icons:file-type-css"},{name:"javaScript",icon:"vscode-icons:file-type-js-official"},{name:"typeScript",icon:"vscode-icons:file-type-typescript-official"},{name:"python",icon:"vscode-icons:file-type-python"},{name:"nodejs",icon:"logos:nodejs-icon"},{name:"reactjs",icon:"logos:react"},{name:"nextjs",icon:"logos:nextjs-icon"},{name:"tailwindcss",icon:"logos:tailwindcss-icon"},{name:"redux",icon:"logos:redux"},{name:"database",icon:"vscode-icons:file-type-sql"},{name:"mysql",icon:"vscode-icons:file-type-mysql"},{name:"nestjs",icon:"vscode-icons:file-type-nestjs"}]}]},d={title:"where i've worked",experiences:[{company:"Intellisys D. Corp.",companyUrl:"https://www.linkedin.com/company/intellisys-d--corp-/mycompany/",role:"Full-Stack Developer",started:"august 2021",upto:"present",tasks:["I worked on the development of the telemedicine website TuHospital.do","Develop API with NestJs, Graphql Postgres and TypeScript. ","Collaborated with diverse  team of developers."]}]},m={title:"my projects",projects:[{id:(0,a.zv)(),name:"image animations",url:"https://image-animations.vercel.app/",repo:"https://github.com/vatsalsinghkv/image-animations",img:"https://github-production-user-asset-6210df.s3.amazonaws.com/68834718/252267106-857c5341-1106-4e84-b7e6-80a668a20ba8.png",year:2023,tags:["CSS Animations","Sass"]},{id:(0,a.zv)(),name:"fylo landing page",url:"https://fylo-kv.netlify.app/",repo:"https://github.com/vatsalsinghkv/fylo",img:"https://user-images.githubusercontent.com/68834718/212843973-ef864a5a-f393-4901-b422-6f775a043cdb.png",year:2023,tags:["Html","Tailwind","TS"]}]},u={title:"get in touch",subtitle:"what's next",paragraphs:["Whether you have a project to discuss or just want to say hi, my inbox is open for all!"],link:"mailto:".concat(i.email)},x={socialLinks:[{icon:"tabler:brand-github",url:"https://github.com/Edwardb11"},{icon:"mdi:instagram",url:"https://www.instagram.com/brito_edward11/"},{icon:"lucide:twitter",url:"https://twitter.com/brito_edward11"},{icon:"lucide:linkedin",url:"https://www.linkedin.com/in/edwardb11/"},{icon:"lucide:facebook",url:"https://www.facebook.com/EdwardBritoDiaz/"}]},h={title:"Made with ☕ and ❤️ by Edwardb11",link:"https://github.com/Edwardb11/edwardb11.github.io"}},2987:function(A){A.exports={content:["./src/**/*.{js,ts,jsx,tsx}"],darkMode:"class",theme:{extend:{fontFamily:{signature:["agustina","sans-serif"],sans:["Inter","sans-serif"],mono:["Roboto Mono","monospace"]},screens:{xs:"375px"},colors:{bg:"var(--color-bg)","bg-secondary":"var(--color-bg-secondary)",accent:"var(--color-accent)","accent-light":"var(--color-accent-light)",text:"var(--color-text)","dark-1":"var(--color-dark-1)","dark-2":"var(--color-dark-2)","dark-3":"var(--color-dark-3)"},transitionTimingFunction:{"in-scroll":"cubic-bezier(0.645, 0.045, 0.355, 1)"},gridTemplateColumns:{"auto-300":"repeat(auto-fill, minmax(300px, 1fr))","auto-250":"repeat(auto-fill, minmax(250px, 1fr))"}}},plugins:[]}}}]);