import { ROLES } from "./roles.js";

export const PERMISSIONS = {
  [ROLES.ADMIN]: ["manage_users", "manage_projects", "manage_tasks"],
  [ROLES.MANAGER]: ["manage_projects", "manage_tasks"],
  [ROLES.EMPLOYEE]: ["view_tasks"],
};