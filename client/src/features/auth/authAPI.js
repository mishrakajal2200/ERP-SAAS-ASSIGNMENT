import axiosInstance from "../../services/axiosInstance";

export const loginAPI = async (data) => {
  const res = await axiosInstance.post("/auth/login", data);
  return res.data;
};

export const registerAPI = async (data) => {
  const res = await axiosInstance.post("/auth/register", data);
  return res.data;
};