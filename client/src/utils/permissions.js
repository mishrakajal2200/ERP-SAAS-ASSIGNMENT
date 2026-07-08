// src/utils/permissions.js

export const hasPermission = (
  userRole,
  allowedRoles = []
) => {
  return allowedRoles.includes(
    userRole
  );
};

export const canManageUsers = (
  role
) => {
  return ["admin", "manager"].includes(
    role
  );
};

export const canManageProjects = (
  role
) => {
  return ["admin", "manager"].includes(
    role
  );
};

export const canManageTasks = (
  role
) => {
  return [
    "admin",
    "manager",
    "employee",
  ].includes(role);
};

export const isAdmin = (role) => {
  return role === "admin";
};