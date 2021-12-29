import { SharePermissionInput } from '../models/index.ts';

export interface AddSharePermission extends SharePermissionInput {
  /** The ID of the filter. */
  id: number;
}
