// src/FetchReimplementation/fetch.ts
import { error, result, ResultingPromise } from "../base.mjs";
function wrapJsonAndText(r) {
  const orgJson = r.json;
  const orgText = r.text;
  const fr = r;
  fr.json = () => ResultingPromise((promiseResult, promiseError) => {
    orgJson.bind(fr)().then(promiseResult).catch(promiseError);
  });
  fr.text = () => ResultingPromise((promiseResult, promiseError) => {
    orgText.bind(fr)().then(promiseResult).catch(promiseError);
  });
  return fr;
}
async function ResultingFetch(url, options) {
  try {
    const r = await fetch(url, options);
    if (r.ok) {
      return result(wrapJsonAndText(r));
    }
    return error(`Request Error: ${r.status}`);
  } catch (e) {
    return error(e);
  }
}
export {
  ResultingFetch
};
