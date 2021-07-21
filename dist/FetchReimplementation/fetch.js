var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { error, result, ResultingPromise } from "../base";
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
export function ResultingFetch(url, options) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const r = yield fetch(url, options);
            if (r.ok) {
                return result(wrapJsonAndText(r));
            }
            return error(`Request Error: ${r.status}`);
        }
        catch (e) {
            return error(e);
        }
    });
}
