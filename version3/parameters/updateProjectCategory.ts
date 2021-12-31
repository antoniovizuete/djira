import { ProjectCategory } from '../models/mod.ts';

export interface UpdateProjectCategory extends Omit<ProjectCategory, 'id'> {
  id: number;
}
