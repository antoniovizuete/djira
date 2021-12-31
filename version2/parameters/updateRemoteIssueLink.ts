import { RemoteIssueLinkRequest } from '../models/mod.ts';

export interface UpdateRemoteIssueLink extends RemoteIssueLinkRequest {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** The ID of the remote issue link. */
  linkId: string;
}
