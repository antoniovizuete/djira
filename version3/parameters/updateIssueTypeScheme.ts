import { IssueTypeSchemeUpdateDetails } from '../models/mod.ts';

export interface UpdateIssueTypeScheme extends IssueTypeSchemeUpdateDetails {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
}
