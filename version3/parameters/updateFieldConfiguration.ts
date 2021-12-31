import { FieldConfigurationDetails } from '../models/mod.ts';

export interface UpdateFieldConfiguration extends FieldConfigurationDetails {
  /** The ID of the field configuration. */
  id: number;
}
