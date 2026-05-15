// src/services/authService.js

import api from "./api";

export const registerCompany = (data) =>
  api.post("/auth/register-company", data);

export const loginUser = (data) =>
  api.post("/auth/login", data);