// src/services/taskService.js

import api from "./api";

export const getTasks = () => api.get("/tasks");

export const createTask = (data) =>
  api.post("/tasks", data);