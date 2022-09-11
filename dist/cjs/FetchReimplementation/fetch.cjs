"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/FetchReimplementation/fetch.ts
var fetch_exports = {};
__export(fetch_exports, {
  ResultingFetch: () => ResultingFetch
});
module.exports = __toCommonJS(fetch_exports);
var import_base = require("../base.cjs");
function wrapJsonAndText(r) {
  const orgJson = r.json;
  const orgText = r.text;
  const fr = r;
  fr.json = () => (0, import_base.ResultingPromise)((promiseResult, promiseError) => {
    orgJson.bind(fr)().then(promiseResult).catch(promiseError);
  });
  fr.text = () => (0, import_base.ResultingPromise)((promiseResult, promiseError) => {
    orgText.bind(fr)().then(promiseResult).catch(promiseError);
  });
  return fr;
}
async function ResultingFetch(url, options) {
  try {
    const r = await fetch(url, options);
    if (r.ok) {
      return (0, import_base.result)(wrapJsonAndText(r));
    }
    return (0, import_base.error)(`Request Error: ${r.status}`);
  } catch (e) {
    return (0, import_base.error)(e);
  }
}
