import { RemoteIssueLinkRequest } from '../models/index.ts';

export interface CreateOrUpdateRemoteIssueLink extends RemoteIssueLinkRequest {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
}
