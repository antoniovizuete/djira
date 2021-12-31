import DFetch from "@dfetch";
import type { Client } from './client.ts';
import type { Config } from '../utils/config.ts';
import { AuthenticationService } from '../services/authenticationService/mod.ts';
import type { RequestConfig } from '../utils/requestConfig.ts';
import type { Callback } from '../utils/callback.ts';

const STRICT_GDPR_FLAG = 'x-atlassian-force-account-id';
const ATLASSIAN_TOKEN_CHECK_FLAG = 'X-Atlassian-Token';
const ATLASSIAN_TOKEN_CHECK_NOCHECK_VALUE = 'no-check';

export class BaseClient implements Client {
  private dfetch: DFetch;

  constructor(protected readonly config: Config) {
    this.dfetch = new DFetch({
      ...config.baseRequestConfig,
      baseURL: config.host,
      headers: this.removeUndefinedProperties({
        [STRICT_GDPR_FLAG]: config.strictGDPR,
        [ATLASSIAN_TOKEN_CHECK_FLAG]: config.noCheckAtlassianToken ? ATLASSIAN_TOKEN_CHECK_NOCHECK_VALUE : undefined,
        ...config.baseRequestConfig?.headers,
      }),
    });
  }

  protected paramSerializer(parameters: Record<string, any>): string {
    const parts: string[] = [];

    Object.entries(parameters).forEach(([key, value]) => {
      if (value === null || typeof value === 'undefined') {
        return undefined;
      }

      if (Array.isArray(value)) {
        // eslint-disable-next-line no-param-reassign
        value = value.join(',');
      }

      if (value instanceof Date) {
        // eslint-disable-next-line no-param-reassign
        value = value.toISOString();
      } else if (value !== null && typeof value === 'object') {
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      }

      parts.push(`${this.encode(key)}=${this.encode(value)}`);

      return undefined;
    });

    return parts.join('&');
  }

  protected encode(value: string) {
    return encodeURIComponent(value)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }

  protected removeUndefinedProperties(obj: Record<string, any>): Record<string, any> {
    return Object.entries(obj)
      .filter(([, value]) => typeof value !== 'undefined')
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key]: value }), {});
  }

  async sendRequest<T>(requestConfig: RequestConfig, callback?: Callback<T>): Promise<T | void> {
    try {
      const modifiedRequestConfig: RequestConfig = {
        ...requestConfig,
        headers: this.removeUndefinedProperties({
          Authorization: await AuthenticationService.getAuthenticationToken(this.config.authentication),
          ...requestConfig.headers,
        }),
      };

      const response = await this.dfetch.request<T>(modifiedRequestConfig);

      
      const callbackResponseHandler = callback && ((data?: T): void => callback(null, data));
      const defaultResponseHandler = (data?: T): T => data || ({} as T);

      const responseHandler = callbackResponseHandler ?? defaultResponseHandler;

      return responseHandler(response.data);
    } catch (e) {
      const callbackErrorHandler = callback && ((error: Error) => callback(error));
      const defaultErrorHandler = (error: Error) => {
        throw error;
      };

      const errorHandler = callbackErrorHandler ?? defaultErrorHandler;

      return errorHandler(e);
    }
  }
}
