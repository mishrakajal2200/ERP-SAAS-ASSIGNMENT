import api from "../../api/axios";

export const loginAPI = (data) =>
  api.post("/auth/login", data);

export const registerAPI = (data) =>
  api.post("/auth/register-company", data);

export const getMeAPI = () =>
  api.get("/auth/me");

export const forgotPasswordAPI = (data) =>
  api.post("/auth/forgot-password", data);

export const resetPasswordAPI = (token, data) =>
  api.post(`/auth/reset-password/${token}`, data);