import * as Models from './models/index.ts';
import * as Parameters from './parameters/index.ts';
import { Client } from '../clients/index.ts';
import { Callback } from '../callback.ts';
import { RequestConfig } from '../requestConfig.ts';

export class Project {
  constructor(private client: Client) {}

  async getFeaturesForProject<T = Models.GetFeaturesForProject>(
    parameters: Parameters.GetFeaturesForProject,
    callback: Callback<T>
  ): Promise<void>;
  async getFeaturesForProject<T = Models.GetFeaturesForProject>(
    parameters: Parameters.GetFeaturesForProject,
    callback?: never
  ): Promise<T>;
  async getFeaturesForProject<T = Models.GetFeaturesForProject>(
    parameters: Parameters.GetFeaturesForProject,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/rest/agile/1.0/project/${parameters.projectIdOrKey}/features`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }
}
