import { VersionMove } from '../models/mod.ts';

export interface MoveVersion extends VersionMove {
  /** The ID of the version to be moved. */
  id: string;
}
