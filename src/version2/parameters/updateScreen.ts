import { UpdateScreenDetails } from '../models/index.ts';

export interface UpdateScreen extends UpdateScreenDetails {
  /** The ID of the screen. */
  screenId: number;
}
