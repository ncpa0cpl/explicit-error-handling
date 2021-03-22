import { Result, ResultFailure, ResultSuccess } from "./types";

export function error(message: string | Error): ResultFailure {
  return {
    data: null,
    error: message instanceof Error ? message : new Error(message),
  };
}

export function result<T>(data: T): ResultSuccess<T> {
  return { data, error: null };
}

export async function ResultingPromise<T>(
  promiseFn: (
    onSuccess: (data: T) => void,
    onError: (err: string | Error) => void
  ) => void | Promise<void>
): Promise<Result<T>> {
  try {
    const r = await new Promise<T>(promiseFn);
    return result(r);
  } catch (e) {
    return error(e);
  }
}
