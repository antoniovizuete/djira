import { IssueFieldOptionScope } from './issueFieldOptionScope.ts';

/** Details of the projects the option is available in. */
export interface IssueFieldOptionConfiguration {
  scope?: IssueFieldOptionScope;
  /** DEPRECATED */
  attributes?: string[];
}
