import { UpdateScreenDetails } from '../models/mod.ts';

export interface UpdateScreen extends UpdateScreenDetails {
  /** The ID of the screen. */
  screenId: number;
}
