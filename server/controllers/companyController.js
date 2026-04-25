import asyncHandler from "../utils/asyncHandler.js";
import * as companyService from "../services/companyService.js";
import { successResponse } from "../utils/response.js";

export const getCompany = asyncHandler(async (req, res) => {
  const company = await companyService.getCompany(req.user.companyId);
  return successResponse(res, 200, "Company fetched", company);
});

export const updateCompany = asyncHandler(async (req, res) => {
  const company = await companyService.updateCompany(
    req.user.companyId,
    req.body
  );
  return successResponse(res, 200, "Company updated", company);
});