import { ErrorCollection } from './errorCollection.ts';

export interface BulkOperationErrorResult {
  status?: number;
  elementErrors?: ErrorCollection;
  failedElementNumber?: number;
}
