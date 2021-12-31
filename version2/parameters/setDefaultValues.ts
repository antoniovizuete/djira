import { CustomFieldContextDefaultValueUpdate } from '../models/mod.ts';

export interface SetDefaultValues extends CustomFieldContextDefaultValueUpdate {
  /** The ID of the custom field. */
  fieldId: string;
}
