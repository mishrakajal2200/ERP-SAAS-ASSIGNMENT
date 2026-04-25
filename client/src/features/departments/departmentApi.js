import axiosInstance from "../../services/axiosInstance";

export const getDepartmentsAPI = async () => {
  const res = await axiosInstance.get("/departments");
  return res.data;
};