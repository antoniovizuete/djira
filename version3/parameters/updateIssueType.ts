import { IssueTypeUpdate } from '../models/mod.ts';

export interface UpdateIssueType extends IssueTypeUpdate {
  /** The ID of the issue type. */
  id: string;
}
