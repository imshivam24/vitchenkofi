(function(e){function t(t){for(var a,i,o=t[0],l=t[1],c=t[2],f=0,m=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0caa":function(e,t,n){"use strict";var a=n("8b69"),s=n.n(a);s.a},"0d36":function(e,t,n){},"1d06":function(e,t,n){},"22a7":function(e,t,n){},2378:function(e,t,n){},"2fb4":function(e,t,n){},"3b98":function(e,t,n){},4315:function(e,t,n){"use strict";var a=n("0d36"),s=n.n(a);s.a},"4d59":function(e,t,n){"use strict";var a=n("2378"),s=n.n(a);s.a},"51ea":function(e,t,n){},5387:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"eventBus",(function(){return Ft}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"appRef",attrs:{id:"app"}},[n("router-view")],1)},r=[],i=(n("4de4"),n("5530")),o=(n("a8de"),n("5a89")),l=n("2f62"),c={name:"App",mounted:function(){var e=this;this.$prismic.client.query([this.$prismic.Predicates.any("document.type",["project","owner_link","homepage","request_offer_page","about_page"])]).then((function(t){e.setProjects(t.results.filter((function(e){return"project"==e.type}))),e.setOwnerLinks(t.results.filter((function(e){return"owner_link"==e.type}))),e.setOwnerImageUrl(t.results.filter((function(e){return"homepage"==e.type}))[0].data.owner_image.url),e.setRequestOfferTextContent(t.results.filter((function(e){return"request_offer_page"==e.type}))[0].data.content),e.setFormThankYouMessage(t.results.filter((function(e){return"request_offer_page"==e.type}))[0].data.form_success_message[0].text),e.setAboutLeftColumnContent(t.results.filter((function(e){return"about_page"==e.type}))[0].data.left_column_content),e.setAboutSkills(t.results.filter((function(e){return"about_page"==e.type}))[0].data.skills),e.setAboutContactDetails(t.results.filter((function(e){return"about_page"==e.type}))[0].data.contact_details)}));var t=this.$refs.appRef;window.VANTA.WAVES({el:t,mouseControls:!0,touchControls:!0,scale:3,scaleMobile:3,THREE:o,color:0,shininess:12,waveSpeed:.25,zoom:.75})},updated:function(){window.VANTA.current.resize()},methods:Object(i["a"])({},Object(l["c"])(["setProjects","setOwnerLinks","setOwnerImageUrl","setRequestOfferTextContent","setFormThankYouMessage","setAboutLeftColumnContent","setAboutSkills","setAboutContactDetails"]))},u=c,f=(n("5c0b"),n("2877")),m=Object(f["a"])(u,s,r,!1,null,null,null),d=m.exports;n("2fb4");a["a"].use(l["a"]);var v=new l["a"].Store({state:{owner_links:[],projects:[],owner_image_url:"",request_offer_text_content:[],form_thank_you_message:"",about_left_column_content:[],about_skills:[],about_contact_details:[],visitor:{name:"",email:"",subject:"",message:""},formErrors:{email:"",message:""}},mutations:{setOwnerLinks:function(e,t){return e.owner_links=t},setProjects:function(e,t){return e.projects=t},setOwnerImageUrl:function(e,t){return e.owner_image_url=t},setRequestOfferTextContent:function(e,t){return e.request_offer_text_content=t},setFormThankYouMessage:function(e,t){return e.form_thank_you_message=t},setVisitorDataValue:function(e,t){return e.visitor[t.key]=t.value},setFormErrorValue:function(e,t){return e.formErrors[t.key]=t.value},clearFormErrors:function(e){for(var t in e.formErrors)e.formErrors[t]="";return e.formErrors},setAboutLeftColumnContent:function(e,t){return e.about_left_column_content=t},setAboutSkills:function(e,t){return e.about_skills=t},setAboutContactDetails:function(e,t){return e.about_contact_details=t}},getters:{asyncOwnerLinks:function(e){return e.owner_links},asyncProjects:function(e){return e.projects},asyncRequestOfferTextContent:function(e){return e.request_offer_text_content},ownerImageUrl:function(e){return e.owner_image_url},visitorData:function(e){return e.visitor},formErrors:function(e){return e.formErrors},aboutLeftColumnContent:function(e){return e.about_left_column_content},aboutSkills:function(e){return e.about_skills},aboutContactDetails:function(e){return e.about_contact_details}}}),p=n("0701"),h=function(e){return"home"===e.type?"/":"page"===e.type?"/page/"+e.uid:"/"},b=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Layout",[n("FullHeightSection",{attrs:{scrollable:!0}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("h1",[e._v(" Hello."),n("br"),e._v(" I am "),n("OwnerPhotoReveal",{attrs:{image_url:this.ownerImageUrl}},[e._v("Kirill.")]),n("br"),e._v(" Front end"),n("br"),e._v(" developer. ")],1)])])]),n("FullHeightSection",[n("div",{staticClass:"row mb-4"},[n("div",{staticClass:"col-lg-5 pt-2"},e._l(this.asyncProjects.slice(0,3),(function(e){return n("ProjectTeaser",{key:e.id,attrs:{classes:"d-block mb-4",url:e.data.project_url.url,image_url:e.data.image_url.url,title:e.data.title[0].text,skills:e.data.skills}})})),1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-11 offset-lg-1"},[n("BigLink",{attrs:{route:"/portfolio",title:"All works"}})],1)])])],1)],1)},_=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("SiteOwner"),n("OwnerLinks",{attrs:{hideOnMobile:!0}}),n("NavToggler"),n("NavMenu"),n("div",{staticClass:"container"},[e._t("default")],2)],1)},y=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"owner-links",class:{owner_links__static:e.isStatic,hide_on_mobile:e.hideOnMobile}},e._l(this.asyncOwnerLinks,(function(t){return n("a",{key:t.id,staticClass:"text-uppercase",attrs:{target:"_blank",href:t.data.link.url}},[e._v(e._s(t.data.label[0].text))])})),0)},w=[],M={name:"OwnerLinks",props:{isStatic:{type:Boolean,default:!1},hideOnMobile:{type:Boolean,default:!1}},computed:Object(i["a"])({},Object(l["b"])(["asyncOwnerLinks"]))},D=M,C=(n("e881"),Object(f["a"])(D,k,w,!1,null,null,null)),x=C.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"owner-details"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("router-link",{attrs:{to:"/"}},[n("h3",{staticClass:"text-uppercase"},[e._v("Kirill Vitchenko")])])],1)])])])},E=[],L={name:"SiteOwner"},S=L,I=(n("cba4"),Object(f["a"])(S,j,E,!1,null,null,null)),T=I.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cube-container",class:{active:e.isActive},on:{click:e.onClick}},[e._m(0)])},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"cube"}},[n("figure",{staticClass:"face front"}),n("figure",{staticClass:"face back"}),n("figure",{staticClass:"face left"}),n("figure",{staticClass:"face right"}),n("figure",{staticClass:"face top"}),n("figure",{staticClass:"face bottom"})])}],$={name:"NavToggler",data:function(){return{isActive:!1}},methods:{onClick:function(){this.isActive=!this.isActive,Ft.$emit("navTogglerClicked")}}},P=$,A=(n("fba9"),Object(f["a"])(P,q,F,!1,null,null,null)),R=A.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"nav-menu__container px-3 px-md-0",on:{navTogglerClicked:e.toggleMenu}},[n("div",[n("div",{staticClass:"nav-menu mb-3"},[n("NavLink",{attrs:{title:"About",route:"/about"}}),n("NavLink",{attrs:{title:"Request Offer",route:"/request-offer"}}),n("NavLink",{attrs:{title:"Portfolio",route:"/portfolio"}})],1),n("div",[n("OwnerLinks",{attrs:{isStatic:!0}})],1)])])])},H=[],B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{ref:"linkRef",staticClass:"navigation-link",attrs:{to:e.route}},[n("h1",[e._v(e._s(e.title))])])},V=[],Y={name:"NavLink",props:["title","route"]},z=Y,X=(n("5a65"),Object(f["a"])(z,B,V,!1,null,null,null)),U=X.exports,W={name:"NavMenu",data:function(){return{show:!1}},components:{NavLink:U,OwnerLinks:x},methods:{toggleMenu:function(){this.show=!this.show}},created:function(){var e=this;Ft.$on("navTogglerClicked",(function(){e.show=!e.show}))}},J=W,K=(n("a01c"),Object(f["a"])(J,N,H,!1,null,null,null)),G=K.exports,Q={name:"Base",components:{SiteOwner:T,OwnerLinks:x,NavToggler:R,NavMenu:G}},Z=Q,ee=Object(f["a"])(Z,O,y,!1,null,null,null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{ref:"ownerPhotoRevealRef",staticClass:"js-owner-photo-on-hover block__title",attrs:{"data-img":e.image_url}},[e._t("default")],2)},ae=[],se=n("2909"),re=n("d4ec"),ie=n("bee2"),oe=n("cffa"),le=n("a5cf"),ce=(n("ac1f"),n("1276"),function(e){for(var t=e.innerHTML,n=t.split(""),a="",s=0;s<n.length;s++)" "!=n[s]&&(a+="<span>"+n[s]+"</span>");e.innerHTML=a}),ue=ce,fe=function(e){var t=0,n=0;return e||(e=window.event),e.pageX||e.pageY?(t=e.pageX,n=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:t,y:n}},me=function(){function e(t){Object(re["a"])(this,e),this.DOM={el:t},ue(this.DOM.el),this.DOM.reveal=document.createElement("div"),this.DOM.reveal.className="hover-reveal",this.DOM.reveal.style.overflow="hidden",this.DOM.reveal.innerHTML='<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url('.concat(this.DOM.el.dataset.img,')"></div></div>'),this.DOM.el.appendChild(this.DOM.reveal),this.DOM.revealInner=this.DOM.reveal.querySelector(".hover-reveal__inner"),this.DOM.revealInner.style.overflow="hidden",this.DOM.revealImg=this.DOM.revealInner.querySelector(".hover-reveal__img"),this.DOM.letters=Object(se["a"])(this.DOM.el.querySelectorAll("span")),this.initEvents()}return Object(ie["a"])(e,[{key:"animateLetters",value:function(){oe["a"].killTweensOf(this.DOM.letters),oe["a"].set(this.DOM.letters,{opacity:0}),oe["a"].staggerTo(this.DOM.letters,.2,{ease:le["a"].easeOut,startAt:{x:"100%"},x:"0%",opacity:1},.03)}},{key:"initEvents",value:function(){var e=this;this.positionElement=function(t){var n=fe(t),a={left:document.body.scrollLeft+document.documentElement.scrollLeft,top:document.body.scrollTop+document.documentElement.scrollTop};e.DOM.reveal.style.top="".concat(n.y+20-a.top,"px"),e.DOM.reveal.style.left="".concat(n.x+20-a.left,"px")},this.mouseenterFn=function(t){e.positionElement(t),e.showImage(),e.animateLetters()},this.mousemoveFn=function(t){return requestAnimationFrame((function(){e.positionElement(t)}))},this.mouseleaveFn=function(){e.hideImage()},this.DOM.el.addEventListener("mouseenter",this.mouseenterFn),this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn)}},{key:"showImage",value:function(){var e=this;oe["a"].killTweensOf(this.DOM.revealInner),oe["a"].killTweensOf(this.DOM.revealImg),this.tl=new le["d"]({onStart:function(){e.DOM.reveal.style.opacity=1,oe["a"].set(e.DOM.el,{zIndex:1e3})}}).add("begin").set([this.DOM.revealInner,this.DOM.revealImg],{transformOrigin:"50% 100%"}).add(new oe["a"](this.DOM.revealInner,.4,{ease:le["a"].easeOut,startAt:{x:"50%",y:"120%",rotation:50},x:"0%",y:"0%",rotation:0}),"begin").add(new oe["a"](this.DOM.revealImg,.4,{ease:le["a"].easeOut,startAt:{x:"-50%",y:"-120%",rotation:-50},x:"0%",y:"0%",rotation:0}),"begin").add(new oe["a"](this.DOM.revealImg,.7,{ease:le["a"].easeOut,startAt:{scale:2},scale:1}),"begin")}},{key:"hideImage",value:function(){var e=this;oe["a"].killTweensOf(this.DOM.revealInner),oe["a"].killTweensOf(this.DOM.revealImg),this.tl=new le["d"]({onStart:function(){oe["a"].set(e.DOM.el,{zIndex:999})},onComplete:function(){oe["a"].set(e.DOM.el,{zIndex:""}),oe["a"].set(e.DOM.reveal,{opacity:0})}}).add("begin").add(new oe["a"](this.DOM.revealInner,.6,{ease:le["a"].easeOut,y:"-120%",rotation:-5}),"begin").add(new oe["a"](this.DOM.revealImg,.6,{ease:le["a"].easeOut,y:"120%",rotation:5,scale:1.2}),"begin")}}]),e}(),de={name:"OwnerPhotoReveal",props:["image_url"],updated:function(){var e=this.$refs.ownerPhotoRevealRef;new me(e)}},ve=de,pe=(n("ee4c"),Object(f["a"])(ve,ne,ae,!1,null,null,null)),he=pe.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"full-height-section"},[n("div",{staticClass:"full-height-section__content"},[e._t("default")],2)])},ge=[],_e={name:"FullHeightSection",props:[{type:Boolean,default:!1}]},Oe=_e,ye=(n("4315"),Object(f["a"])(Oe,be,ge,!1,null,null,null)),ke=ye.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{ref:"projectTeaserRef",staticClass:"teaser-vit-project",class:e.classes,attrs:{href:e.url,target:"_blank","data-img":e.image_url}},[n("img",{staticClass:"d-block d-xl-none mb-2 mobile-gif",attrs:{src:e.image_url}}),n("h2",{staticClass:"teaser-vit-project__title"},[e._v(e._s(e.title))]),n("div",{ref:"skillSetRef",staticClass:"teaser-vit-project__skillset text-brick"},[e._v(" "+e._s(e.skillString)+" ")]),n("div",{staticClass:"text-brick d-block d-xl-none"},[e._v(" "+e._s(e.skillString)+" ")])])},Me=[],De=(n("a15b"),n("d81d"),function(){function e(t){Object(re["a"])(this,e),this.parent=t.parentElement.parentElement,this.DOM={el:t},ue(this.DOM.el),this.DOM.letters=Object(se["a"])(this.DOM.el.querySelectorAll("span")),this.initEvents(),this.breakpoint=1200}return Object(ie["a"])(e,[{key:"isDesktop",value:function(){return window.matchMedia("( min-width: ".concat(this.breakpoint,"px )")).matches}},{key:"animateLetters",value:function(){oe["a"].killTweensOf(this.DOM.letters),oe["a"].set(this.DOM.letters,{opacity:0}),oe["a"].staggerTo(this.DOM.letters,.1,{ease:le["a"].easeOut,startAt:{opacity:0},opacity:1},.025)}},{key:"initEvents",value:function(){var e=this;this.mouseenterFn=function(){e.isDesktop()&&e.animateLetters()},this.parent.addEventListener("mouseenter",this.mouseenterFn)}}]),e}()),Ce=function(e){var t=0,n=0;return e||(e=window.event),e.pageX||e.pageY?(t=e.pageX,n=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:t,y:n}},xe=function(){function e(t){Object(re["a"])(this,e),this.DOM={el:t},this.DOM.reveal=document.createElement("div"),this.DOM.reveal.className="hover-reveal hover-reveal-project",this.DOM.reveal.style.overflow="hidden",this.DOM.reveal.innerHTML='<div class="hover-reveal__inner"><div class="hover-reveal__img hover-reveal__img-project" style="background-image:url('.concat(this.DOM.el.dataset.img,')"></div></div>'),this.DOM.el.appendChild(this.DOM.reveal),this.DOM.revealInner=this.DOM.reveal.querySelector(".hover-reveal__inner"),this.DOM.revealInner.style.overflow="hidden",this.DOM.revealImg=this.DOM.revealInner.querySelector(".hover-reveal__img"),this.breakpoint=1200,this.initEvents()}return Object(ie["a"])(e,[{key:"isDesktop",value:function(){return window.matchMedia("( min-width: ".concat(this.breakpoint,"px )")).matches}},{key:"initEvents",value:function(){var e=this;this.positionElement=function(t){var n=Ce(t),a={left:document.body.scrollLeft+document.documentElement.scrollLeft,top:document.body.scrollTop+document.documentElement.scrollTop};e.DOM.reveal.style.top="".concat(n.y+20-a.top-150,"px"),e.DOM.reveal.style.left="".concat(n.x+20-a.left,"px")},this.mouseenterFn=function(t){e.isDesktop()&&(e.positionElement(t),e.showImage())},this.mousemoveFn=function(t){return requestAnimationFrame((function(){e.isDesktop()&&e.positionElement(t)}))},this.mouseleaveFn=function(){e.isDesktop()&&e.hideImage()},this.DOM.el.addEventListener("mouseenter",this.mouseenterFn),this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn)}},{key:"showImage",value:function(){var e=this;oe["a"].killTweensOf(this.DOM.revealInner),oe["a"].killTweensOf(this.DOM.revealImg),this.tl=new le["d"]({onStart:function(){e.DOM.reveal.style.opacity=1,oe["a"].set(e.DOM.el,{zIndex:1e3})}}).add("begin").set([this.DOM.revealInner,this.DOM.revealImg],{transformOrigin:"50% 100%"}).add(new oe["a"](this.DOM.revealInner,.4,{ease:le["a"].easeOut,startAt:{x:"50%",y:"120%",rotation:50},x:"0%",y:"0%",rotation:0}),"begin").add(new oe["a"](this.DOM.revealImg,.4,{ease:le["a"].easeOut,startAt:{x:"-50%",y:"-120%",rotation:-50},x:"0%",y:"0%",rotation:0}),"begin").add(new oe["a"](this.DOM.revealImg,.7,{ease:le["a"].easeOut,startAt:{scale:2},scale:1}),"begin")}},{key:"hideImage",value:function(){var e=this;oe["a"].killTweensOf(this.DOM.revealInner),oe["a"].killTweensOf(this.DOM.revealImg),this.tl=new le["d"]({onStart:function(){oe["a"].set(e.DOM.el,{zIndex:999})},onComplete:function(){oe["a"].set(e.DOM.el,{zIndex:""}),oe["a"].set(e.DOM.reveal,{opacity:0})}}).add("begin").add(new oe["a"](this.DOM.revealInner,.6,{ease:le["a"].easeOut,y:"-120%",rotation:-5}),"begin").add(new oe["a"](this.DOM.revealImg,.6,{ease:le["a"].easeOut,y:"120%",rotation:5,scale:1.2}),"begin")}}]),e}(),je={name:"ProjectTeaser",props:["skills","title","url","classes","image_url"],computed:{skillString:function(){var e=this.$props.skills.map((function(e){return e.skill[0].text}));return e.join(" ")}},mounted:function(){var e=this.$refs.skillSetRef;new De(e);var t=this.$refs.projectTeaserRef;new xe(t)}},Ee=je,Le=(n("5969"),Object(f["a"])(Ee,we,Me,!1,null,null,null)),Se=Le.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"big-link__container"},[n("h2",{staticClass:"d-inline-block mt-7 big-link portfolio-link"},[n("router-link",{attrs:{to:e.route}},[e._v(e._s(e.title))])],1)])},Te=[],qe={name:"BigLink",props:["title","route"]},Fe=qe,$e=(n("696c"),Object(f["a"])(Fe,Ie,Te,!1,null,null,null)),Pe=$e.exports,Ae={name:"FrontPage",components:{Layout:te,OwnerPhotoReveal:he,FullHeightSection:ke,ProjectTeaser:Se,BigLink:Pe},data:function(){return{skills:["Twig","WordPress"]}},computed:Object(i["a"])({},Object(l["b"])(["asyncProjects","ownerImageUrl"]))},Re=Ae,Ne=Object(f["a"])(Re,g,_,!1,null,null,null),He=Ne.exports,Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("FullHeightSection",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-5 pt-2"},e._l(this.asyncProjects,(function(e){return n("ProjectTeaser",{key:e.id,attrs:{classes:"d-block mb-4",url:e.data.project_url.url,image_url:e.data.image_url.url,title:e.data.title[0].text,skills:e.data.skills}})})),1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-11 offset-lg-1"},[n("BigLink",{attrs:{route:"/request-offer",title:"Request offer"}})],1)])])],1)},Ve=[],Ye={name:"Portfolio",components:{Layout:te,FullHeightSection:ke,ProjectTeaser:Se,BigLink:Pe},data:function(){return{skills:["Twig","WordPress"]}},computed:Object(i["a"])({},Object(l["b"])(["asyncProjects"]))},ze=Ye,Xe=Object(f["a"])(ze,Be,Ve,!1,null,null,null),Ue=Xe.exports,We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("FullHeightSection",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 col-xl-4 mb-4 mb-xl-0"},[n("OfferRequestForm")],1),n("div",{staticClass:"col-lg-4 col-xl-4 offset-xl-1"},[n("prismic-rich-text",{attrs:{field:this.asyncRequestOfferTextContent}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-11 offset-lg-1"},[n("BigLink",{attrs:{title:"About",route:"/about"}})],1)])])],1)},Je=[],Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.submitted?n("div",[n("h4",[e._v(e._s(this.$store.state.form_thank_you_message))])]):n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("Input",{attrs:{name:"name",placeholder:"Name",type:"text",wrapperclasses:"mb-2"}}),n("Input",{attrs:{name:"email",placeholder:"Email",type:"email",wrapperclasses:"mb-2",required:!0}}),n("Input",{attrs:{name:"subject",placeholder:"Subject",type:"text",wrapperclasses:"mb-2"}}),n("Textarea",{attrs:{name:"message",placeholder:"Message",classes:"mb-2 d-block",required:!0}}),e._v(" "),n("SubmitInput",{attrs:{wrapperclasses:"text-right",value:"Request"}})],1)])},Ge=[],Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.wrapperclasses},[""!=e.label?n("label",[e._v(e._s(e.label))]):e._e(),n("input",{attrs:{name:e.name,type:e.type,placeholder:e.placeholder+(e.required?"*":"")},domProps:{value:e.visitorData[e.name]},on:{input:this.handleChange}}),this.formErrors[e.name]?n("span",{staticClass:"error-message"},[e._v(e._s(this.formErrors[e.name]))]):e._e()])},Ze=[],et=(n("b0c0"),{name:"Input",props:{type:{type:String,default:"text"},name:{type:String,default:"",required:!0},placeholder:{type:String,default:""},label:{type:String,default:""},wrapperclasses:{type:String,default:""},required:{type:Boolean,default:!1}},computed:Object(i["a"])({},Object(l["b"])(["visitorData","formErrors"])),methods:{handleChange:function(e){this.$store.commit("setVisitorDataValue",{key:this.name,value:e.target.value})}}}),tt=et,nt=(n("4d59"),Object(f["a"])(tt,Qe,Ze,!1,null,null,null)),at=nt.exports,st=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("textarea",{class:e.classes,attrs:{name:e.name,rows:"6",placeholder:e.placeholder+(e.required?"*":"")},domProps:{value:e.visitorData[e.name]},on:{input:this.handleChange}}),this.formErrors[e.name]?n("span",{staticClass:"error-message"},[e._v(e._s(this.formErrors[e.name]))]):e._e()])},rt=[],it={name:"Textarea",props:["placeholder","classes","name","required"],data:function(){return{value:""}},computed:Object(i["a"])({},Object(l["b"])(["visitorData","formErrors"])),methods:{handleChange:function(e){this.$store.commit("setVisitorDataValue",{key:this.name,value:e.target.value})}}},ot=it,lt=(n("0caa"),Object(f["a"])(ot,st,rt,!1,null,null,null)),ct=lt.exports,ut=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.wrapperclasses},[""!=e.label?n("label",[e._v(e._s(e.label))]):e._e(),n("input",{attrs:{type:"submit"},domProps:{value:e.value}})])},ft=[],mt={name:"SubmitInput",props:{value:{type:String,default:"Submit"},wrapperclasses:{type:String,default:""},label:{type:String,default:""}}},dt=mt,vt=(n("d39b"),Object(f["a"])(dt,ut,ft,!1,null,null,null)),pt=vt.exports,ht=n("bc3a"),bt=n.n(ht),gt={name:"OfferRequestForm",components:{Input:at,Textarea:ct,SubmitInput:pt},data:function(){return{submitted:!1}},methods:{validateForm:function(){var e=this.$store.state.visitor,t=!0;return this.$store.commit("clearFormErrors"),""==e.email&&(this.$store.commit("setFormErrorValue",{key:"email",value:"Please, provide your e-mail address, so that I can get in touch with you."}),t=!1),""==e.message&&(this.$store.commit("setFormErrorValue",{key:"message",value:"Please, describe your request to me."}),t=!1),t},handleSubmit:function(){var e=this;this.validateForm()&&bt.a.post("https://vitchenkofi.herokuapp.com/mailer",this.$store.state.visitor).then((function(){e.submitted=!0}))}}},_t=gt,Ot=Object(f["a"])(_t,Ke,Ge,!1,null,null,null),yt=Ot.exports,kt={name:"RequestOffer",components:{FullHeightSection:ke,OfferRequestForm:yt,Layout:te,BigLink:Pe},computed:Object(i["a"])({},Object(l["b"])(["asyncRequestOfferTextContent"]))},wt=kt,Mt=Object(f["a"])(wt,We,Je,!1,null,null,null),Dt=Mt.exports,Ct=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("FullHeightSection",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3"},[n("prismic-rich-text",{attrs:{field:e.aboutLeftColumnContent}})],1),n("div",{staticClass:"col-lg-3 offset-lg-5"},[n("div",{staticClass:"mb-4"},[n("h3",{staticClass:"mb-1"},[e._v("Skills")]),n("div",{staticClass:"smaller"},[n("prismic-rich-text",{attrs:{field:e.aboutSkills}})],1)]),n("div",[n("h3",{staticClass:"mb-1"},[e._v("Contact details")]),n("p",{staticClass:"mb-0 smaller"},[n("prismic-rich-text",{attrs:{field:e.aboutContactDetails}})],1)])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-11 offset-lg-1"},[n("BigLink",{attrs:{title:"Request offer",route:"/request-offer"}})],1)])])],1)},xt=[],jt={name:"About",components:{Layout:te,FullHeightSection:ke,BigLink:Pe},computed:Object(i["a"])({},Object(l["b"])(["aboutLeftColumnContent","aboutSkills","aboutContactDetails"]))},Et=jt,Lt=Object(f["a"])(Et,Ct,xt,!1,null,null,null),St=Lt.exports,It=[{path:"",component:He},{path:"/portfolio",component:Ue},{path:"/request-offer",component:Dt},{path:"/about",component:St}],Tt=It;a["a"].use(p["a"],{endpoint:window.prismic.endpoint,linkResolver:h}),a["a"].config.productionTip=!1,a["a"].use(b["a"]);var qt=new b["a"]({routes:Tt,mode:"history"}),Ft=new a["a"];new a["a"]({router:qt,store:v,render:function(e){return e(d)}}).$mount("#app")},5969:function(e,t,n){"use strict";var a=n("96a7"),s=n.n(a);s.a},"5a65":function(e,t,n){"use strict";var a=n("b3bd"),s=n.n(a);s.a},"5c0b":function(e,t,n){"use strict";var a=n("5387"),s=n.n(a);s.a},"696c":function(e,t,n){"use strict";var a=n("c852"),s=n.n(a);s.a},"8b69":function(e,t,n){},"96a7":function(e,t,n){},a01c:function(e,t,n){"use strict";var a=n("3b98"),s=n.n(a);s.a},b3bd:function(e,t,n){},c852:function(e,t,n){},cba4:function(e,t,n){"use strict";var a=n("fa7b"),s=n.n(a);s.a},d39b:function(e,t,n){"use strict";var a=n("1d06"),s=n.n(a);s.a},e881:function(e,t,n){"use strict";var a=n("f75c"),s=n.n(a);s.a},ee4c:function(e,t,n){"use strict";var a=n("22a7"),s=n.n(a);s.a},f75c:function(e,t,n){},fa7b:function(e,t,n){},fba9:function(e,t,n){"use strict";var a=n("51ea"),s=n.n(a);s.a}});
//# sourceMappingURL=app.905868a6.js.map