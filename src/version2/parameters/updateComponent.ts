import { Component } from '../models/index.ts';

export interface UpdateComponent extends Component {
  /** The ID of the component. */
  id: string;
}
