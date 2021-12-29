import { FieldConfigurationDetails } from '../models/index.ts';

export interface UpdateFieldConfiguration extends FieldConfigurationDetails {
  /** The ID of the field configuration. */
  id: number;
}
