"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81395],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},f=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),c=u(t),b=o,m=c["".concat(i,".").concat(b)]||c[b]||l[b]||p;return t?n.createElement(m,a(a({ref:r},f),{},{components:t})):n.createElement(m,a({ref:r},f))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=c;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<p;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},80262:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>f});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={sidebar_label:"HTTPResponse.buffer"},s="HTTPResponse.buffer() method",i={unversionedId:"api/puppeteer.httpresponse.buffer",id:"api/puppeteer.httpresponse.buffer",title:"HTTPResponse.buffer() method",description:"Signature:",source:"@site/../docs/api/puppeteer.httpresponse.buffer.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.buffer",permalink:"/next/api/puppeteer.httpresponse.buffer",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"HTTPResponse.buffer"},sidebar:"sidebar",previous:{title:"HTTPResponse",permalink:"/next/api/puppeteer.httpresponse"},next:{title:"HTTPResponse.frame",permalink:"/next/api/puppeteer.httpresponse.frame"}},u={},f=[],l={toc:f};function c(e){var{components:r}=e,t=p(e,["components"]);return(0,n.kt)("wrapper",o({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"httpresponsebuffer-method"}),"HTTPResponse.buffer() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class HTTPResponse {\n  buffer(): Promise<Buffer>;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","Buffer",">"),(0,n.kt)("p",null,"Promise which resolves to a buffer with response body."))}c.isMDXComponent=!0}}]);