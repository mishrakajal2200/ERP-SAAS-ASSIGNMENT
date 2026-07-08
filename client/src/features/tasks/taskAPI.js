import api from "../../api/axios";

export const getTasksAPI =
  () => api.get("/tasks");

export const createTaskAPI =
  (data) =>
    api.post("/tasks", data);