import asyncHandler from "../utils/asyncHandler.js";
import * as taskService from "../services/taskService.js";
import { successResponse } from "../utils/response.js";

export const createTask = asyncHandler(async (req, res) => {
  const task = await taskService.createTask(req.body, req.user);
  return successResponse(res, 201, "Task created", task);
});

export const getTasks = asyncHandler(async (req, res) => {
  const tasks = await taskService.getTasks(req.query, req.user);
  return successResponse(res, 200, "Tasks fetched", tasks);
});

export const updateTask = asyncHandler(async (req, res) => {
  const task = await taskService.updateTask(
    req.params.id,
    req.body,
    req.user
  );
  return successResponse(res, 200, "Task updated", task);
});

export const deleteTask = asyncHandler(async (req, res) => {
  await taskService.deleteTask(req.params.id, req.user);
  return successResponse(res, 200, "Task deleted");
}); 