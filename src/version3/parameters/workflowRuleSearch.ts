import { WorkflowRulesSearch } from '../models/index.ts';

export interface WorkflowRuleSearch extends WorkflowRulesSearch {
  /** The app migration transfer ID. */
  transferId: string;
}
