import { ErrorCollection } from './errorCollection.ts';

export interface NestedResponse {
  status?: number;
  errorCollection?: ErrorCollection;
}
