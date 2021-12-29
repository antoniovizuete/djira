import { IssueTypeSchemeUpdateDetails } from '../models/index.ts';

export interface UpdateIssueTypeScheme extends IssueTypeSchemeUpdateDetails {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
}
