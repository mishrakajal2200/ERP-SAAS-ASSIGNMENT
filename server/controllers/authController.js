import asyncHandler from "../utils/asyncHandler.js";
import * as authService from "../services/authService.js";
import { successResponse } from "../utils/response.js";

export const registerCompany = asyncHandler(async (req, res) => {
  const data = await authService.registerCompany(req.body);
  return successResponse(res, 201, "Company registered", data);
});

export const login = asyncHandler(async (req, res) => {
  const data = await authService.login(req.body);
  return successResponse(res, 200, "Login successful", data);
});

export const getMe = asyncHandler(async (req, res) => {
  const user = await authService.getMe(req.user.id);
  return successResponse(res, 200, "User fetched", user);
});

export const forgotPassword = asyncHandler(async (req, res) => {
  const data = await authService.forgotPassword(req.body.email);
  return successResponse(res, 200, "Reset link sent successfully", data);
});
 
export const resetPassword = asyncHandler(async (req, res) => {
  const { token } = req.params;

  const data = await authService.resetPassword(
    token,
    req.body.password
  );

  return successResponse(
    res,
    200,
    "Password reset successfully",
    data
  );
});