import { IssueUpdateDetails } from '../models/index.ts';

export interface DoTransition extends IssueUpdateDetails {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
}
