"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_label:"ElementHandle.select"},p="ElementHandle.select() method",i={unversionedId:"api/puppeteer.elementhandle.select",id:"version-18.2.1/api/puppeteer.elementhandle.select",title:"ElementHandle.select() method",description:"Triggers a change and input event once all the provided options have been selected. If there's no ` element matching selector`, the method throws an error.",source:"@site/versioned_docs/version-18.2.1/api/puppeteer.elementhandle.select.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.select",permalink:"/api/puppeteer.elementhandle.select",draft:!1,tags:[],version:"18.2.1",frontMatter:{sidebar_label:"ElementHandle.select"},sidebar:"sidebar",previous:{title:"ElementHandle.screenshot",permalink:"/api/puppeteer.elementhandle.screenshot"},next:{title:"ElementHandle.tap",permalink:"/api/puppeteer.elementhandle.tap"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],u={toc:c};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"elementhandleselect-method"}),"ElementHandle.select() method"),(0,r.kt)("p",null,"Triggers a ",(0,r.kt)("inlineCode",{parentName:"p"},"change")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," event once all the provided options have been selected. If there's no ",(0,r.kt)("inlineCode",{parentName:"p"},"<select>")," element matching ",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class ElementHandle {\n  select(...values: string[]): Promise<string[]>;\n}\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"values"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string","[","]"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Values of options to select. If the ",(0,r.kt)("code",null,"<","select",">")," has the ",(0,r.kt)("code",null,"multiple")," attribute, all values are considered, otherwise only the first one is taken into account.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","string","[","]",">"),(0,r.kt)("h2",a({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"handle.select('blue'); // single selection\nhandle.select('red', 'green', 'blue'); // multiple selections\n")))}m.isMDXComponent=!0}}]);