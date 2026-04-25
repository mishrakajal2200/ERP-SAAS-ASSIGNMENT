import axiosInstance from "../../services/axiosInstance";

export const getUsersAPI = async (params) => {
  const res = await axiosInstance.get("/users", { params });
  return res.data;
};

export const createUserAPI = async (data) => {
  const res = await axiosInstance.post("/users", data);
  return res.data;
};

export const updateUserAPI = async (id, data) => {
  const res = await axiosInstance.put(`/users/${id}`, data);
  return res.data;
};

export const deleteUserAPI = async (id) => {
  const res = await axiosInstance.delete(`/users/${id}`);
  return res.data;
};