import { UpdateScreenSchemeDetails } from '../models/mod.ts';

export interface UpdateScreenScheme extends UpdateScreenSchemeDetails {
  /** The ID of the screen scheme. */
  screenSchemeId: string;
}
