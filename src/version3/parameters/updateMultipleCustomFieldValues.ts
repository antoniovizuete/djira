import { MultipleCustomFieldValuesUpdateDetails } from '../models/index.ts';

export interface UpdateMultipleCustomFieldValues extends MultipleCustomFieldValuesUpdateDetails {
  /** Whether to generate a changelog for this update. */
  generateChangelog?: boolean;
}
