import {
  getProjectsAPI,
  getProjectAPI,
  createProjectAPI,
  updateProjectAPI,
  deleteProjectAPI,
} from "./projectAPI";

export const getProjectsService = async () => {
  const res = await getProjectsAPI();
  return res.data;
};

export const getProjectService = async (id) => {
  const res = await getProjectAPI(id);
  return res.data;
};

export const createProjectService = async (data) => {
  const res = await createProjectAPI(data);
  return res.data;
};

export const updateProjectService = async (id, data) => {
  const res = await updateProjectAPI(id, data);
  return res.data;
};

export const deleteProjectService = async (id) => {
  const res = await deleteProjectAPI(id);
  return res.data;
};