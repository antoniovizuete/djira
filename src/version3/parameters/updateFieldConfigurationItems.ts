import { FieldConfigurationItemsDetails } from '../models/index.ts';

export interface UpdateFieldConfigurationItems extends FieldConfigurationItemsDetails {
  /** The ID of the field configuration. */
  id: number;
}
