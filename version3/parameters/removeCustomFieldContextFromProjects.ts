import { ProjectIds } from '../models/mod.ts';

export interface RemoveCustomFieldContextFromProjects extends ProjectIds {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
}
