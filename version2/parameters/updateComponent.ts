import { Component } from '../models/mod.ts';

export interface UpdateComponent extends Component {
  /** The ID of the component. */
  id: string;
}
