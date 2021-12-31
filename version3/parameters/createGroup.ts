import { AddGroup } from '../models/mod.ts';

export interface CreateGroup extends AddGroup {
  [key: string]: any;
}
