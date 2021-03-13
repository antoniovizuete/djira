import JiraClient, { JiraClientConstructorParams, SearchRequestType, SearchResultType } from "./types.ts";
import fetch, { RequestInitTimeout } from "./fetch.ts";

import { urlParse } from "./deps.ts";

class JiraClientImpl implements JiraClient {
  private protocol?: string;
  private host: string;
  private port?: string;
  private base?: string;
  private strictSSL?: boolean;
  private apiVersion?: string;
  private timeout?: number;
  private username?: string;
  private password?: string;

  constructor(params: JiraClientConstructorParams) {
    this.host = params.host;
    this.port = params.port;

    this.protocol = params.protocol || "https";
    this.base = params.base || "";
    this.strictSSL = params.strictSSL === undefined ?? params.strictSSL;
    this.apiVersion = params.apiVersion || "2"
    this.timeout = params.timeout;
    this.username = params.username;
    this.password = params.password; 
  }

  search(params: SearchRequestType): Promise<SearchResultType> {
    const uri = this.makeUri({
      pathname: "/search",
    });

    const body: SearchRequestType = {
      jql: params.jql,
      startAt: params.startAt || 0,
      maxResults: params.maxResults || 100,
      fields: params.fields || [ "summary", "status", "assignee"]
    }
    
    return this.doRequest(uri, {
      method: "POST",
      body: JSON.stringify(body),
    }) as Promise<SearchResultType>;
  }

  private makeUri({
    pathname,
    query,
    encode = false,
  }: {
    pathname: string;
    query?: Array<{ key: string; value: string }>;
    encode?: boolean;
  }): string {
    const uri = urlParse({
      protocol: this.protocol,
      hostname: this.host,
      port: this.port,
      pathname: `${this.base}/rest/api/${this.apiVersion}${pathname}`,
      query,
    }).toString();
    return encode ? encodeURI(uri) : decodeURIComponent(uri);
  }

  private async doRequest(uri: string, options: RequestInitTimeout): Promise<unknown> {
    const result = await fetch(uri, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
        "Content-Type": "application/json",
      }
    });
    return result.json();
  }
}

export default JiraClientImpl;
