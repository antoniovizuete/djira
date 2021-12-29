import { IssueLinkType } from './issueLinkType.ts';
import { LinkedIssue } from './linkedIssue.ts';
import { Comment } from './comment.ts';

/** @deprecated Use LinkIssueRequestJson instead. */
export type LinkIssueRequestJsonBean = LinkIssueRequestJson;

export interface LinkIssueRequestJson {
  type: IssueLinkType;
  inwardIssue: LinkedIssue;
  outwardIssue: LinkedIssue;
  comment?: Comment;
}
