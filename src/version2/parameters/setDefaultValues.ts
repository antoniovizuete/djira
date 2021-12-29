import { CustomFieldContextDefaultValueUpdate } from '../models/index.ts';

export interface SetDefaultValues extends CustomFieldContextDefaultValueUpdate {
  /** The ID of the custom field. */
  fieldId: string;
}
