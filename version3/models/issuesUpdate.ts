import { IssueUpdateDetails } from './issueUpdateDetails.ts';

/** @deprecated Use IssuesUpdate instead. */
export type IssuesUpdateBean = IssuesUpdate;

export interface IssuesUpdate {
  issueUpdates?: IssueUpdateDetails[];
}
