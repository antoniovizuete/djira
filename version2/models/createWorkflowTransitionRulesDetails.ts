import { CreateWorkflowCondition } from './createWorkflowCondition.ts';
import { CreateWorkflowTransitionRule } from './createWorkflowTransitionRule.ts';

/** The details of a workflow transition rules. */
export interface CreateWorkflowTransitionRulesDetails {
  conditions?: CreateWorkflowCondition;
  /** The workflow validators. */
  validators?: CreateWorkflowTransitionRule[];
  /** The workflow post functions. */
  postFunctions?: CreateWorkflowTransitionRule[];
}
