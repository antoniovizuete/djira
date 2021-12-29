import { IssueTypeIds } from '../models/index.ts';

export interface RemoveMappingsFromIssueTypeScreenScheme extends IssueTypeIds {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;
}
