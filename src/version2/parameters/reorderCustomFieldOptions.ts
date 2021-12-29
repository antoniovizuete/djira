import { OrderOfCustomFieldOptions } from '../models/index.ts';

export interface ReorderCustomFieldOptions extends OrderOfCustomFieldOptions {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
}
