import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProjectsAPI } from "./projectsApi.js";

export const fetchProjects = createAsyncThunk(
  "projects/fetch",
  async () => {
    return await getProjectsAPI();
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState: { projects: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload.data;
    });
  },
});

export default projectSlice.reducer;