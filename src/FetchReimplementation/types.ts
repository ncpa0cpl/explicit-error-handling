import { Result } from "../types";

interface JsonResponse<T> {
  json(): Promise<Result<T>>;
  text(): Promise<Result<string>>;
}

export type FetchResponse<J extends {} | [] | null = null> = Omit<
  Response,
  "json" | "text"
> &
  JsonResponse<J extends {} | [] ? J : unknown>;
