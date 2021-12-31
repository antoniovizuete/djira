import { FieldConfigurationItemsDetails } from '../models/mod.ts';

export interface UpdateFieldConfigurationItems extends FieldConfigurationItemsDetails {
  /** The ID of the field configuration. */
  id: number;
}
