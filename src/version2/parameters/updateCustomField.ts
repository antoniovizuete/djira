import { UpdateCustomFieldDetails } from '../models/index.ts';

export interface UpdateCustomField extends UpdateCustomFieldDetails {
  /** The ID of the custom field. */
  fieldId: string;
}
