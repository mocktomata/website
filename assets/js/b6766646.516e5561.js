"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[805],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(4250),i=(n(9496),n(9613));const r={},o="spec",s={unversionedId:"spec",id:"spec",title:"spec",description:"This is the user manual for spec.",source:"@site/docs/spec.md",sourceDirName:".",slug:"/spec",permalink:"/website/spec",draft:!1,editUrl:"https://github.com/mocktomata/website/blob/main/docs/spec.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"<code>spec&lt;S&gt;(subject: S): Promise&lt;S&gt;</code>",id:"specssubject-s-promises",level:2},{value:"<code>spec.done(): Promise&lt;void&gt;</code>",id:"specdone-promisevoid",level:2},{value:"<code>spec.ignoreMismatch(value)</code>",id:"specignoremismatchvalue",level:2},{value:"<code>spec.maskValue(value, [replaceWith])</code>",id:"specmaskvaluevalue-replacewith",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spec"},"spec"),(0,i.kt)("p",null,"This is the user manual for ",(0,i.kt)("inlineCode",{parentName:"p"},"spec"),"."),(0,i.kt)("p",null,"You will get a ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," object when using ",(0,i.kt)("a",{parentName:"p",href:"/website/mockto"},(0,i.kt)("inlineCode",{parentName:"a"},"mockto")),", ",(0,i.kt)("a",{parentName:"p",href:"/website/komondor"},(0,i.kt)("inlineCode",{parentName:"a"},"komondor"))," and ",(0,i.kt)("a",{parentName:"p",href:"/website/incubator"},(0,i.kt)("inlineCode",{parentName:"a"},"incubator")),"."),(0,i.kt)("p",null,"It is the main mechanism to record the behaviors."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#spec"},"spec"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#specssubject-s-promises"},(0,i.kt)("inlineCode",{parentName:"a"},"spec<S>(subject: S): Promise<S>"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#specdone-promisevoid"},(0,i.kt)("inlineCode",{parentName:"a"},"spec.done(): Promise<void>"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#specignoremismatchvalue"},(0,i.kt)("inlineCode",{parentName:"a"},"spec.ignoreMismatch(value)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#specmaskvaluevalue-replacewith"},(0,i.kt)("inlineCode",{parentName:"a"},"spec.maskValue(value, [replaceWith])")))))),(0,i.kt)("h2",{id:"specssubject-s-promises"},(0,i.kt)("inlineCode",{parentName:"h2"},"spec<S>(subject: S): Promise<S>")),(0,i.kt)("p",null,"This tell the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"test double")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"subject"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"test double")," should be used in place of the ",(0,i.kt)("inlineCode",{parentName:"p"},"subject"),".\nIt will record or replay the behavior depends on which ",(0,i.kt)("inlineCode",{parentName:"p"},"mode")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," is in."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," to create test doubles for multiple subjects.\nThis is useful when using ",(0,i.kt)("inlineCode",{parentName:"p"},"mocktomata")," in production code.\nIt should work as is (but not tested at the moment. So if you encounter any issue, please file an issue ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mocktomata/mocktomata/issues"},"here"),")."),(0,i.kt)("h2",{id:"specdone-promisevoid"},(0,i.kt)("inlineCode",{parentName:"h2"},"spec.done(): Promise<void>")),(0,i.kt)("p",null,"Tell the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," that you are done.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," will then stop the system and record the behavior as needed."),(0,i.kt)("h2",{id:"specignoremismatchvalue"},(0,i.kt)("inlineCode",{parentName:"h2"},"spec.ignoreMismatch(value)")),(0,i.kt)("p",null,"Sometimes the input you provide to the test may not be static.\nFor example, random number, date time, or hostnames."),(0,i.kt)("p",null,"In 7.0, reference values (string, object, array, function) are not validate for changes,\ni.e. even if you pass in a different string, the system will not fail it with ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionMismatch")," error.\nThis is because we track the behavior, not and exact call, whenever possible."),(0,i.kt)("p",null,"This is a new concept and is subject to change if it does not work well."),(0,i.kt)("p",null,"On the other hand, primitive values such as number and boolean are validated."),(0,i.kt)("p",null,"If you want to tell ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," that it should not care about the changes,\nyou can use ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.ignoreMismatch()"),"."),(0,i.kt)("h2",{id:"specmaskvaluevalue-replacewith"},(0,i.kt)("inlineCode",{parentName:"h2"},"spec.maskValue(value, [replaceWith])")),(0,i.kt)("p",null,"If the behavior of your code sends or receives sensitive information,\nyou should use ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.maskValue()")," to indicate those values should be masked in the record."),(0,i.kt)("p",null,"This prevents those sensitive information to be saved and commited to your source control."),(0,i.kt)("p",null,"the sensitive information can be ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),".\nIf it is ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"RegExp")," to identify the ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,i.kt)("p",null,"While you can call ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.maskValue()")," anytime before the sensitive information appear,\nfor best practice you do declare them at the beginning of your code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"test('...', async () => {\n  const spec = kd('...')\n  spec.maskValue(...)\n  spec.maskValue(...)\n  const s = await spec(subject)\n  ...\n})\n")),(0,i.kt)("p",null,"Here is the exact behavior when using ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.maskValue()"),":"),(0,i.kt)("p",null,"If you are masking a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," (using ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"RegExp"),"),\nIf you do not provide ",(0,i.kt)("inlineCode",{parentName:"p"},"replaceWith"),",\nthe senstive information will be replaced with a string with the same length but filled with ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),". i.e.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"spec.maskValue('sensitive') // replace with '*********'\n")),(0,i.kt)("p",null,"If keeping the same length is a concern, you should provide your own ",(0,i.kt)("inlineCode",{parentName:"p"},"replaceWith"),"."),(0,i.kt)("p",null,"If you are masking a ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),",\nit will be rounded to a whole number, and replace all digits with ",(0,i.kt)("inlineCode",{parentName:"p"},"7"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"replaceWith")," can be ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),",\nor a callback receiving the sensitive data so that you can create your own mask."),(0,i.kt)("p",null,"i.e., the signature of ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.maskValue()")," is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function maskValue(value: string | RegExp, replaceWith: string | ((sensitive: string) => string)): void\nfunction maskValue(value: number, replaceWith: number | ((sensitive: number) => number)): void\n")),(0,i.kt)("p",null,"The masked value will be returned, unless you are running in ",(0,i.kt)("inlineCode",{parentName:"p"},"live")," mode explicitly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"test('secret is revealed in explicit live mode', async () => {\n  const spec = await kd.live('...')\n  spec.maskValue('secret')\n  const s = spec(() => 'secret')\n  expect(s()).toBe('secret')\n})\n\ntest('sensitive', async () => {\n  const spec = await kd('...')\n  spec.maskValue('secret')\n  const s = spec(() => 'secret')\n  expect(s()).toBe('******') // even if you configure to run the test in live mode\n})\n")),(0,i.kt)("p",null,"The sensitive information is return during ",(0,i.kt)("inlineCode",{parentName:"p"},"kd.live()")," so that you can observe the actual result."))}u.isMDXComponent=!0}}]);