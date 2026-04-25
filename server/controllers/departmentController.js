import asyncHandler from "../utils/asyncHandler.js";
import * as departmentService from "../services/departmentService.js";
import { successResponse } from "../utils/response.js";

export const createDepartment = asyncHandler(async (req, res) => {
  const dept = await departmentService.createDepartment(req.body, req.user);
  return successResponse(res, 201, "Department created", dept);
});

export const getDepartments = asyncHandler(async (req, res) => {
  const depts = await departmentService.getDepartments(req.query, req.user);
  return successResponse(res, 200, "Departments fetched", depts);
});