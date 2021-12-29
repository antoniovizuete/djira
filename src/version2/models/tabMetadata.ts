import { FieldMetadata } from './fieldMetadata.ts';

/** The metadata describing a tab in an issue screen. */
export interface TabMetadata {
  /** The name of the tab. */
  name: string;
  /** The fields within the tab */
  fields: FieldMetadata[];
}
