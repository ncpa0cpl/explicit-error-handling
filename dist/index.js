!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("error-result",[],t):"object"==typeof exports?exports["error-result"]=t():e["error-result"]=t()}(self,(function(){return(()=>{"use strict";var e={783:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function u(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,c)}s((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ResultingFetch=void 0;const o=r(653);t.ResultingFetch=function(e,t){return n(this,void 0,void 0,(function*(){try{const r=yield fetch(e,t);return r.ok?o.result(function(e){const t=e.json,r=e.text,n=e;return n.json=()=>o.ResultingPromise(((e,r)=>{t.bind(n)().then(e).catch(r)})),n.text=()=>o.ResultingPromise(((e,t)=>{r.bind(n)().then(e).catch(t)})),n}(r)):o.error(`Request Error: ${r.status}`)}catch(e){return o.error(e)}}))}},758:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(783),t),o(r(474),t)},474:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},653:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function u(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,c)}s((n=n.apply(e,t||[])).next())}))};function n(e){return{data:null,error:e instanceof Error?e:new Error(e)}}function o(e){return{data:e,error:null}}Object.defineProperty(t,"__esModule",{value:!0}),t.ResultingPromise=t.result=t.error=void 0,t.error=n,t.result=o,t.ResultingPromise=function(e){return r(this,void 0,void 0,(function*(){try{return o(yield new Promise(e))}catch(e){return n(e)}}))}},607:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(699),t),o(r(653),t),o(r(758),t)},699:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})}},t={};return function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(607)})()}));