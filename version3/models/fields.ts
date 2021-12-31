import { Attachment } from './attachment.ts';
import { Comment } from './comment.ts';
import { Component } from './component.ts';
import { CreateIssueDescriptionContent } from '../parameters/mod.ts';
import { Issue } from './issue.ts';
import { IssueLink } from './issueLink.ts';
import { IssueTypeDetails } from './issueTypeDetails.ts';
import { Priority } from './priority.ts';
import { Resolution } from './resolution.ts';
import { RichText } from './richText.ts';
import { StatusDetails } from './statusDetails.ts';
import { TimeTrackingDetails } from './timeTrackingDetails.ts';
import { User } from './user.ts';
import { UserDetails } from './userDetails.ts';
import { Votes } from './votes.ts';
import { Watchers } from './watchers.ts';
import { Worklog } from './worklog.ts';

/** Key fields from the linked issue. */
export interface Fields {
  [key: string]: any;

  /** The estimate of how much longer working on the issue will take, in seconds. */
  aggregatetimespent: number | null;
  /** The assignee of the linked issue. */
  assignee: UserDetails;
  /** The time the issue is due. */
  duedate: string | null;
  /** The list of versions where the issue was fixed. */
  fixVersions: string[];
  lastViewed: string | null;
  /** The issue parent. */
  parent?: Issue;
  /** The priority of the linked issue. */
  priority: Priority;
  /** The resolution of the issue. */
  resolution: Resolution | null;
  /** The time the issue was resolved at. */
  resolutiondate: string | null;
  /** The status of the linked issue. */
  status: StatusDetails;
  /** The summary description of the linked issue. */
  summary: string;
  /** The time that was spent working on the issue, in seconds. */
  timespent: number | null;
  /** The time tracking of the linked issue. */
  timetracking: TimeTrackingDetails;
  /** The type of the linked issue. */
  issuetype?: IssueTypeDetails;
  /** The type of the linked issue. */
  issueType?: IssueTypeDetails;

  environment: RichText | null;
  issuelinks: IssueLink[];
  workratio: number;
  issuerestriction?: {
    issuerestrictions: any;
    shouldDisplay: boolean;
  };
  watches: Watchers;
  created: string;
  labels: string[];
  updated: string;
  components: Component[];
  timeoriginalestimate?: any;
  description?: {
    type?: string;
    version?: string | number;
    content: Array<CreateIssueDescriptionContent>;
  };
  attachment: Attachment[];
  creator: User;
  subtasks: Issue[];
  reporter: User;
  comment: {
    comments: Comment[];
    self: string;
    maxResults: number;
    total: number;
    startAt: number;
  };
  votes: Votes & { voters: never };
  worklog: {
    startAt: number;
    maxResults: number;
    total: number;
    worklogs: Worklog[];
  };
}
