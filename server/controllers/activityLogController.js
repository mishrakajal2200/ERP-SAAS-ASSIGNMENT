import asyncHandler from "../utils/asyncHandler.js";
import * as activityLogService from "../services/activityLogService.js";
import { successResponse } from "../utils/response.js";

export const getActivityLogs = asyncHandler(async (req, res) => {
  const logs = await activityLogService.getLogs(req.query, req.user);
  return successResponse(res, 200, "Logs fetched", logs);
});