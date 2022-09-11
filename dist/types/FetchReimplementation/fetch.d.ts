import { Result } from "../types";
import { FetchResponse } from "./types";
export declare function ResultingFetch<T = null>(url: RequestInfo, options: RequestInit): Promise<Result<FetchResponse<T>>>;
