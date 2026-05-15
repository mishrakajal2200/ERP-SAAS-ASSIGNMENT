// src/services/activityLogService.js

import api from "./api";

export const getLogs = () => api.get("/logs");