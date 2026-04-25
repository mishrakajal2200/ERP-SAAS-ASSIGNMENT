import asyncHandler from "../utils/asyncHandler.js";
import * as userService from "../services/userService.js";
import { successResponse } from "../utils/response.js";

export const createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body, req.user);
  return successResponse(res, 201, "User created", user);
});

export const getUsers = asyncHandler(async (req, res) => {
  const users = await userService.getUsers(req.query, req.user);
  return successResponse(res, 200, "Users fetched", users);
});

export const getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req.params.id, req.user);
  return successResponse(res, 200, "User fetched", user);
});

export const updateUser = asyncHandler(async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body, req.user);
  return successResponse(res, 200, "User updated", user);
});

export const deleteUser = asyncHandler(async (req, res) => {
  await userService.deleteUser(req.params.id, req.user);
  return successResponse(res, 200, "User deleted");
});