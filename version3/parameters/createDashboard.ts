import { DashboardDetails, SharePermission } from '../models/mod.ts';

export interface CreateDashboard extends Omit<DashboardDetails, 'editPermissions'> {
  /** The edit permissions for the dashboard. */
  editPermissions?: SharePermission[];
}
