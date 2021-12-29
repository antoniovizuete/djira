import { AddGroup } from '../models/index.ts';

export interface CreateGroup extends AddGroup {
  [key: string]: any;
}
