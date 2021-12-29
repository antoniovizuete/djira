import { UpdateUserToGroup } from '../models/index.ts';

export interface AddUserToGroup extends UpdateUserToGroup {
  /** The name of the group (case sensitive). */
  groupname: string;
}
