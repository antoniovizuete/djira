import * as Models from './models/index.ts';
import * as Parameters from './parameters/index.ts';
import { Client } from '../clients/index.ts';
import { Callback } from '../callback.ts';
import { RequestConfig } from '../requestConfig.ts';

export class Labels {
  constructor(private client: Client) {}

  /** Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of labels. */
  async getAllLabels<T = Models.PageString>(
    parameters: Parameters.GetAllLabels | undefined,
    callback: Callback<T>
  ): Promise<void>;
  /** Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#pagination) list of labels. */
  async getAllLabels<T = Models.PageString>(parameters?: Parameters.GetAllLabels, callback?: never): Promise<T>;
  async getAllLabels<T = Models.PageString>(
    parameters?: Parameters.GetAllLabels,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: '/rest/api/2/label',
      method: 'GET',
      params: {
        startAt: parameters?.startAt,
        maxResults: parameters?.maxResults,
      },
    };

    return this.client.sendRequest(config, callback);
  }
}
