import { GroupName } from './groupName.ts';
import { ListWrapperCallbackGroupName } from './listWrapperCallbackGroupName.ts';

export interface SimpleListWrapperGroupName {
  size?: number;
  items?: GroupName[];
  pagingCallback?: ListWrapperCallbackGroupName;
  callback?: ListWrapperCallbackGroupName;
  'max-results'?: number;
}
