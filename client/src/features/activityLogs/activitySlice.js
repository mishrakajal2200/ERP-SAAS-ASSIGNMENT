import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  getActivityLogsService,
} from "./activityService";

const initialState = {
  logs: [],
  loading: false,
  error: null,
};

// GET LOGS
export const getActivityLogs =
  createAsyncThunk(
    "activityLogs/getActivityLogs",

    async (_, thunkAPI) => {
      try {
        return await getActivityLogsService();
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

const activitySlice =
  createSlice({
    name: "activityLogs",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
      builder

        .addCase(
          getActivityLogs.pending,
          (state) => {
            state.loading = true;
          }
        )

        .addCase(
          getActivityLogs.fulfilled,
          (
            state,
            action
          ) => {
            state.loading = false;

            state.logs =
              action.payload.data;
          }
        )

        .addCase(
          getActivityLogs.rejected,
          (
            state,
            action
          ) => {
            state.loading = false;

            state.error =
              action.payload;
          }
        );
    },
  });

export default activitySlice.reducer;