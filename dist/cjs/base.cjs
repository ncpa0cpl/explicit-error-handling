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

// src/base.ts
var base_exports = {};
__export(base_exports, {
  ResultingPromise: () => ResultingPromise,
  error: () => error,
  result: () => result
});
module.exports = __toCommonJS(base_exports);
function error(message) {
  return {
    data: null,
    error: message instanceof Error ? message : new Error(message)
  };
}
function result(data) {
  return { data, error: null };
}
async function ResultingPromise(promiseFn) {
  try {
    const r = await new Promise(promiseFn);
    return result(r);
  } catch (e) {
    return error(e);
  }
}
