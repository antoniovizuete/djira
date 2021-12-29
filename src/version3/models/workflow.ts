import { PublishedWorkflowId } from './publishedWorkflowId.ts';
import { Transition } from './transition.ts';
import { WorkflowStatus } from './workflowStatus.ts';
import { WorkflowSchemeIdName } from './workflowSchemeIdName.ts';

/** Details about a workflow. */
export interface Workflow {
  id: PublishedWorkflowId;
  /** The description of the workflow. */
  description: string;
  /** The transitions of the workflow. */
  transitions?: Transition[];
  /** The statuses of the workflow. */
  statuses?: WorkflowStatus[];
  /** Whether this is the default workflow. */
  isDefault?: boolean;
  /** The workflow schemes the workflow is assigned to. */
  schemes?: WorkflowSchemeIdName[];
}
