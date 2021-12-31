import { MultipleCustomFieldValuesUpdateDetails } from '../models/mod.ts';

export interface UpdateMultipleCustomFieldValues extends MultipleCustomFieldValuesUpdateDetails {
  /** Whether to generate a changelog for this update. */
  generateChangelog?: boolean;
}
