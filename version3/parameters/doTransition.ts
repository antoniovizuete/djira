import { IssueUpdateDetails } from '../models/mod.ts';

export interface DoTransition extends IssueUpdateDetails {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
}
