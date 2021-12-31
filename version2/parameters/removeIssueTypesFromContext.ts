import { IssueTypeIds } from '../models/mod.ts';

export interface RemoveIssueTypesFromContext extends IssueTypeIds {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
}
