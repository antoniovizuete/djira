import { IssueFilterForBulkPropertyDelete } from '../models/mod.ts';

export interface BulkDeleteIssueProperty extends IssueFilterForBulkPropertyDelete {
  /** The key of the property. */
  propertyKey: string;
}
