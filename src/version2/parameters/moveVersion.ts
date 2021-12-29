import { VersionMove } from '../models/index.ts';

export interface MoveVersion extends VersionMove {
  /** The ID of the version to be moved. */
  id: string;
}
