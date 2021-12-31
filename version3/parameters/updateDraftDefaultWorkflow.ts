import { DefaultWorkflow } from '../models/mod.ts';

export interface UpdateDraftDefaultWorkflow extends DefaultWorkflow {
  /** The ID of the workflow scheme that the draft belongs to. */
  id: number;
}
