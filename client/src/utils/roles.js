import { USER_ROLES } from "./constants";

export const isAdmin = (user) => {
  return user?.role === USER_ROLES.ADMIN;
};

export const isUser = (user) => {
  return user?.role === USER_ROLES.USER;
};