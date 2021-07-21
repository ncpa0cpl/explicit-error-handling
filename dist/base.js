var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function error(message) {
    return {
        data: null,
        error: message instanceof Error ? message : new Error(message),
    };
}
export function result(data) {
    return { data, error: null };
}
export function ResultingPromise(promiseFn) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const r = yield new Promise(promiseFn);
            return result(r);
        }
        catch (e) {
            return error(e);
        }
    });
}
