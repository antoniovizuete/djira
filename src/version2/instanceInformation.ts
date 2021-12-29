import * as Models from './models/index.ts';
import { Client } from '../clients/index.ts';
import { Callback } from '../callback.ts';
import { RequestConfig } from '../requestConfig.ts';

export class InstanceInformation {
  constructor(private client: Client) {}

  /**
   * Returns licensing information about the Jira instance.
   *
   * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** None.
   */
  async getLicense<T = Models.License>(callback: Callback<T>): Promise<void>;
  /**
   * Returns licensing information about the Jira instance.
   *
   * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** None.
   */
  async getLicense<T = Models.License>(callback?: never): Promise<T>;
  async getLicense<T = Models.License>(callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/rest/api/2/instance/license',
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }
}
