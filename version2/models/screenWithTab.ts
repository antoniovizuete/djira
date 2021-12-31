import { Scope } from './scope.ts';
import { ScreenableTab } from './screenableTab.ts';

/** A screen with tab details. */
export interface ScreenWithTab {
  /** The ID of the screen. */
  id?: number;
  /** The name of the screen. */
  name?: string;
  /** The description of the screen. */
  description?: string;
  scope?: Scope;
  tab?: ScreenableTab;
}
