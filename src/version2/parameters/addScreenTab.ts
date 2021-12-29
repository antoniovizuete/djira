import { ScreenableTab } from '../models/index.ts';

export interface AddScreenTab extends ScreenableTab {
  /** The ID of the screen. */
  screenId: number;
}
