import axiosInstance from "../../services/axiosInstance";

export const getTasksAPI = async () => {
  const res = await axiosInstance.get("/tasks");
  return res.data;
};