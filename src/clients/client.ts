import type { Callback } from '../callback.ts';
import type { RequestConfig } from '../requestConfig.ts';

export interface Client {
  sendRequest<T>(requestConfig: RequestConfig, callback?: never, telemetryData?: any): Promise<T>;
  sendRequest<T>(requestConfig: RequestConfig, callback?: Callback<T>, telemetryData?: any): Promise<void>;
}
