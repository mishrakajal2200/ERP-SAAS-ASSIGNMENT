import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTasksAPI } from "./tasksApi.js";

export const fetchTasks = createAsyncThunk(
  "tasks/fetch",
  async () => {
    return await getTasksAPI();
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  extraReducers: (b) => {
    b.addCase(fetchTasks.fulfilled, (s, a) => {
      s.tasks = a.payload.data;
    });
  },
});

export default taskSlice.reducer;