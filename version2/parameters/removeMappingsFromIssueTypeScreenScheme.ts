import { IssueTypeIds } from '../models/mod.ts';

export interface RemoveMappingsFromIssueTypeScreenScheme extends IssueTypeIds {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;
}
