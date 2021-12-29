import { IssueFilterForBulkPropertyDelete } from '../models/index.ts';

export interface BulkDeleteIssueProperty extends IssueFilterForBulkPropertyDelete {
  /** The key of the property. */
  propertyKey: string;
}
