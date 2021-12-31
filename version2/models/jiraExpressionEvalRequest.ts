import { JiraExpressionEvalContext } from './jiraExpressionEvalContext.ts';

/** @deprecated Use JiraExpressionEvalRequest instead. */
export type JiraExpressionEvalRequestBean = JiraExpressionEvalRequest;

export interface JiraExpressionEvalRequest {
  /** The Jira expression to evaluate. */
  expression: string;
  context?: JiraExpressionEvalContext;
}
