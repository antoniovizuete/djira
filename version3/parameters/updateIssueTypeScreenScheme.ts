import { IssueTypeScreenSchemeUpdateDetails } from '../models/mod.ts';

export interface UpdateIssueTypeScreenScheme extends IssueTypeScreenSchemeUpdateDetails {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;
}
