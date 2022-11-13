"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[128],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,k=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(4250),o=(n(9496),n(9613));const r={title:"Introduction",slug:"/"},i=void 0,l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Welcome to [mocktomata], a behavior simulation system.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/website/",draft:!1,editUrl:"https://github.com/mocktomata/website/docs/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/"},sidebar:"mocktomata",next:{title:"setup",permalink:"/website/setup"}},c={},s=[],m={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/website/img/mocktomata.png",height:"200px",align:"right"}),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mocktomata/mocktomata/blob/master/packages/mocktomata"},"mocktomata"),", a behavior simulation system."),(0,o.kt)("p",null,"My name is ",(0,o.kt)("a",{parentName:"p",href:"#mockto"},(0,o.kt)("inlineCode",{parentName:"a"},"mockto")),"."),(0,o.kt)("p",null,"I will be your guide around here."),(0,o.kt)("p",null,"In a nutshell, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mocktomata/mocktomata/blob/master/packages/mocktomata"},"mocktomata")," saves the behavior of your code,\nand simulate it at a later time."),(0,o.kt)("p",null,"We can isolate your code from the changes and uncertainty of the outside world.\nAnd we can connect your code back by a flip of a switch."),(0,o.kt)("p",null,"That means, instead of manually writing mocks, you can write end-to-end (e2e) tests,\nand run them as e2e or unit tests."),(0,o.kt)("p",null,"Here is a quick example of how to use myself in a test:"),(0,o.kt)("p",null,"Let's say you have a function ",(0,o.kt)("inlineCode",{parentName:"p"},"getFriends()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export function getFriends(axios, name) { ... }\n")),(0,o.kt)("p",null,"It calls a remote service to get a list of friends based on the input."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," instance is passed in for easy mocking,\na common practice for functional styled programming."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import axios from 'axios'\nimport { mockto } from 'mocktomata'\n\nmockto('get friends', (specName, spec) => {\n  test(specName, async () => {\n    const s = await spec(axios)\n\n    const friends = await getFriends(s, 'miku')\n    expect(friends.map(f => f.name)).toEqual(['luka', 'rumi', 'len', 'ren'])\n\n    await spec.done()\n  })\n})\n")),(0,o.kt)("p",null,"When you run this test for the first time,\nI will make the actual call to the remote service to validate the behavior.\nWhen the test is completed,\nI will save the behavior into a ",(0,o.kt)("inlineCode",{parentName:"p"},"SpecRecord"),"."),(0,o.kt)("p",null,"The next time you run the test again,\nI will use the saved ",(0,o.kt)("inlineCode",{parentName:"p"},"SpecRecord")," to replay the behavior.\nSo the test is running just like a unit test."),(0,o.kt)("p",null,"When you want to change my behavior,\nsay you want to do run the test as a e2e test,\nor the remote service have changed and you need to update the behavior,\nyou can change the ",(0,o.kt)("inlineCode",{parentName:"p"},"SpecMode")," by either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"change ",(0,o.kt)("inlineCode",{parentName:"li"},"mockto(...)")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"mockto.live(...)")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"mockto.save(...)")," for a particular test, or"),(0,o.kt)("li",{parentName:"ul"},"call ",(0,o.kt)("inlineCode",{parentName:"li"},"config(...)")," to change the ",(0,o.kt)("inlineCode",{parentName:"li"},"SpecMode")," for all or a filtered list of tests.")),(0,o.kt)("p",null,"You can learn more about these details in subsequent sections.\nBut first, let me show you how to setup ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mocktomata/mocktomata/blob/master/packages/mocktomata"},"mocktomata"),"."))}u.isMDXComponent=!0}}]);