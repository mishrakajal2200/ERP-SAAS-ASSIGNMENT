import api from "../../api/axios";

// GET ACTIVITY LOGS
export const getActivityLogsAPI =
  () =>
    api.get("/logs");