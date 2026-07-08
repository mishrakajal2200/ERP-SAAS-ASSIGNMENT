import api from "../../api/axios";

export const getProjectsAPI = () =>
  api.get("/projects");

export const getProjectAPI = (id) =>
  api.get(`/projects/${id}`);

export const createProjectAPI = (data) =>
  api.post("/projects", data);

export const updateProjectAPI = (id, data) =>
  api.put(`/projects/${id}`, data);

export const deleteProjectAPI = (id) =>
  api.delete(`/projects/${id}`);