import { DefaultWorkflow } from '../models/mod.ts';

export interface UpdateDefaultWorkflow extends DefaultWorkflow {
  /** The ID of the workflow scheme. */
  id: number;
}
