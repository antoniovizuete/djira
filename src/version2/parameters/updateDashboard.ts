import { DashboardDetails } from '../models/index.ts';

export interface UpdateDashboard extends DashboardDetails {
  /** The ID of the dashboard to update. */
  id: string;
}
