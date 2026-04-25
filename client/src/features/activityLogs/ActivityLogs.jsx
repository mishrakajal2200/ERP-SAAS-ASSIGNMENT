import { useEffect, useState } from "react";
import { getLogsAPI } from "./activitysApi.js";
import { Box, Typography } from "@mui/material";

const ActivityLogPage = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getLogsAPI().then((res) => setLogs(res.data));
  }, []);

  return (
    <Box>
      <Typography variant="h5">Activity Logs</Typography>

      {logs.map((log) => (
        <Typography key={log._id}>
          {log.message}
        </Typography>
      ))}
    </Box>
  );
};

export default ActivityLogPage;