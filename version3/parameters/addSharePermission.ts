import { SharePermissionInput } from '../models/mod.ts';

export interface AddSharePermission extends SharePermissionInput {
  /** The ID of the filter. */
  id: number;
}
