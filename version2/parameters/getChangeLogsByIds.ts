import { IssueChangelogIds } from '../models/mod.ts';

export interface GetChangeLogsByIds extends IssueChangelogIds {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
}
