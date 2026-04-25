import axiosInstance from "../../services/axiosInstance";

export const getCompaniesAPI = async () => {
  const res = await axiosInstance.get("/companies");
  return res.data;
};

export const createCompanyAPI = async (data) => {
  const res = await axiosInstance.post("/companies", data);
  return res.data;
};

export const switchCompanyAPI = async (companyId) => {
  const res = await axiosInstance.post("/companies/switch", { companyId });
  return res.data;
};