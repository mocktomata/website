"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[492],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),k=a,u=m["".concat(s,".").concat(k)]||m[k]||d[k]||r;return n?o.createElement(u,i(i({ref:t},c),{},{components:n})):o.createElement(u,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=n(4250),a=(n(9496),n(9613));const r={},i=void 0,p={unversionedId:"komondor",id:"komondor",title:"komondor",description:"Hi, This is komondor.",source:"@site/docs/komondor.md",sourceDirName:".",slug:"/komondor",permalink:"/website/komondor",draft:!1,editUrl:"https://github.com/mocktomata/website/docs/komondor.md",tags:[],version:"current",frontMatter:{},sidebar:"mocktomata",previous:{title:"mockto",permalink:"/website/mockto"},next:{title:"zucchini",permalink:"/website/zucchini"}},s={},l=[{value:"<code>komondor(specName, [options]): Spec</code>",id:"komondorspecname-options-spec",level:2},{value:"<code>komondor.live(specName, [options]): Spec</code>",id:"komondorlivespecname-options-spec",level:2},{value:"<code>komondor.save(specName, [options], (specName, spec) =&gt; void)</code>",id:"komondorsavespecname-options-specname-spec--void",level:2},{value:"<code>komondor.simulate(specName, [options], (specName, spec) =&gt; void)</code>",id:"komondorsimulatespecname-options-specname-spec--void",level:2},{value:"<code>komondor.teardown()</code>",id:"komondorteardown",level:2},{value:"Tips and Tricks",id:"tips-and-tricks",level:2},{value:"Recorded Demo",id:"recorded-demo",level:3},{value:"Live Debug Recording",id:"live-debug-recording",level:3},{value:"Architecture Consideration",id:"architecture-consideration",level:2},{value:"Clean Architecture",id:"clean-architecture",level:3},{value:"Dependency Injection",id:"dependency-injection",level:4}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hi, This is ",(0,a.kt)("inlineCode",{parentName:"p"},"komondor"),"."),(0,a.kt)("p",null,"I used to be a guard dog. ",(0,a.kt)("img",{src:"/mocktomata/img/komondor.jpg",alt:"komondor",width:"20"})),(0,a.kt)("p",null,"But nowadays, I'm one of the four automata in the ","[mocktomata]"," family."),(0,a.kt)("p",null,"I also have an alias ",(0,a.kt)("inlineCode",{parentName:"p"},"kd")," if you think my name is too long."),(0,a.kt)("p",null,"While ",(0,a.kt)("a",{parentName:"p",href:"/website/mockto"},(0,a.kt)("inlineCode",{parentName:"a"},"mockto"))," is specialized for testing,\nI'm more general purposed and versatile."),(0,a.kt)("p",null,"Here is how to write the same test from ",(0,a.kt)("a",{parentName:"p",href:"/website/"},"introduction"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import axios from 'axios'\nimport { komondor } from 'mocktomata'\n\ntest('get friends', async () => {\n  const spec = komondor('get friends')\n  const s = await spec(axios)\n\n  const friends = await getFriends(s, 'miku')\n  expect(friends.map(f => f.name)).toEqual(['luka', 'rumi', 'len', 'ren'])\n\n  await spec.done()\n})\n\nafterAll(() => komondor.teardown())\n")),(0,a.kt)("p",null,"So you can see ",(0,a.kt)("a",{parentName:"p",href:"/website/mockto"},(0,a.kt)("inlineCode",{parentName:"a"},"mockto"))," and me are pretty similar.\nThe only different is that you call me within the test,\nand you have to repeat the ",(0,a.kt)("inlineCode",{parentName:"p"},"specName")," (if it is the same as your test description,\nwhich is the case most of the time)."),(0,a.kt)("p",null,"Here is my API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#komondorspecname-options-spec"},(0,a.kt)("inlineCode",{parentName:"a"},"komondor(specName, [options]): Spec"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#komondorlivespecname-options-spec"},(0,a.kt)("inlineCode",{parentName:"a"},"komondor.live(specName, [options]): Spec"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#komondorsavespecname-options-specname-spec--void"},(0,a.kt)("inlineCode",{parentName:"a"},"komondor.save(specName, [options], (specName, spec) => void)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#komondorsimulatespecname-options-specname-spec--void"},(0,a.kt)("inlineCode",{parentName:"a"},"komondor.simulate(specName, [options], (specName, spec) => void)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#komondorteardown"},(0,a.kt)("inlineCode",{parentName:"a"},"komondor.teardown()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tips-and-tricks"},"Tips and Tricks"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#recorded-demo"},"Recorded Demo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#live-debug-recording"},"Live Debug Recording")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#architecture-consideration"},"Architecture Consideration"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#clean-architecture"},"Clean Architecture")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#dependency-injection"},"Dependency Injection"))))),(0,a.kt)("h2",{id:"komondorspecname-options-spec"},(0,a.kt)("inlineCode",{parentName:"h2"},"komondor(specName, [options]): Spec")),(0,a.kt)("p",null,"This is my basic usage."),(0,a.kt)("p",null,"It will return a ",(0,a.kt)("a",{parentName:"p",href:"/website/spec"},(0,a.kt)("inlineCode",{parentName:"a"},"spec"))," object to record or replay the behavior."),(0,a.kt)("p",null,"Just like ",(0,a.kt)("a",{parentName:"p",href:"/website/mockto"},(0,a.kt)("inlineCode",{parentName:"a"},"mockto")),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec")," is running in ",(0,a.kt)("inlineCode",{parentName:"p"},"auto")," mode."),(0,a.kt)("p",null,"What that means is that when when the code executes,\nif there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"SpecRecord")," available,\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec")," will make the actual calls and record the behavior.\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"SpecRecord")," available, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec")," will load the record and replay the behavior."),(0,a.kt)("p",null,"This behavior can be changed through ",(0,a.kt)("a",{parentName:"p",href:"/website/configuration"},"configuration"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"specName")," is the name of the ",(0,a.kt)("a",{parentName:"p",href:"/website/spec"},(0,a.kt)("inlineCode",{parentName:"a"},"Spec")),",\nand it needs to be unique within one test file."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec")," instance returned is the same as the one from ",(0,a.kt)("a",{parentName:"p",href:"/website/mockto"},(0,a.kt)("inlineCode",{parentName:"a"},"mockto")),",\nwith one difference: it contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"reporter")," property which is a ",(0,a.kt)("inlineCode",{parentName:"p"},"MemoryLogReporter")," from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/unional/standard-log"},"standard-log"),"."),(0,a.kt)("p",null,"i.e. here are the two different ways to get the same ",(0,a.kt)("inlineCode",{parentName:"p"},"reporter")," when using ",(0,a.kt)("a",{parentName:"p",href:"/website/mockto"},(0,a.kt)("inlineCode",{parentName:"a"},"mockto"))," and using me:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"mockto('get friends', (_, _, reporter) => { ... })\n\n// vs\ntest('get friends', async () => {\n  const spec = komondor('get friends')\n  spec.reporter\n})\n")),(0,a.kt)("h2",{id:"komondorlivespecname-options-spec"},(0,a.kt)("inlineCode",{parentName:"h2"},"komondor.live(specName, [options]): Spec")),(0,a.kt)("p",null,"Always run the spec in ",(0,a.kt)("inlineCode",{parentName:"p"},"live")," mode.\nActual calls will be made, and the behavior is not recorded.\nThese specs are not affected by configuration."),(0,a.kt)("h2",{id:"komondorsavespecname-options-specname-spec--void"},(0,a.kt)("inlineCode",{parentName:"h2"},"komondor.save(specName, [options], (specName, spec) => void)")),(0,a.kt)("p",null,"Always run the spec in ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," mode regardless if a spec record exists or not.\nThese specs are not affected by configuration."),(0,a.kt)("h2",{id:"komondorsimulatespecname-options-specname-spec--void"},(0,a.kt)("inlineCode",{parentName:"h2"},"komondor.simulate(specName, [options], (specName, spec) => void)")),(0,a.kt)("p",null,"Always run the spec in ",(0,a.kt)("inlineCode",{parentName:"p"},"simulate")," mode.\nThese specs are not affected by configuration."),(0,a.kt)("h2",{id:"komondorteardown"},(0,a.kt)("inlineCode",{parentName:"h2"},"komondor.teardown()")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"komondor")," internally has a time tracker to make sure you have called ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.done()")," at the end of each test,\nbecause that is a very common mistake."),(0,a.kt)("p",null,"But test runner like ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," will emit a warning if there are open handles at the end of the test suite (for each file).\n",(0,a.kt)("inlineCode",{parentName:"p"},"komondor.teardown()")," will clear those handles and emit necessary warnings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"afterAll(() => komondor.teardown())\n\ntest('some test', async () => {\n  const spec = komondor('some test')\n  ...\n})\n")),(0,a.kt)("h2",{id:"tips-and-tricks"},"Tips and Tricks"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"komondor")," shares the same tips and tricks for ",(0,a.kt)("a",{parentName:"p",href:"/website/mockto#tips-and-tricks"},(0,a.kt)("inlineCode",{parentName:"a"},"mockto")),"."),(0,a.kt)("p",null,"But it also has its own when it is used in production."),(0,a.kt)("h3",{id:"recorded-demo"},"Recorded Demo"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"komondor")," can record all interactions to any external system.\nThat means you can create a record, and replay it in a live demo."),(0,a.kt)("h3",{id:"live-debug-recording"},"Live Debug Recording"),(0,a.kt)("p",null,"If your customer reports a problem,\nyou can get into a live debug session with your customer and turn on ",(0,a.kt)("inlineCode",{parentName:"p"},"komondor")," recording.\nThen you can record the complete behavior and reproduce it later on."),(0,a.kt)("h2",{id:"architecture-consideration"},"Architecture Consideration"),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"komondor")," in production code,\nthere are some architecture best practice you can follow to make it easier."),(0,a.kt)("h3",{id:"clean-architecture"},"Clean Architecture"),(0,a.kt)("h4",{id:"dependency-injection"},"Dependency Injection"),(0,a.kt)("p",null,"Design your application with dependency injection in mind will make it very easy to use ",(0,a.kt)("inlineCode",{parentName:"p"},"komondor")," in production."),(0,a.kt)("p",null,"All you need to do as passing in the spec'd instance of your dependency, and it will work as is.\nWhen the time is right, call ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.done()")," to save the record."))}d.isMDXComponent=!0}}]);