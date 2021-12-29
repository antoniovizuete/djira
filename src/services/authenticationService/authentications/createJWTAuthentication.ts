//import jwt from 'https://cdn.skypack.dev/atlassian-jwt';
import { Config } from '../../../config.ts';

export function createJWTAuthentication(
  authenticationData: Config.Authentication.JWT,
  requestData: {
    method: string;
    url: string;
  },
): string {
  throw new Error("Not implemented yet.");
  /*const { method, url } = requestData;

  const now = Math.floor(Date.now() / 1000);
  const expire = now + 180;

  const request = jwt.fromMethodAndUrl(method, url);
  const tokenData = {
    iss: authenticationData.issuer,
    qsh: jwt.createQueryStringHash(request),
    iat: now,
    exp: expire,
  };

  const token = jwt.encodeSymmetric(tokenData, authenticationData.secret);

  return `JWT ${token}`;*/
}
