"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[915],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(4250),o=(n(9496),n(9613));const r={},i=void 0,l={unversionedId:"mockto",id:"mockto",title:"mockto",description:"Now it's time to show you everything I can do.",source:"@site/docs/mockto.md",sourceDirName:".",slug:"/mockto",permalink:"/website/mockto",draft:!1,editUrl:"https://github.com/mocktomata/website/blob/main/docs/mockto.md",tags:[],version:"current",frontMatter:{},sidebar:"mocktomata",previous:{title:"setup",permalink:"/website/setup"},next:{title:"komondor",permalink:"/website/komondor"}},p={},s=[{value:"Tips and Tricks",id:"tips-and-tricks",level:2},{value:"TDD Workflow",id:"tdd-workflow",level:3},{value:"Lazy TDD Workflow",id:"lazy-tdd-workflow",level:3},{value:"Streamlined Workflow",id:"streamlined-workflow",level:3},{value:"Update One Test Record",id:"update-one-test-record",level:3},{value:"Preserving Passed Tests",id:"preserving-passed-tests",level:3},{value:"Use Configuration To Update Record",id:"use-configuration-to-update-record",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now it's time to show you everything I can do."),(0,o.kt)("p",null,"Let me introduce myself one more time."),(0,o.kt)("p",null,"I am one of the four mocktomata in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mocktomata/mocktomata/blob/master/packages/mocktomata"},"mocktomata")," family."),(0,o.kt)("p",null,"I specialize in writing tests."),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"/website/"},"introduction"),",\nI showed you this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import axios from 'axios'\nimport { mockto } from 'mocktomata'\n\nmockto('get friends', (specName, spec) => {\n  test(specName, async () => {\n    const s = await spec(axios)\n\n    const friends = await getFriends(s, 'miku')\n    expect(friends.map(f => f.name)).toEqual(['luka', 'rumi', 'len', 'ren'])\n\n    await spec.done()\n  })\n})\n")),(0,o.kt)("p",null,"You call me first and write your test inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"handler"),".\nBy doing that, you can describe the test only once (",(0,o.kt)("inlineCode",{parentName:"p"},'"get friends"')," in the example).\nThat value is passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"handler")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"specName"),",\nso you can use it in your test description (",(0,o.kt)("inlineCode",{parentName:"p"},"test(specName, ...)"),")."),(0,o.kt)("p",null,"Beside that, I am very similar to ",(0,o.kt)("a",{parentName:"p",href:"/website/komondor"},"komondor"),"."),(0,o.kt)("p",null,"In fact, while every mocktomaton do things a bit differently,\nand are good at specific use cases,\nunder the hood we provide almost the same functionality and functions."),(0,o.kt)("p",null,"So when each mocktomaton introduce ourselves,\nwe will focus on how we differ and provide the functionality to you."),(0,o.kt)("p",null,"Here are the things that we share.\nWe will just describe what they are,\nand you can find out more about them in the common documentation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/website/spec#spec"},"Spec"),": specification of behavior we record and replay."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/website/spec#what-can-be-a-spec-subject"},"spec subject")," : the subject to record the behavior from (",(0,o.kt)("inlineCode",{parentName:"li"},"axios")," in the example)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/website/spec#specrecord"},(0,o.kt)("inlineCode",{parentName:"a"},"SpecRecord")),": The record we saved for a ",(0,o.kt)("a",{parentName:"li",href:"/website/spec#spec"},"Spec"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/website/spec#spec"},(0,o.kt)("inlineCode",{parentName:"a"},"spec()")),": the function to create a ",(0,o.kt)("a",{parentName:"li",href:"/website/spec#what-can-be-a-spec-subject"},"spec subject")," ."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/website/spec#reporter"},(0,o.kt)("inlineCode",{parentName:"a"},"reporter")),": a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/unional/standard-log/blob/main/packages/log/ts/memory.ts#L7"},(0,o.kt)("inlineCode",{parentName:"a"},"MemoryLogReporter"))," from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/unional/standard-log"},"standard-log"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/website/spec#specmode"},(0,o.kt)("inlineCode",{parentName:"a"},"mode")),": the ",(0,o.kt)("a",{parentName:"li",href:"/website/spec#specmode"},(0,o.kt)("inlineCode",{parentName:"a"},"SpecMode"))," the code is currently running in."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/website/spec#done"},(0,o.kt)("inlineCode",{parentName:"a"},"done()")),": the function to indicate the ",(0,o.kt)("a",{parentName:"li",href:"/website/spec#spec"},"Spec")," is done."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/website/spec#cleanup"},(0,o.kt)("inlineCode",{parentName:"a"},"cleanup()")),": a overall clean up function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/website/spec#maskvalue"},(0,o.kt)("inlineCode",{parentName:"a"},"maskValue()")),": the function to mask sensitive value from logs and ",(0,o.kt)("a",{parentName:"li",href:"/website/spec#specrecord"},(0,o.kt)("inlineCode",{parentName:"a"},"SpecRecord")),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/website/spec#ignoremismatch"},(0,o.kt)("inlineCode",{parentName:"a"},"ignoreMismatch()")),": the function to tell us to ignore specific changes.")),(0,o.kt)("p",null,"Let's take a look at my main API in detail:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"mockto(specName, specOptions?, handler: (specName, spec, reporter) => void)"))),(0,o.kt)("p",null,"This is the common way to utilize me."),(0,o.kt)("p",null,"I will run the ",(0,o.kt)("a",{parentName:"p",href:"/website/spec#spec"},"Spec")," in ",(0,o.kt)("a",{parentName:"p",href:"/website/spec#specmode"},"auto mode"),"."),(0,o.kt)("p",null,"This behavior can be changed through ",(0,o.kt)("a",{parentName:"p",href:"/website/configuration"},"configuration"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"specOptions")," is a ",(0,o.kt)("a",{parentName:"p",href:"/website/spec#spec"},(0,o.kt)("inlineCode",{parentName:"a"},"Spec.Options")),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"handler")," is where you use the ",(0,o.kt)("a",{parentName:"p",href:"/website/spec#spec"},(0,o.kt)("inlineCode",{parentName:"a"},"spec()"))," to write your test."),(0,o.kt)("p",null,"There are 3 variants of this call:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"mockto.live(...)"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"mockto.save(...)"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"mockto.simulate(...)"))),(0,o.kt)("p",null,"They run the ",(0,o.kt)("a",{parentName:"p",href:"/website/spec#spec"},"Spec")," in those ",(0,o.kt)("a",{parentName:"p",href:"/website/spec#specmode"},"mode")," respectively.\nThe ",(0,o.kt)("a",{parentName:"p",href:"/website/configuration"},"configuration")," will not change the behavior if I am called this way."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"mockto.cleanup()"))),(0,o.kt)("p",null,"This is the ",(0,o.kt)("a",{parentName:"p",href:"/website/spec#cleanup"},(0,o.kt)("inlineCode",{parentName:"a"},"cleanup()"))," function."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"alias as ",(0,o.kt)("inlineCode",{parentName:"p"},"mt"))),(0,o.kt)("p",null,"Besides calling me as ",(0,o.kt)("inlineCode",{parentName:"p"},"mockto"),", you can also call me as ",(0,o.kt)("inlineCode",{parentName:"p"},"mt"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { mt } from 'mocktomata'\n\nmt(...)\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/website/komondor"},(0,o.kt)("inlineCode",{parentName:"a"},"komondor"))," said that people think his name is too long to type so he wants to be alias as ",(0,o.kt)("inlineCode",{parentName:"p"},"kd"),".\nAnd as he does that, he also give me this ",(0,o.kt)("inlineCode",{parentName:"p"},"mt")," alias."),(0,o.kt)("p",null,"Oh well."),(0,o.kt)("h2",{id:"tips-and-tricks"},"Tips and Tricks"),(0,o.kt)("p",null,"Here are some tips and tricks to help you become more productive when using me."),(0,o.kt)("h3",{id:"tdd-workflow"},"TDD Workflow"),(0,o.kt)("p",null,"If you are writing code TDD style,\nuse ",(0,o.kt)("inlineCode",{parentName:"p"},"mockto.live()")," throughout your red-green-refactor process.\nAfter you are done, change it to ",(0,o.kt)("inlineCode",{parentName:"p"},"mockto()")," and run the test again."),(0,o.kt)("h3",{id:"lazy-tdd-workflow"},"Lazy TDD Workflow"),(0,o.kt)("p",null,"Instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"mockto.live()"),", you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"mockto.save()"),".\nThis will save you from running the test again after updating to ",(0,o.kt)("inlineCode",{parentName:"p"},"mockto()"),"."),(0,o.kt)("h3",{id:"streamlined-workflow"},"Streamlined Workflow"),(0,o.kt)("p",null,"Instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"mockto.live()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"mockto.save()"),",\nyou can use ",(0,o.kt)("inlineCode",{parentName:"p"},"mockto()")," directly but do not add the ",(0,o.kt)("a",{parentName:"p",href:"/website/spec#done"},(0,o.kt)("inlineCode",{parentName:"a"},"done()"))," call until you are done refactoring.\nYour test runner will complain until you call ",(0,o.kt)("a",{parentName:"p",href:"/website/spec#done"},(0,o.kt)("inlineCode",{parentName:"a"},"done()")),",\nbut you can safely ignore that as you know what you are doing."),(0,o.kt)("h3",{id:"update-one-test-record"},"Update One Test Record"),(0,o.kt)("p",null,"Change ",(0,o.kt)("inlineCode",{parentName:"p"},"mockto()")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"mockto.save()"),", run the test, and switch it back."),(0,o.kt)("h3",{id:"preserving-passed-tests"},"Preserving Passed Tests"),(0,o.kt)("p",null,"If the external dependency is not stable or no longer available (for the time being or require specific condition or permission),\nyou can consider changing some tests from ",(0,o.kt)("inlineCode",{parentName:"p"},"mockto()")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"mockto.simulate()")," so that the test behavior is preserved."),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"mockto.simulate()"),", configuration will not change it behavior thus will not accidentally overwrite the record.\nHowever, this should be done with care, because you are essentially changing the test to a simple mocked unit test."),(0,o.kt)("h3",{id:"use-configuration-to-update-record"},"Use Configuration To Update Record"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/website/configuration#tips-and-tricks"},(0,o.kt)("inlineCode",{parentName:"a"},"configuration tips and tricks"))," session for ways to update multiple records."))}m.isMDXComponent=!0}}]);