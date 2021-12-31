import { ScreenableTab } from '../models/mod.ts';

export interface AddScreenTab extends ScreenableTab {
  /** The ID of the screen. */
  screenId: number;
}
