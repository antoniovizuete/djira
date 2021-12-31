import { ApplicationRole } from './applicationRole.ts';
import { ListWrapperCallbackApplicationRole } from './listWrapperCallbackApplicationRole.ts';

export interface SimpleListWrapperApplicationRole {
  size?: number;
  items?: ApplicationRole[];
  pagingCallback?: ListWrapperCallbackApplicationRole;
  callback?: ListWrapperCallbackApplicationRole;
  'max-results'?: number;
}
