import asyncHandler from "../utils/asyncHandler.js";
import * as projectService from "../services/projectService.js";
import { successResponse } from "../utils/response.js";

export const createProject = asyncHandler(async (req, res) => {
  const project = await projectService.createProject(req.body, req.user);
  return successResponse(res, 201, "Project created", project);
});

export const getProjects = asyncHandler(async (req, res) => {
  const projects = await projectService.getProjects(req.query, req.user);
  return successResponse(res, 200, "Projects fetched", projects);
});

export const updateProject = asyncHandler(async (req, res) => {
  const project = await projectService.updateProject(
    req.params.id,
    req.body,
    req.user
  );
  return successResponse(res, 200, "Project updated", project);
});

export const deleteProject = asyncHandler(async (req, res) => {
  await projectService.deleteProject(req.params.id, req.user);
  return successResponse(res, 200, "Project deleted");
});