import Company from "../models/Company.js";

export const getCompany = async (companyId) => {
  return await Company.findById(companyId);
};

export const updateCompany = async (companyId, data) => {
  return await Company.findByIdAndUpdate(companyId, data, { new: true });
};