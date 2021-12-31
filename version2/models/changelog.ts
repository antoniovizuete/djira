import { UserDetails } from './userDetails.ts';
import { ChangeDetails } from './changeDetails.ts';
import { HistoryMetadata } from './historyMetadata.ts';

/** A changelog. */
export interface Changelog {
  /** The ID of the changelog. */
  id?: string;
  author?: UserDetails;
  /** The date on which the change took place. */
  created?: string;
  /** The list of items changed. */
  items?: ChangeDetails[];
  historyMetadata?: HistoryMetadata;
}
