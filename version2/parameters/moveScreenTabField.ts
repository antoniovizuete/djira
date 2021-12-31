import { MoveField } from '../models/mod.ts';

export interface MoveScreenTabField extends MoveField {
  /** The ID of the screen. */
  screenId: number;
  /** The ID of the screen tab. */
  tabId: number;
  /** The ID of the field. */
  id: string;
}
