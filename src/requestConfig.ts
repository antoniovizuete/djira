import { AxiosRequestConfig } from './axios-types.d.ts';

export type RequestConfig = Omit<AxiosRequestConfig,
| "validateStatus"
| "transformRequest"
| "transformResponse"

>;
