import { Result, ResultFailure, ResultSuccess } from "./types";
export declare function error(message: string | Error): ResultFailure;
export declare function result<T>(data: T): ResultSuccess<T>;
export declare function ResultingPromise<T>(promiseFn: (onSuccess: (data: T) => void, onError: (err: string | Error) => void) => void | Promise<void>): Promise<Result<T>>;
