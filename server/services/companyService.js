import Company from "../models/Company.js";

export const getCompany = async (companyId) => {
  return await Company.findById(companyId);
};

export const updateCompany = async (companyId, data) => {
  const updateData = {
    name: data.name,
    revenue: data.revenue,
    subscription: data.subscription,
  };

  return await Company.findByIdAndUpdate(
    companyId,
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );
};