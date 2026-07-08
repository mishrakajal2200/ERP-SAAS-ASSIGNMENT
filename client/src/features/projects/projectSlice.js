import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getProjectsService, createProjectService } from "./projectService";

const initialState = {
  projects: [],
  loading: false,
  error: null,
};

export const getProjects = createAsyncThunk(
  "projects/getProjects",

  async (_, thunkAPI) => {
    try {
      return await getProjectsService();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message,
      );
    }
  },
);

export const createProject = createAsyncThunk(
  "projects/createProject",

  async (data, thunkAPI) => {
    try {
      return await createProjectService(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const projectSlice = createSlice({
  name: "projects",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(createProject.pending, (state) => {
        state.loading = true;
      })

      .addCase(createProject.fulfilled, (state, action) => {
        state.loading = false;

        state.projects.unshift(action.payload.data);
      })

      .addCase(createProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getProjects.pending, (state) => {
        state.loading = true;
      })

      .addCase(getProjects.fulfilled, (state, action) => {
        state.loading = false;

        state.projects = action.payload.data;
      })

      .addCase(getProjects.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      });
  },
});

export default projectSlice.reducer;
