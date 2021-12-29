import { OrderOfIssueTypes } from '../models/index.ts';

export interface ReorderIssueTypesInIssueTypeScheme extends OrderOfIssueTypes {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
}
