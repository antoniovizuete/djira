import { CreatedIssue } from './createdIssue.ts';
import { BulkOperationErrorResult } from './bulkOperationErrorResult.ts';

/** Details about the issues created and the errors for requests that failed. */
export interface CreatedIssues {
  /** Details of the issues created. */
  issues?: CreatedIssue[];
  /** Error details for failed issue creation requests. */
  errors?: BulkOperationErrorResult[];
}
