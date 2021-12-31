import { Version } from '../models/mod.ts';

export interface UpdateVersion extends Version {
  /** The ID of the version. */
  id: string;
}
