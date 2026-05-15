// src/services/companyService.js

import api from "./api";

export const getCompany = () => api.get("/company");