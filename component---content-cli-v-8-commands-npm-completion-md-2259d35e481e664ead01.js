(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),p=n("ReZb"),u=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),y=n("mwnC"),g=n("/Rw0"),O=n("dVM4"),E=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return r.a.createElement(E,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var j=v,C=n("MfeC");function w(e){var t=C.a.getPath(e.location.pathname),n=C.a.getVariantAndPage(e.root,t);if(!n)return null;var a=C.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},o)))}w.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=w,_=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),k=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),N=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,E=i.title,v=i.description,w=i.status,M=i.source,P=i.additionalContributors,W=void 0===P?[]:P,H=C.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:p.a,Note:u.a,Prompt:b,PromptReply:h,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:E,description:v}),r.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(_,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(y.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),r.a.createElement(k,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(N,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},E),v))),null!=H?r.a.createElement(I,null,r.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(j,{items:n.tableOfContents.items})):null,r.a.createElement(z,null,w||M?r.a.createElement(l.k,{mb:3,alignItems:"center"},w?r.a.createElement(O.a,{status:w}):null,r.a.createElement(l.e,{mx:"auto"}),M?r.a.createElement(g.a,{href:M}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(j,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},SLmo:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),i={},r={_frontmatter:i},c=o.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"source <(npm completion)\n")),Object(l.b)("p",null,"Note: This command is unaware of workspaces."),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"Enables tab-completion in all npm commands."),Object(l.b)("p",null,"The synopsis above\nloads the completions into your current shell.  Adding it to\nyour ~/.bashrc or ~/.zshrc will make the completions available\neverywhere:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm completion >> ~/.bashrc\nnpm completion >> ~/.zshrc\n")),Object(l.b)("p",null,"You may of course also pipe the output of ",Object(l.b)("inlineCode",{parentName:"p"},"npm completion")," to a file\nsuch as ",Object(l.b)("inlineCode",{parentName:"p"},"/usr/local/etc/bash_completion.d/npm")," or\n",Object(l.b)("inlineCode",{parentName:"p"},"/etc/bash_completion.d/npm")," if you have a system that will read\nthat file for you."),Object(l.b)("p",null,"When ",Object(l.b)("inlineCode",{parentName:"p"},"COMP_CWORD"),", ",Object(l.b)("inlineCode",{parentName:"p"},"COMP_LINE"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"COMP_POINT")," are defined in the\nenvironment, ",Object(l.b)("inlineCode",{parentName:"p"},"npm completion"),' acts in "plumbing mode", and outputs\ncompletions based on the arguments.'),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/developers"},"npm developers")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm"},"npm"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-completion-md-2259d35e481e664ead01.js.map