"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34766],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=i(r),f=o,m=y["".concat(l,".").concat(f)]||y[f]||u[f]||p;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<p;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},23184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={sidebar_label:"ConsoleMessageType"},s="ConsoleMessageType type",l={unversionedId:"api/puppeteer.consolemessagetype",id:"version-18.2.1/api/puppeteer.consolemessagetype",title:"ConsoleMessageType type",description:"The supported types for console messages.",source:"@site/versioned_docs/version-18.2.1/api/puppeteer.consolemessagetype.md",sourceDirName:"api",slug:"/api/puppeteer.consolemessagetype",permalink:"/api/puppeteer.consolemessagetype",draft:!1,tags:[],version:"18.2.1",frontMatter:{sidebar_label:"ConsoleMessageType"},sidebar:"sidebar",previous:{title:"ConsoleMessageLocation.url",permalink:"/api/puppeteer.consolemessagelocation.url"},next:{title:"ContinueRequestOverrides",permalink:"/api/puppeteer.continuerequestoverrides"}},i={},c=[],u={toc:c};function y(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"consolemessagetype-type"}),"ConsoleMessageType type"),(0,n.kt)("p",null,"The supported types for console messages."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"export declare type ConsoleMessageType =\n  | 'log'\n  | 'debug'\n  | 'info'\n  | 'error'\n  | 'warning'\n  | 'dir'\n  | 'dirxml'\n  | 'table'\n  | 'trace'\n  | 'clear'\n  | 'startGroup'\n  | 'startGroupCollapsed'\n  | 'endGroup'\n  | 'assert'\n  | 'profile'\n  | 'profileEnd'\n  | 'count'\n  | 'timeEnd'\n  | 'verbose';\n")))}y.isMDXComponent=!0}}]);