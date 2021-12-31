import { IssueLinkType } from '../models/mod.ts';

export interface UpdateIssueLinkType extends IssueLinkType {
  /** The ID of the issue link type. */
  issueLinkTypeId: string;
}
