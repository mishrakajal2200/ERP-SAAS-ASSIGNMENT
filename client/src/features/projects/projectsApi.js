import axiosInstance from "../../services/axiosInstance";

export const getProjectsAPI = async () => {
  const res = await axiosInstance.get("/projects");
  return res.data;
};