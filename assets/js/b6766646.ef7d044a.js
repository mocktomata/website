"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[805],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(9496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(4250),o=(a(9496),a(9613));const r={sidebar_label:"Spec",hide_title:!0},i=void 0,s={unversionedId:"spec",id:"spec",title:"spec",description:"What is Spec?",source:"@site/docs/spec.md",sourceDirName:".",slug:"/spec",permalink:"/website/spec",draft:!1,editUrl:"https://github.com/mocktomata/website/blob/main/docs/spec.md",tags:[],version:"current",frontMatter:{sidebar_label:"Spec",hide_title:!0},sidebar:"mocktomata",previous:{title:"incubator",permalink:"/website/incubator"}},l={},p=[{value:"What is <code>Spec</code>?",id:"what-is-spec",level:2},{value:"Uniqueness of <code>specName</code>",id:"uniqueness-of-specname",level:2},{value:"What can be a <code>spec subject</code>?",id:"what-can-be-a-spec-subject",level:2},{value:"<code>SpecRecord</code>",id:"specrecord",level:2},{value:"<code>spec()</code>",id:"spec",level:2},{value:"<code>reporter</code>",id:"reporter",level:2},{value:"<code>SpecMode</code>",id:"specmode",level:2},{value:"<code>done()</code>",id:"done",level:2},{value:"<code>cleanup()</code>",id:"cleanup",level:2},{value:"<code>maskValue()</code>",id:"maskvalue",level:2},{value:"<code>ignoreMismatch()</code>",id:"ignoremismatch",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-spec"},"What is ",(0,o.kt)("inlineCode",{parentName:"h2"},"Spec"),"?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#what-is-spec"},"Spec")," is a specification of behavior that we record and replay.\nIt is identified by the ",(0,o.kt)("a",{parentName:"p",href:"#uniqueness-of-specName"},(0,o.kt)("inlineCode",{parentName:"a"},"specName")),", which you defined when using the mocktomata:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"mockto('<specName>', ...)\n\nkomondor('<specName>')\n\nscenario('<specName>') // zucchini\n")),(0,o.kt)("h2",{id:"uniqueness-of-specname"},"Uniqueness of ",(0,o.kt)("inlineCode",{parentName:"h2"},"specName")),(0,o.kt)("p",null,"Because ",(0,o.kt)("a",{parentName:"p",href:"#uniqueness-of-specName"},(0,o.kt)("inlineCode",{parentName:"a"},"specName"))," is the identifier of ",(0,o.kt)("a",{parentName:"p",href:"#what-is-spec"},"Spec"),",\nthe ",(0,o.kt)("a",{parentName:"p",href:"#uniqueness-of-specName"},(0,o.kt)("inlineCode",{parentName:"a"},"specName"))," must be unique for each test in the same file."),(0,o.kt)("p",null,"For example, if you use ",(0,o.kt)("inlineCode",{parentName:"p"},'"get friends"')," as the ",(0,o.kt)("a",{parentName:"p",href:"#uniqueness-of-specName"},(0,o.kt)("inlineCode",{parentName:"a"},"specName"))," in two test of a test file,\none of them will fail.\nThis holds true even if you use some grouping mechanism such as ",(0,o.kt)("inlineCode",{parentName:"p"},"describe()")," to put tests in different group."),(0,o.kt)("p",null,"However, it will be fine if the same ",(0,o.kt)("a",{parentName:"p",href:"#uniqueness-of-specName"},(0,o.kt)("inlineCode",{parentName:"a"},"specName"))," is used in two different test files."),(0,o.kt)("p",null,"So what you can do is either making sure you use a different ",(0,o.kt)("a",{parentName:"p",href:"#uniqueness-of-specName"},(0,o.kt)("inlineCode",{parentName:"a"},"specName"))," in the same file across ",(0,o.kt)("inlineCode",{parentName:"p"},"describe()")," groups,\nor you can separate each group into different files. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"- someCode.group-1.spec.ts\n- someCode.group-2.spec.ts\n")),(0,o.kt)("p",null,"This is also the way ",(0,o.kt)("inlineCode",{parentName:"p"},"tap")," family of test runners (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"ava"),") organize the tests."),(0,o.kt)("h2",{id:"what-can-be-a-spec-subject"},"What can be a ",(0,o.kt)("inlineCode",{parentName:"h2"},"spec subject"),"?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#what-can-be-a-spec-subject"},"spec subject")," is the code you want to record the behavior from.\nThe most common use case is a ",(0,o.kt)("inlineCode",{parentName:"p"},"gateway")," function or library,\nsuch as ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch"),"."),(0,o.kt)("p",null,"But it can be any other things, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"gateway")," to your database,\nfile system, another thread,\nor even libraries or code from another team that might not be stable."),(0,o.kt)("p",null,"In essence, it can be anything that is external, suspect to chanages,\nor anything unstable."),(0,o.kt)("h2",{id:"specrecord"},(0,o.kt)("inlineCode",{parentName:"h2"},"SpecRecord")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#specrecord"},"SpecRecord")," is the record of a ",(0,o.kt)("a",{parentName:"p",href:"#what-is-spec"},"Spec")," that we saved.\nIt is saved in the ",(0,o.kt)("inlineCode",{parentName:"p"},".mocktomata")," folder under the root of your project.\nIn the future, they can also be saved remotely too."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"#done"},(0,o.kt)("inlineCode",{parentName:"a"},"done()"))," method returns the ",(0,o.kt)("a",{parentName:"p",href:"#specrecord"},"SpecRecord"),",\nso you can inspect it if you wanted to."),(0,o.kt)("h2",{id:"spec"},(0,o.kt)("inlineCode",{parentName:"h2"},"spec()")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#spec"},(0,o.kt)("inlineCode",{parentName:"a"},"spec()"))," function is the function to specify the ",(0,o.kt)("a",{parentName:"p",href:"#what-can-be-a-spec-subject"},"spec subject"),"."),(0,o.kt)("p",null,"It has two signatures, depends on which mocktomata you get it from:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// mockto\n// zucchini\n// incubator\nfunction spec(subject): Promise<subject>\n\n// komondor\nfunction spec(subject, options?): Promise<subject>\n")),(0,o.kt)("p",null,'Where the return promise contains the "speced" subject which you can use in place of ',(0,o.kt)("inlineCode",{parentName:"p"},"subject"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"options")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec.Options"),". It contains 3 properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout"),": How long will the spec wait before consider the subject failed to return. (default to ",(0,o.kt)("inlineCode",{parentName:"li"},"3000")," ms)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logLevel"),": Log level for logging the behavior (default to ",(0,o.kt)("inlineCode",{parentName:"li"},"logLevels.info"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"emitLog"),": When true, emit logs to console (default ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),")")),(0,o.kt)("p",null,"Here is how do specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," for other mocktomata:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"mockto(specName, options?, handler)\nscenario(specName, options?) // zucchini\nincubator(specName, options?, handler)\n")),(0,o.kt)("h2",{id:"reporter"},(0,o.kt)("inlineCode",{parentName:"h2"},"reporter")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#reporter"},(0,o.kt)("inlineCode",{parentName:"a"},"reporter"))," is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/unional/standard-log/blob/main/packages/log/ts/memory.ts#L7"},"MemoryLogReporter")," from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/unional/standard-log"},"standard-log"),".\nIt contains the logs generated by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mocktomata/mocktomata/blob/master/packages/mocktomata"},"mocktomata")," so that you can inspect them."),(0,o.kt)("p",null,"A common use case is to inspect the logs make sure it does not contain any sensitive information."),(0,o.kt)("h2",{id:"specmode"},(0,o.kt)("inlineCode",{parentName:"h2"},"SpecMode")),(0,o.kt)("p",null,"Each ",(0,o.kt)("a",{parentName:"p",href:"#what-is-spec"},"Spec")," runs in a specific mode depends on the condition.\nThere are 4 different ",(0,o.kt)("a",{parentName:"p",href:"#specmode"},(0,o.kt)("inlineCode",{parentName:"a"},"SpecMode")),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auto"),": the default mode which will resolve to either ",(0,o.kt)("inlineCode",{parentName:"li"},"save")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"simulate")," mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"save"),": actual calls will be made and the behavior are saved (i.e. recording)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"simulate"),": actual calls are not made and the behavior are simulated (i.e. replay)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"live"),": actual calls are made but the behavior are not saved.")),(0,o.kt)("h2",{id:"done"},(0,o.kt)("inlineCode",{parentName:"h2"},"done()")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#done"},(0,o.kt)("inlineCode",{parentName:"a"},"done()"))," should be called at the end of each ",(0,o.kt)("a",{parentName:"p",href:"#what-is-spec"},"Spec"),".\nIt is how the ",(0,o.kt)("a",{parentName:"p",href:"#what-is-spec"},"Spec")," knows it should save the ",(0,o.kt)("a",{parentName:"p",href:"#specrecord"},"SpecRecord")," or make sure the simulation are complete fully."),(0,o.kt)("p",null,"It is an async function returning the ",(0,o.kt)("a",{parentName:"p",href:"#specrecord"},"SpecRecord")," (",(0,o.kt)("inlineCode",{parentName:"p"},"done(): Promise<SpecRecord>"),")."),(0,o.kt)("p",null,"You can inspec the ",(0,o.kt)("a",{parentName:"p",href:"#specrecord"},"SpecRecord")," if you want to,\nbut typically you will just ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," or return it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"\nit('...', async () => {\n  // ...\n\n  await done()\n\n  // or return, if your test-runner support that.\n  return done()\n}\n")),(0,o.kt)("h2",{id:"cleanup"},(0,o.kt)("inlineCode",{parentName:"h2"},"cleanup()")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#cleanup"},(0,o.kt)("inlineCode",{parentName:"a"},"cleanup()"))," function is used to clean up the test environment."),(0,o.kt)("p",null,"You should call it at ",(0,o.kt)("inlineCode",{parentName:"p"},"afterAll()")," or similar function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"afterall(mockto.cleanup)\nafterall(komondor.cleanup)\nafterall(scenario.cleanup) // zucchini\nafterall(incubator.cleanup)\n")),(0,o.kt)("p",null,"What happens is when the ",(0,o.kt)("a",{parentName:"p",href:"#done"},(0,o.kt)("inlineCode",{parentName:"a"},"done()"))," is not called,\neither you forget to do so or the test fails,\nthe ",(0,o.kt)("a",{parentName:"p",href:"#what-is-spec"},"Spec")," does not know that and keep waiting for the ",(0,o.kt)("a",{parentName:"p",href:"#done"},(0,o.kt)("inlineCode",{parentName:"a"},"done()"))," call."),(0,o.kt)("p",null,"In that case you will see a warning like this (in ",(0,o.kt)("inlineCode",{parentName:"p"},"jest"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"A worker process has failed to exit gracefully and has been force exited.\nThis is likely caused by tests leaking due to improper teardown.\nTry running with --detectOpenHandles to find leaks.\nActive timers can also cause this, ensure that `.unref()` was called on them.\n")),(0,o.kt)("p",null,"calling ",(0,o.kt)("a",{parentName:"p",href:"#cleanup"},(0,o.kt)("inlineCode",{parentName:"a"},"cleanup()"))," tells ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mocktomata/mocktomata/blob/master/packages/mocktomata"},"mocktomata")," that all ",(0,o.kt)("a",{parentName:"p",href:"#what-is-spec"},"Spec")," are done so it can clean things up properly."),(0,o.kt)("h2",{id:"maskvalue"},(0,o.kt)("inlineCode",{parentName:"h2"},"maskValue()")),(0,o.kt)("p",null,"When interacting with external system,\nthe calls may contain sensitive information such as username, password, auth token, etc."),(0,o.kt)("p",null,"Since ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mocktomata/mocktomata/blob/master/packages/mocktomata"},"mocktomata")," will save the ",(0,o.kt)("a",{parentName:"p",href:"#specrecord"},"SpecRecord"),",\nit is important to make sure these sensitive information will not be saved in your repository.\nThe same goes for logs, as you may send the logs else where or save it in some files."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#maskvalue"},(0,o.kt)("inlineCode",{parentName:"a"},"maskValue()"))," allows you to indicate what values are considered sensitive,\nand mask them in the logs and in ",(0,o.kt)("a",{parentName:"p",href:"#specrecord"},"SpecRecord"),"."),(0,o.kt)("p",null,"It support ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RegExp"),", and its signature is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function maskValue(value: string | RegExp, replaceWith?: string)\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RegExp")," will be ",(0,o.kt)("inlineCode",{parentName:"p"},".exec()")," against the values,\nso if the sensitive information can occurs multiple times in the same string,\nuse the ",(0,o.kt)("inlineCode",{parentName:"p"},"/g")," global flag to make sure all occurrences are masked:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"maskValue(/some-secret/g)\nmaskValue(/Bearer \\.*/g)\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"replaceWith")," defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},'"[masked]"'),".\nYou can change that if you want,\nand you can change it different values for each ",(0,o.kt)("a",{parentName:"p",href:"#maskvalue"},(0,o.kt)("inlineCode",{parentName:"a"},"maskValue()"))," call if you find that beneficial."),(0,o.kt)("p",null,"You must call ",(0,o.kt)("a",{parentName:"p",href:"#maskvalue"},(0,o.kt)("inlineCode",{parentName:"a"},"maskValue()"))," before calling ",(0,o.kt)("a",{parentName:"p",href:"#spec"},(0,o.kt)("inlineCode",{parentName:"a"},"spec()")),",\nbecause calling ",(0,o.kt)("a",{parentName:"p",href:"#spec"},(0,o.kt)("inlineCode",{parentName:"a"},"spec()"))," will starting emitting/saving logs."),(0,o.kt)("p",null,"Depends on how the sensitive information is created, who created it,\nand what ",(0,o.kt)("a",{parentName:"p",href:"#specmode"},"SpecMode")," the ",(0,o.kt)("a",{parentName:"p",href:"#what-is-spec"},"Spec")," is running in,\nthe value flow through your code could be the actual sensitive value,\nor the masked value."),(0,o.kt)("p",null,"so in your test, you should avoid checking the value explicitly.\nYour code will probably work as-is.\nIf you absolutely need to,\nyou can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"replaceWith")," to set the masked value to something your code understand,\nand yet the value is safe to be saved in your source control."),(0,o.kt)("h2",{id:"ignoremismatch"},(0,o.kt)("inlineCode",{parentName:"h2"},"ignoreMismatch()")),(0,o.kt)("p",null,"Sometimes the input you provide to the test may not be static.\nFor example, random number, date time, or hostnames."),(0,o.kt)("p",null,"In 7.0, reference values (string, object, array, function) are not validate for changes,\ni.e. even if you pass in a different string, the system will not fail it with ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionMismatch")," error.\nThis is because we track the behavior, not and exact call, whenever possible."),(0,o.kt)("p",null,"This is a new concept and is subject to change if it does not work well."),(0,o.kt)("p",null,"On the other hand, primitive values such as number and boolean are validated."),(0,o.kt)("p",null,"If you want to tell ",(0,o.kt)("a",{parentName:"p",href:"#spec"},(0,o.kt)("inlineCode",{parentName:"a"},"spec()"))," that it should not care about the changes,\nyou can use ",(0,o.kt)("a",{parentName:"p",href:"#ignoremismatch"},(0,o.kt)("inlineCode",{parentName:"a"},"ignoreMismatch()"))," to ignore that specific value."),(0,o.kt)("p",null,"The value is compared using strict equivalence. (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"==="),").\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"test('...', async () => {\n  const date = new Date()\n\n  const spec = komondor('...')\n  spec.ignoreMismatch(date)\n\n  // ...\n})\n")))}u.isMDXComponent=!0}}]);