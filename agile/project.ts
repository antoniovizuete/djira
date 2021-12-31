import * as Models from './models/mod.ts';
import * as Parameters from './parameters/mod.ts';
import { Client } from '../clients/mod.ts';
import { Callback } from '../utils/callback.ts';
import { RequestConfig } from '../utils/requestConfig.ts';

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
