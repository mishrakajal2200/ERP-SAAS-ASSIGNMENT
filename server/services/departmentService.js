import Department from "../models/Department.js";

export const createDepartment = async (data, user) => {
  return await Department.create({
    ...data,
    companyId: user.companyId,
  });
};

export const getDepartments = async (query, user) => {
  return await Department.find({ companyId: user.companyId });
};