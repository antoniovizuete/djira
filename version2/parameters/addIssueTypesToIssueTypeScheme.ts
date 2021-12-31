import { IssueTypeIds } from '../models/mod.ts';

export interface AddIssueTypesToIssueTypeScheme extends IssueTypeIds {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
}
