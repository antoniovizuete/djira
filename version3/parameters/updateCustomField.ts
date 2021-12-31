import { UpdateCustomFieldDetails } from '../models/mod.ts';

export interface UpdateCustomField extends UpdateCustomFieldDetails {
  /** The ID of the custom field. */
  fieldId: string;
}
