import ActivityLog from "../models/ActivityLog.js";

export const getLogs = async (query, user) => {
  return await ActivityLog.find({ companyId: user.companyId });
};