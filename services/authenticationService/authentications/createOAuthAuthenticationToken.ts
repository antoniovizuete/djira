//import { OAuth } from 'oauth';
import { Config } from '../../../utils/config.ts';

export function createOAuthAuthenticationToken(
  authenticationData: Config.Authentication.OAuth,
  requestData: { baseURL: string; url: string; method: string },
): string | undefined {
  throw new Error('Not implemented yet.');
  /*const { baseURL, url, method } = requestData;

  const oauthUrl = `${baseURL}/plugins/servlet/oauth/`;
  const oauth = new OAuth(
    `${oauthUrl}request-token`,
    `${oauthUrl}access-token`,
    authenticationData.consumerKey,
    authenticationData.consumerSecret,
    '1.0',
    null,
    'RSA-SHA1',
  );

  return oauth.authHeader(
    new URL(url, baseURL).toString(),
    authenticationData.accessToken,
    authenticationData.tokenSecret,
    method,
  );*/
}
