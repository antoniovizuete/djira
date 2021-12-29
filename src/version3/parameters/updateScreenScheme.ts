import { UpdateScreenSchemeDetails } from '../models/index.ts';

export interface UpdateScreenScheme extends UpdateScreenSchemeDetails {
  /** The ID of the screen scheme. */
  screenSchemeId: string;
}
