import{r as m,g as y}from"./react-vendor-DgTrhVr3.js";var i={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f;function E(){if(f)return t;f=1;var R=m(),c=Symbol.for("react.element"),x=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function s(o,r,p){var e,n={},u=null,a=null;p!==void 0&&(u=""+p),r.key!==void 0&&(u=""+r.key),r.ref!==void 0&&(a=r.ref);for(e in r)l.call(r,e)&&!v.hasOwnProperty(e)&&(n[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)n[e]===void 0&&(n[e]=r[e]);return{$$typeof:c,type:o,key:u,ref:a,props:n,_owner:d.current}}return t.Fragment=x,t.jsx=s,t.jsxs=s,t}var _;function O(){return _||(_=1,i.exports=E()),i.exports}var h=O(),j=m();const k=y(j);export{k as R,h as j};
