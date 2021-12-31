import * as Models from './models/mod.ts';
import { Client } from '../clients/mod.ts';
import { Callback } from '../utils/callback.ts';
import { RequestConfig } from '../utils/requestConfig.ts';

export class InstanceInformation {
  constructor(private client: Client) {}

  /**
   * Returns licensing information about the Jira instance.
   *
   * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** None.
   */
  async getLicense<T = Models.License>(callback: Callback<T>): Promise<void>;
  /**
   * Returns licensing information about the Jira instance.
   *
   * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#permissions) required:** None.
   */
  async getLicense<T = Models.License>(callback?: never): Promise<T>;
  async getLicense<T = Models.License>(callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/rest/api/3/instance/license',
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }
}
