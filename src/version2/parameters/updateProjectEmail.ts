import { ProjectEmailAddress } from '../models/index.ts';

export interface UpdateProjectEmail extends ProjectEmailAddress {
  /** The project ID. */
  projectId: number;
}
