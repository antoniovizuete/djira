import { Version } from '../models/index.ts';

export interface UpdateVersion extends Version {
  /** The ID of the version. */
  id: string;
}
