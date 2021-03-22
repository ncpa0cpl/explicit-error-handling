export interface ResultSuccess<T = unknown> {
  data: T;
  error: null;
}

export interface ResultFailure {
  data: null;
  error: Error;
}

export type Result<T = unknown> = ResultFailure | ResultSuccess<T>;
