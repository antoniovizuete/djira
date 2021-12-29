import { SimpleErrorCollection } from './simpleErrorCollection.ts';

export interface RemoveOptionFromIssuesResult {
  /** The IDs of the modified issues. */
  modifiedIssues?: number[];
  /** The IDs of the unchanged issues, those issues where errors prevent modification. */
  unmodifiedIssues?: number[];
  errors?: SimpleErrorCollection;
}
