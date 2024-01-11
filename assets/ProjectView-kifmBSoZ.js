import{r as Q,o as F,a as _,b as V,c,d,w as p,v as H,e,f as a,g as r,t as o,F as b,i as T,j as M,n as z,k as C,l as P}from"./index-oUPliJH-.js";import{L as A}from"./LanguageSwitcher-b2tz9bgY.js";const B=e("label",{for:"burger-toggle",class:"burger-menu"},[e("div",{class:"line"}),e("div",{class:"line"}),e("div",{class:"line"})],-1),I={class:"menu"},D={class:"menu-inner"},K={class:"menu-nav"},R={class:"menu-nav-item"},W={class:"divitemenu"},G={class:"menu-nav-item"},J={class:"menu-nav-link"},Y={class:"divitemenu"},X={class:"menu-nav-item"},Z={class:"divitemenu"},$={class:"menu-nav-item"},ee={class:"divitemenu"},te={class:"gallery"},ie={class:"title"},se={class:"mt-8"},oe={class:"images"},le=e("div",{class:"image","data-label":"Projet universitaire"},[e("img",{src:"https://imgur.com/U30rNFW.png",alt:""})],-1),ne=e("div",{class:"image","data-label":"Bénévolat"},[e("img",{src:"https://imgur.com/T8nR2pG.png",alt:""})],-1),ae=e("div",{class:"image","data-label":"Stage en entreprise"},[e("img",{src:"https://imgur.com/JL1vjyP.png",alt:""})],-1),ce=e("div",{class:"image","data-label":"Projet web"},[e("img",{src:"https://imgur.com/QEknUuq.png",alt:""})],-1),de=M('<div class="cercle2 w-8 h-8 bg-light-cloudColor rounded-full absolute -top-6 left-12"></div><div class="cercle3 w-10 h-10 bg-light-cloudColor rounded-full absolute -top-5 -left-5"></div><div class="cercle1 w-8 h-8 bg-light-cloudColor rounded-full absolute top-12 -left-8"></div><div class="cercle2 w-8 h-8 bg-light-cloudColor rounded-full absolute -top-6 right-12"></div><div class="cercle3 w-10 h-10 bg-light-cloudColor rounded-full absolute -top-5 -right-5"></div><div class="cercle1 w-8 h-8 bg-light-cloudColor rounded-full absolute top-12 -right-8"></div>',6),re={class:"titleproject flex justify-center text-4xl"},me={class:"ag-timeline-block"},ue={class:"ag-section"},ge={class:"ag-format-container"},_e={ref:"agTimeline",class:"js-timeline ag-timeline"},he={ref:"agTimelineLine",class:"js-timeline_line ag-timeline_line"},ve={ref:"agTimelineLineProgress",class:"js-timeline_line-progress ag-timeline_line-progress"},fe={class:"ag-timeline_list"},pe={class:"ag-timeline-card_box"},be={class:"ag-timeline-card_point"},we={class:"ag-timeline-card_meta-box"},je={class:"ag-timeline-card_meta"},ke={class:"ag-timeline-card_meta-box"},ye={class:"ag-timeline-card_meta"},Te={class:"ag-timeline-card_point"},Ce={class:"ag-timeline-card_item"},Pe={class:"ag-timeline-card_inner"},Se={class:"ag-timeline-card_img-box"},Le={key:0,class:"ag-timeline-card_img",frameborder:"0",src:"https://www.youtube.com/embed/UNQxvMSKcTE?ab_channel=jim&autoplay=1&mute=1&loop=1&controls=0&playlist=UNQxvMSKcTE",title:"Cliquez pour découvrir le projet"},Ue=["src"],qe={class:"ag-timeline-card_info"},xe={class:"ag-timeline-card_title"},Ee={class:"ag-timeline-card_desc"},Ne={class:"tagsdiv"},Oe=["href"],Qe=e("div",{class:"ag-timeline-card_arrow"},null,-1),Me={__name:"ProjectView",setup(Fe){const h=Q(!1),S=()=>{h.value?(console.log("La checkbox est cochée!"),document.querySelector(".ag-timeline-block").style.display="none"):(console.log("La checkbox est décochée!"),document.querySelector(".ag-timeline-block").style.display="")};F(()=>{console.log("loaded");const t=document.querySelectorAll('div[style*="display: none"]');console.log(t),t.forEach(function(i){i.remove()}),L()});function L(){let t=_.timeline();_({targets:".cercle1",width:"4rem",height:"4rem",duration:1e3,easing:"easeInOutQuad"}),_({targets:".cercle2",width:"4rem",height:"4rem",duration:1e3,easing:"easeInOutQuad"}),_({targets:".cercle3",width:"5rem",height:"5rem",duration:1e3,easing:"easeInOutQuad"}),t.play()}return document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll('div[style*="display: none"]');console.log(t),t.forEach(function(i){i.remove()})}),function(t){t(function(){let i,l,s,n;t(window).on("scroll",function(){U()}),t(window).on("resize",function(){q()});var m=t(".js-timeline"),w=t(".js-timeline_line"),j=t(".js-timeline_line-progress"),g=t(".js-timeline-card_point-box"),u=t(".js-timeline_item"),v=t(window).outerHeight();t(window).height();var k=-1,f=!1;function U(){i=t(window).scrollTop(),y()}function q(){i=t(window).scrollTop(),t(window).height(),y()}function x(){f=!1,w.css({top:u.first().find(g).offset().top-u.first().offset().top,bottom:m.offset().top+m.outerHeight()-u.last().find(g).offset().top}),k!==i&&(k=i,E())}function E(){var N=u.last().find(g).offset().top;l=N+i-t(window).scrollTop(),s=j.offset().top+i-t(window).scrollTop(),n=i-s+v/2,l<=i+v/2&&(n=l-s),j.css({height:n+"px"}),u.each(function(){var O=t(this).find(g).offset().top;O+i-t(window).scrollTop()<i+.5*v?t(this).addClass("js-ag-active"):t(this).removeClass("js-ag-active")})}function y(){f||requestAnimationFrame(x),f=!0}})}(jQuery),(t,i)=>{const l=V("router-link");return c(),d(b,null,[p(e("input",{type:"checkbox","onUpdate:modelValue":i[0]||(i[0]=s=>h.value=s),onChange:S,id:"burger-toggle"},null,544),[[H,h.value]]),B,e("div",I,[e("div",D,[e("ul",K,[e("li",R,[a(l,{class:"menu-nav-link",to:"/about"},{default:r(()=>[e("span",W,[e("div",null,o(t.$t("nav.home")),1)])]),_:1})]),e("li",G,[e("button",J,[e("span",Y,[e("div",null,o(t.$t("nav.projects")),1)])])]),e("li",X,[a(l,{class:"menu-nav-link",to:"/"},{default:r(()=>[e("span",Z,[e("div",null,o(t.$t("nav.skills")),1)])]),_:1})]),e("li",$,[a(l,{class:"menu-nav-link",to:"/"},{default:r(()=>[e("span",ee,[e("div",null,o(t.$t("nav.contact")),1)])]),_:1})])]),e("div",te,[e("div",ie,[a(A),e("p",se,o(t.$t("nav.discovery")),1)]),e("div",oe,[a(l,{class:"image-link",to:"/projects"},{default:r(()=>[le]),_:1}),a(l,{class:"image-link",to:"/projects"},{default:r(()=>[ne]),_:1}),a(l,{class:"image-link",to:"/projects"},{default:r(()=>[ae]),_:1}),a(l,{class:"image-link",to:"/projects"},{default:r(()=>[ce]),_:1})])])])]),de,e("h1",re,o(t.$t("projects.title")),1),e("div",me,[e("section",ue,[e("div",ge,[e("div",_e,[e("div",he,[e("div",ve,null,512)],512),e("div",fe,[(c(!0),d(b,null,T(t.$tm("projects.data"),(s,n)=>(c(),d("div",{key:s.id,class:z([{"js-ag-active":s.isActive},"js-timeline_item ag-timeline_item"])},[e("div",pe,[p(e("div",null,[e("div",{ref_for:!0,ref:"agTimelinePoint",class:"js-timeline-card_point-box ag-timeline-card_point-box"},[e("div",be,o(t.$rt(s.year)),1)],512),e("div",we,[e("div",je,o(t.$rt(s.nameProject)),1)])],512),[[P,n%2===0]]),p(e("div",null,[e("div",ke,[e("div",ye,o(t.$rt(s.nameProject)),1)]),e("div",{ref_for:!0,ref:"agTimelinePoint",class:"js-timeline-card_point-box ag-timeline-card_point-box"},[e("div",Te,o(t.$rt(s.year)),1)],512)],512),[[P,n%2!=0]])]),e("div",Ce,[e("div",Pe,[e("div",Se,[n===6?(c(),d("iframe",Le)):C("",!0),n!=6?(c(),d("img",{key:1,src:t.$rt(s.imageSrc),class:"ag-timeline-card_img",width:"640",height:"360"},null,8,Ue)):C("",!0)]),e("div",qe,[e("div",xe,o(t.$rt(s.nameProject)),1),e("div",Ee,o(t.$rt(s.description)),1),e("div",Ne,[(c(!0),d(b,null,T(s.tags,(m,w)=>(c(),d("span",null,[e("a",{class:"tags",target:"_blank",href:m.src},o(m.title),9,Oe)]))),256))])])]),Qe])],2))),128))])],512)])])])],64)}}};export{Me as default};
