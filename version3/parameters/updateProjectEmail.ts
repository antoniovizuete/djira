import { ProjectEmailAddress } from '../models/mod.ts';

export interface UpdateProjectEmail extends ProjectEmailAddress {
  /** The project ID. */
  projectId: number;
}
