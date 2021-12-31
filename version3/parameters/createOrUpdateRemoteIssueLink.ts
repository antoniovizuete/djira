import { RemoteIssueLinkRequest } from '../models/mod.ts';

export interface CreateOrUpdateRemoteIssueLink extends RemoteIssueLinkRequest {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
}
