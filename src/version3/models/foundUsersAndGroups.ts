import { FoundUsers } from './foundUsers.ts';
import { FoundGroups } from './foundGroups.ts';

/** List of users and groups found in a search. */
export interface FoundUsersAndGroups {
  users?: FoundUsers;
  groups?: FoundGroups;
}
