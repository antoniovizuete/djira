import { IssueTypeScreenSchemeMappingDetails } from '../models/index.ts';

export interface AppendMappingsForIssueTypeScreenScheme extends IssueTypeScreenSchemeMappingDetails {
  /** The ID of the issue type screen scheme. */
  issueTypeScreenSchemeId: string;
}
