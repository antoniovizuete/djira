import type { Callback } from '../utils/callback.ts';
import type { RequestConfig } from '../utils/requestConfig.ts';

export interface Client {
  sendRequest<T>(requestConfig: RequestConfig, callback?: never): Promise<T>;
  sendRequest<T>(requestConfig: RequestConfig, callback?: Callback<T>): Promise<void>;
}
