import {
  getActivityLogsAPI,
} from "./activityAPI";

// GET LOGS
export const getActivityLogsService =
  async () => {
    const res =
      await getActivityLogsAPI();

    return res.data;
  };