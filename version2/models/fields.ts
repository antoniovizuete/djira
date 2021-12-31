import { Attachment } from './attachment.ts';
import { Comment } from './comment.ts';
import { Component } from './component.ts';
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
  /** The list of issue links. */
  issuelinks: IssueLink[];
  /** The type of the linked issue. */
  issuetype: IssueTypeDetails;
  /** The number of watchers of the issue. Returns an error if watching is disabled. */
  watches: Watchers;
  /** The creation time of the issue. */
  created: string;
  /** The list of labels associated with the issue. */
  labels: string[];
  /** The time when the issue was last updated at. */
  updated: string;
  /** The list of project components the issue belongs to. */
  components: Component[];
  /** The value of the environment field. */
  environment: RichText | null;
  /** The issue description. */
  description?: string;
  /** The list of issue attachments. */
  attachment: Attachment[];
  /** The user who created the issue */
  creator: User;
  /** The list of subtasks. */
  subtasks: Issue[];
  /** The reporter of the issue. */
  reporter: User;
  /** The list of issue comment. */
  comment: {
    /** The list of issue comment. */
    comments: Comment[];
    self: string;
    maxResults: number;
    total: number;
    startAt: number;
  };
  /** The number of voters of the issue. Returns an error if voting is disabled. */
  votes: Votes & { voters: never };

  workratio: number;
  issuerestriction?: {
    issuerestrictions: any;
    shouldDisplay: boolean;
  };
  timeoriginalestimate?: any;
  worklog: {
    startAt: number;
    maxResults: number;
    total: number;
    worklogs: Worklog[];
  };
}
