import { DefaultWorkflow } from '../models/index.ts';

export interface UpdateDefaultWorkflow extends DefaultWorkflow {
  /** The ID of the workflow scheme. */
  id: number;
}
