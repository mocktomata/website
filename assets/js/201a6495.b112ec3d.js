"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[915],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,u=d["".concat(l,".").concat(k)]||d[k]||m[k]||i;return n?o.createElement(u,r(r({ref:t},c),{},{components:n})):o.createElement(u,r({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=n(4250),a=(n(9496),n(9613));const i={},r=void 0,p={unversionedId:"mockto",id:"mockto",title:"mockto",description:"Now it's time to show you everything I can do.",source:"@site/docs/mockto.md",sourceDirName:".",slug:"/mockto",permalink:"/website/mockto",draft:!1,editUrl:"https://github.com/mocktomata/website/docs/mockto.md",tags:[],version:"current",frontMatter:{},sidebar:"mocktomata",previous:{title:"setup",permalink:"/website/setup"},next:{title:"komondor",permalink:"/website/komondor"}},l={},s=[{value:"<code>mockto(specName, [options], (specName, spec, reporter) =&gt; void)</code>",id:"mocktospecname-options-specname-spec-reporter--void",level:2},{value:"<code>mockto.live(specName, [options], (specName, spec, reporter) =&gt; void)</code>",id:"mocktolivespecname-options-specname-spec-reporter--void",level:2},{value:"<code>mockto.save(specName, [options], (specName, spec, reporter) =&gt; void)</code>",id:"mocktosavespecname-options-specname-spec-reporter--void",level:2},{value:"<code>mockto.simulate(specName, [options], (specName, spec, reporter) =&gt; void)</code>",id:"mocktosimulatespecname-options-specname-spec-reporter--void",level:2},{value:"<code>mockto.teardown()</code>",id:"mocktoteardown",level:2},{value:"alias as <code>mt</code>",id:"alias-as-mt",level:2},{value:"Tips and Tricks",id:"tips-and-tricks",level:2},{value:"TDD Workflow",id:"tdd-workflow",level:3},{value:"Lazy TDD Workflow",id:"lazy-tdd-workflow",level:3},{value:"Streamlined Workflow",id:"streamlined-workflow",level:3},{value:"Update One Test Record",id:"update-one-test-record",level:3},{value:"Preserving Passed Tests",id:"preserving-passed-tests",level:3},{value:"Use Configuration To Update Record",id:"use-configuration-to-update-record",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now it's time to show you everything I can do."),(0,a.kt)("p",null,"I am one of the four mocktomata in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mocktomata/mocktomata/blob/master/packages/mocktomata"},"mocktomata")," family."),(0,a.kt)("p",null,"I specialize in writing tests."),(0,a.kt)("p",null,"Let me repeat the example from ","[introduction]",",\nbut with detail explanations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import axios from 'axios'\nimport { mockto } from 'mocktomata'\n\nmockto('get friends', (specName, spec) => {\n  test(specName, async () => {\n    const s = await spec(axios)\n\n    const friends = await getFriends(s, 'miku')\n    expect(friends.map(f => f.name)).toEqual(['luka', 'rumi', 'len', 'ren'])\n\n    await spec.done()\n  })\n})\n")),(0,a.kt)("p",null,"You can see that the key piece is the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," function.\nIn fact, while every mocktomaton do things a bit differently,\nat our core we all provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," function to you."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec"),' is what we use to track "a set of behavior".\nThe only different is how do we provide it to you.'),(0,a.kt)("p",null,"Since it is a standalone topic that shared among all mocktomata,\nI will detail it in a different section."),(0,a.kt)("p",null,"Right now, let me first go through the details about myself."),(0,a.kt)("p",null,"We will get into the detail of ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec")," in a moment,"),(0,a.kt)("p",null,"Before I get into the detail of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec"),",\nlet me first describe my API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#mocktospecname-options-specname-spec-reporter--void"},(0,a.kt)("inlineCode",{parentName:"a"},"mockto(specName, [options], (specName, spec, reporter) => void)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#mocktolivespecname-options-specname-spec-reporter--void"},(0,a.kt)("inlineCode",{parentName:"a"},"mockto.live(specName, [options], (specName, spec, reporter) => void)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#mocktosavespecname-options-specname-spec-reporter--void"},(0,a.kt)("inlineCode",{parentName:"a"},"mockto.save(specName, [options], (specName, spec, reporter) => void)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#mocktosimulatespecname-options-specname-spec-reporter--void"},(0,a.kt)("inlineCode",{parentName:"a"},"mockto.simulate(specName, [options], (specName, spec, reporter) => void)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#mocktoteardown"},(0,a.kt)("inlineCode",{parentName:"a"},"mockto.teardown()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tips-and-tricks"},"Tips and Tricks"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tdd-workflow"},"TDD Workflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#lazy-tdd-workflow"},"Lazy TDD Workflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#streamlined-workflow"},"Streamlined Workflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#update-one-test-record"},"Update One Test Record")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#preserving-passed-tests"},"Preserving Passed Tests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-configuration-to-update-record"},"Use Configuration To Update Record"))))),(0,a.kt)("h2",{id:"mocktospecname-options-specname-spec-reporter--void"},(0,a.kt)("inlineCode",{parentName:"h2"},"mockto(specName, [options], (specName, spec, reporter) => void)")),(0,a.kt)("p",null,"This is the common way to utilize me."),(0,a.kt)("p",null,"It will run the ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"auto")," mode."),(0,a.kt)("p",null,"What that means is that when when the code executes,\nif there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"SpecRecord")," available,\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec")," will make the actual calls and record the behavior.\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"SpecRecord")," available, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec")," will load the record and replay the behavior."),(0,a.kt)("p",null,"This behavior can be changed through ",(0,a.kt)("a",{parentName:"p",href:"/website/configuration"},"configuration"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"specName")," is the name of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec")," (duh).\nIt is passed into the ",(0,a.kt)("inlineCode",{parentName:"p"},"handler")," so that you can use it as the test description.\nThis way, you don't have to repeat the same thing twice."),(0,a.kt)("p",null,"It is also used as the identifier of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec")," within one test file.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"SpecRecord")," will be named after the ",(0,a.kt)("inlineCode",{parentName:"p"},"specName"),".\nThat means, if you use some grouping functions such as ",(0,a.kt)("inlineCode",{parentName:"p"},"describe()"),",\nyou may accidentially two ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec")," with the same identifier,\nso one of them will not work correctly.\nI'll talk more about it when we get to the detail of ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"handler")," is where I provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," function to you.\nYou can use it to write your test."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"handler")," also provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"reporter")," which is a ",(0,a.kt)("inlineCode",{parentName:"p"},"MemoryLogReporter")," from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/unional/standard-log"},"standard-log"),".\nIt captures the logs so that you can examine them programmatically.\nIt is part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec")," so I will show you how to use it in that section."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec.Options")," that used to configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec"),".\nAgain, I will talk more about it when we get to the detail of ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec"),"."),(0,a.kt)("h2",{id:"mocktolivespecname-options-specname-spec-reporter--void"},(0,a.kt)("inlineCode",{parentName:"h2"},"mockto.live(specName, [options], (specName, spec, reporter) => void)")),(0,a.kt)("p",null,"Always run the spec in ",(0,a.kt)("inlineCode",{parentName:"p"},"live")," mode.\nActual calls will be made, and the behavior is not recorded.\nThese specs are not affected by configuration."),(0,a.kt)("h2",{id:"mocktosavespecname-options-specname-spec-reporter--void"},(0,a.kt)("inlineCode",{parentName:"h2"},"mockto.save(specName, [options], (specName, spec, reporter) => void)")),(0,a.kt)("p",null,"Always run the spec in ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," mode regardless if a spec record exists or not.\nThese specs are not affected by configuration."),(0,a.kt)("h2",{id:"mocktosimulatespecname-options-specname-spec-reporter--void"},(0,a.kt)("inlineCode",{parentName:"h2"},"mockto.simulate(specName, [options], (specName, spec, reporter) => void)")),(0,a.kt)("p",null,"Always run the spec in ",(0,a.kt)("inlineCode",{parentName:"p"},"simulate")," mode.\nThese specs are not affected by configuration."),(0,a.kt)("h2",{id:"mocktoteardown"},(0,a.kt)("inlineCode",{parentName:"h2"},"mockto.teardown()")),(0,a.kt)("p",null,"Each mocktomata internally has a time tracker to make sure you have called ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.done()")," at the end of each test,\nbecause that is a very common mistake."),(0,a.kt)("p",null,"But test runner like ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," will emit a warning if there are open handles at the end of the test suite (for each file).\n",(0,a.kt)("inlineCode",{parentName:"p"},"mockto.teardown()")," will clear those handles and emit necessary warnings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"afterAll(() => mockto.teardown())\n\nmockto('some test', (specName, spec) => {\n  test(specName, async () => { ... })\n})\n")),(0,a.kt)("h2",{id:"alias-as-mt"},"alias as ",(0,a.kt)("inlineCode",{parentName:"h2"},"mt")),(0,a.kt)("p",null,"Besides calling me as ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto"),", you can also call me as ",(0,a.kt)("inlineCode",{parentName:"p"},"mt"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { mt } from 'mocktomata'\n\nmt(...)\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/website/komondor"},(0,a.kt)("inlineCode",{parentName:"a"},"komondor"))," said that people think his name is too long to type so he wants to be alias as ",(0,a.kt)("inlineCode",{parentName:"p"},"kd"),".\nAnd as he does that, he also give me this ",(0,a.kt)("inlineCode",{parentName:"p"},"mt")," alias."),(0,a.kt)("p",null,"Oh well."),(0,a.kt)("h2",{id:"tips-and-tricks"},"Tips and Tricks"),(0,a.kt)("p",null,"Here are some tips and tricks to help you become more productive when using ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto"),"."),(0,a.kt)("h3",{id:"tdd-workflow"},"TDD Workflow"),(0,a.kt)("p",null,"If you are writing code TDD style,\nuse ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto.live()")," throughout your red-green-refactor process.\nAfter you are done, change it to ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto()")," and run the test again."),(0,a.kt)("h3",{id:"lazy-tdd-workflow"},"Lazy TDD Workflow"),(0,a.kt)("p",null,"Instead of using ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto.live()"),", you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto.save()"),".\nThis will save you from running the test again after updating to ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto()"),"."),(0,a.kt)("h3",{id:"streamlined-workflow"},"Streamlined Workflow"),(0,a.kt)("p",null,"Instead of using ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto.live()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto.save()"),",\nyou can use ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto()")," directly but do not add the last ",(0,a.kt)("inlineCode",{parentName:"p"},"await spec.done()")," call until you are done refactoring.\nWhen your get your test to pass, it will emit a warning letting you know you forgot to do ",(0,a.kt)("inlineCode",{parentName:"p"},"await spec.done()"),"."),(0,a.kt)("h3",{id:"update-one-test-record"},"Update One Test Record"),(0,a.kt)("p",null,"By changing ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto()")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto.save()"),", run the test, and switch it back."),(0,a.kt)("h3",{id:"preserving-passed-tests"},"Preserving Passed Tests"),(0,a.kt)("p",null,"If the external dependency is not stable or no longer available (for the time being or require specific condition or permission),\nyou can consider changing some tests from ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto()")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto.simulate()")," so that the test behavior is preserved."),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"mockto.simulate()"),", configuration will not change it behavior thus will not accidentally overwrite the record.\nHowever, this should be done with care, because you are essentially changing the test to a simple mocked unit test."),(0,a.kt)("h3",{id:"use-configuration-to-update-record"},"Use Configuration To Update Record"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"/website/configuration#tips-and-tricks"},(0,a.kt)("inlineCode",{parentName:"a"},"configuration tips and tricks"))," session for ways to update multiple records."))}m.isMDXComponent=!0}}]);