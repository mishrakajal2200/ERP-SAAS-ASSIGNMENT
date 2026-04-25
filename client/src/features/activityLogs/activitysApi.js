import axiosInstance from "../../services/axiosInstance";

export const getLogsAPI = async () => {
  const res = await axiosInstance.get("/activity-logs");
  return res.data;
};