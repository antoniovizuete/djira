import { IssueTypeUpdate } from '../models/index.ts';

export interface UpdateIssueType extends IssueTypeUpdate {
  /** The ID of the issue type. */
  id: string;
}
