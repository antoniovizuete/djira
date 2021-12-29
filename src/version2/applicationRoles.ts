import * as Models from './models/index.ts';
import * as Parameters from './parameters/index.ts';
import { Client } from '../clients/index.ts';
import { Callback } from '../callback.ts';
import { RequestConfig } from '../requestConfig.ts';

export class ApplicationRoles {
  constructor(private client: Client) {}

  /**
   * Returns all application roles. In Jira, application roles are managed using the [Application access
   * configuration](https://confluence.atlassian.com/x/3YxjL) page.
   *
   * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
   * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   */
  async getAllApplicationRoles<T = Models.ApplicationRole[]>(callback: Callback<T>): Promise<void>;
  /**
   * Returns all application roles. In Jira, application roles are managed using the [Application access
   * configuration](https://confluence.atlassian.com/x/3YxjL) page.
   *
   * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
   * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   */
  async getAllApplicationRoles<T = Models.ApplicationRole[]>(callback?: never): Promise<T>;
  async getAllApplicationRoles<T = Models.ApplicationRole[]>(callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/rest/api/2/applicationrole',
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /**
   * Returns an application role.
   *
   * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
   * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   */
  async getApplicationRole<T = Models.ApplicationRole>(
    parameters: Parameters.GetApplicationRole,
    callback: Callback<T>
  ): Promise<void>;
  /**
   * Returns an application role.
   *
   * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:**
   * *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   */
  async getApplicationRole<T = Models.ApplicationRole>(
    parameters: Parameters.GetApplicationRole,
    callback?: never
  ): Promise<T>;
  async getApplicationRole<T = Models.ApplicationRole>(
    parameters: Parameters.GetApplicationRole,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/rest/api/2/applicationrole/${parameters.key}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }
}
