import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./taskSlice";
import { Box, Typography } from "@mui/material";

const TaskBoard = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((s) => s.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const columns = ["todo", "in-progress", "done"];

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {columns.map((col) => (
        <Box key={col} sx={{ flex: 1 }}>
          <Typography>{col}</Typography>

          {tasks
            .filter((t) => t.status === col)
            .map((t) => (
              <Box key={t._id} sx={{ p: 1, bgcolor: "#fff", mb: 1 }}>
                {t.title}
              </Box>
            ))}
        </Box>
      ))}
    </Box>
  );
};

export default TaskBoard;