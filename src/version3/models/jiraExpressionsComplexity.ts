import { JiraExpressionsComplexityValue } from './jiraExpressionsComplexityValue.ts';

/** @deprecated Use JiraExpressionsComplexity instead. */
export type JiraExpressionsComplexityBean = JiraExpressionsComplexity;

export interface JiraExpressionsComplexity {
  steps?: JiraExpressionsComplexityValue;
  expensiveOperations?: JiraExpressionsComplexityValue;
  beans?: JiraExpressionsComplexityValue;
  primitiveValues?: JiraExpressionsComplexityValue;
}
