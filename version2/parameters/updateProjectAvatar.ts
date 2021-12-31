import { Avatar } from '../models/mod.ts';

export interface UpdateProjectAvatar extends Avatar {
  /** The ID or (case-sensitive) key of the project. */
  projectIdOrKey: string;
}
