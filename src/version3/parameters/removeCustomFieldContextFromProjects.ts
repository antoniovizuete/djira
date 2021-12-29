import { ProjectIds } from '../models/index.ts';

export interface RemoveCustomFieldContextFromProjects extends ProjectIds {
  /** The ID of the custom field. */
  fieldId: string;
  /** The ID of the context. */
  contextId: number;
}
