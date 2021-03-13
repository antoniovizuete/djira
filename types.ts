export type ProtocolType = "http" | "https";

export type JiraClientConstructorParams =  {
  protocol?: ProtocolType;
  host: string;
  port?: string;
  base?: string;
  apiVersion?: string;
  strictSSL?: boolean;
  timeout?: number;
  username?: string;
  password?: string;
};

type ExpandType = {
  expand: string
}

export type SearchRequestType = {
  jql: string,
  startAt?: number,
  maxResults?: number,
  fields?: string[]
}

export type SearchResultIssueType = ExpandType & {
  id: string,
  self: string,
  key: string,
  fields: Record<string, unknown>
}

export type SearchResultType = ExpandType & {
  startAt: number,
  maxResults: number,
  total: number,
  issues: SearchResultIssueType[]
}

export default interface JiraClient {
  search: (params: SearchRequestType) => Promise<SearchResultType>;
}
