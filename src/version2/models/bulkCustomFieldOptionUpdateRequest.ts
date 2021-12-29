import { CustomFieldOptionUpdate } from './customFieldOptionUpdate.ts';

/** Details of the options to update for a custom field. */
export interface BulkCustomFieldOptionUpdateRequest {
  /** Details of the options to update. */
  options?: CustomFieldOptionUpdate[];
}
