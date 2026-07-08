import {
  getUsersAPI,
} from "./userAPI";

export const getUsersService =
  async () => {
    const res =
      await getUsersAPI();

    return res.data;
  };