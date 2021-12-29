import { ProjectCategory } from '../models/index.ts';

export interface UpdateProjectCategory extends Omit<ProjectCategory, 'id'> {
  id: number;
}
