import { error, result, ResultingPromise } from "../base";
import { Result } from "../types";
import { FetchResponse } from "./types";

function wrapJsonAndText(r: Response) {
  const orgJson = r.json;
  const orgText = r.text;
  const fr = (r as any) as FetchResponse<any>;
  fr.json = () =>
    ResultingPromise((promiseResult, promiseError) => {
      orgJson.bind(fr)().then(promiseResult).catch(promiseError);
    });
  fr.text = () =>
    ResultingPromise((promiseResult, promiseError) => {
      orgText.bind(fr)().then(promiseResult).catch(promiseError);
    });
  return fr;
}

export async function ResultingFetch<T = null>(
  url: RequestInfo,
  options: RequestInit
): Promise<Result<FetchResponse<T>>> {
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
