"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[614],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,b=m["".concat(p,".").concat(d)]||m[d]||s[d]||r;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(4250),i=(n(9496),n(9613));const r={},o="incubator",c={unversionedId:"incubator",id:"incubator",title:"incubator",description:"This is the user manual for incubator.",source:"@site/docs/incubator.md",sourceDirName:".",slug:"/incubator",permalink:"/website/incubator",draft:!1,editUrl:"https://github.com/mocktomata/website/blob/main/docs/incubator.md",tags:[],version:"current",frontMatter:{},sidebar:"mocktomata",previous:{title:"zucchini",permalink:"/website/zucchini"},next:{title:"Spec",permalink:"/website/spec"}},p={},l=[{value:"<code>incubator.config()</code>",id:"incubatorconfig",level:2},{value:"<code>incubator(specName, (specName, spec) =&gt; void)</code>",id:"incubatorspecname-specname-spec--void",level:2},{value:"<code>incubator.sequence(specName, (specName, { save, simulate }) =&gt; void)</code>",id:"incubatorsequencespecname-specname--save-simulate---void",level:2}],u={toc:l};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"incubator"},(0,i.kt)("inlineCode",{parentName:"h1"},"incubator")),(0,i.kt)("p",null,"This is the user manual for ",(0,i.kt)("inlineCode",{parentName:"p"},"incubator"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"incubator")," is primary used to develop ",(0,i.kt)("a",{parentName:"p",href:"./plugin.md"},(0,i.kt)("inlineCode",{parentName:"a"},"plugin")),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#incubator"},(0,i.kt)("inlineCode",{parentName:"a"},"incubator")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#incubatorconfig"},(0,i.kt)("inlineCode",{parentName:"a"},"incubator.config()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#incubatorspecname-specname-spec--void"},(0,i.kt)("inlineCode",{parentName:"a"},"incubator(specName, (specName, spec) => void)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#incubatorsequencespecname-specname--save-simulate---void"},(0,i.kt)("inlineCode",{parentName:"a"},"incubator.sequence(specName, (specName, { save, simulate }) => void)")))))),(0,i.kt)("h2",{id:"incubatorconfig"},(0,i.kt)("inlineCode",{parentName:"h2"},"incubator.config()")),(0,i.kt)("p",null,"To use the ",(0,i.kt)("inlineCode",{parentName:"p"},"incubator"),", you need to call ",(0,i.kt)("inlineCode",{parentName:"p"},"incubator.config()")," to add your plugin to the system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { incubator } from 'mocktomata'\nimport { activate } from '.'\n\nbeforeAll(() => incubator.config({ plugins: [\n  'other-plugin-a',\n  ['your-plugin', activate],\n  'other-plugin-b'\n]}))\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"activate")," is the activate function you export (",(0,i.kt)("inlineCode",{parentName:"p"},"function activate(context: SpecPlugin.ActivationContext): any"),")."),(0,i.kt)("p",null,"As shown in the example above, you can load other plugins to create a specific test environment."),(0,i.kt)("p",null,"Note that the general configuration mechanism does not affect ",(0,i.kt)("inlineCode",{parentName:"p"},"incubator"),"."),(0,i.kt)("h2",{id:"incubatorspecname-specname-spec--void"},(0,i.kt)("inlineCode",{parentName:"h2"},"incubator(specName, (specName, spec) => void)")),(0,i.kt)("p",null,"This is the basic usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"incubator"),"."),(0,i.kt)("p",null,"It will call the handler (",(0,i.kt)("inlineCode",{parentName:"p"},"(specName, spec) => void"),") twice.\nFirst in ",(0,i.kt)("inlineCode",{parentName:"p"},"save")," mode, second in ",(0,i.kt)("inlineCode",{parentName:"p"},"simulate")," mode."),(0,i.kt)("p",null,"This make sure the plugin supports the test scenario correctly."),(0,i.kt)("h2",{id:"incubatorsequencespecname-specname--save-simulate---void"},(0,i.kt)("inlineCode",{parentName:"h2"},"incubator.sequence(specName, (specName, { save, simulate }) => void)")),(0,i.kt)("p",null,"Allow you to run ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"save")," mode and in ",(0,i.kt)("inlineCode",{parentName:"p"},"simulate")," mode sequentially.\nThis is useful for writing negative tests for plugins."))}s.isMDXComponent=!0}}]);