import { ScreenableTab } from '../models/index.ts';

export interface RenameScreenTab extends ScreenableTab {
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
}
