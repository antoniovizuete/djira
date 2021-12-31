import { DashboardDetails } from '../models/mod.ts';

export interface UpdateDashboard extends DashboardDetails {
  /** The ID of the dashboard to update. */
  id: string;
}
