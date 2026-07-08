import {
  getTasksAPI,
  createTaskAPI,
} from "./taskAPI";

export const getTasksService =
  async () => {
    const res =
      await getTasksAPI();

    return res.data;
  };

export const createTaskService =
  async (data) => {
    const res =
      await createTaskAPI(
        data
      );

    return res.data;
  };