import { UpdateUserToGroup } from '../models/mod.ts';

export interface AddUserToGroup extends UpdateUserToGroup {
  /** The name of the group (case sensitive). */
  groupname: string;
}
