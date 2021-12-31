import { WorkflowRulesSearch } from '../models/mod.ts';

export interface WorkflowRuleSearch extends WorkflowRulesSearch {
  /** The app migration transfer ID. */
  transferId: string;
}
