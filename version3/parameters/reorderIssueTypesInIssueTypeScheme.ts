import { OrderOfIssueTypes } from '../models/mod.ts';

export interface ReorderIssueTypesInIssueTypeScheme extends OrderOfIssueTypes {
  /** The ID of the issue type scheme. */
  issueTypeSchemeId: number;
}
