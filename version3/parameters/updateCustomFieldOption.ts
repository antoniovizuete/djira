import { BulkCustomFieldOptionUpdateRequest } from '../models/mod.ts';

export interface UpdateCustomFieldOption extends BulkCustomFieldOptionUpdateRequest {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
}
