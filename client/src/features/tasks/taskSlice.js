import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  getTasksService,
} from "./taskService";

const initialState = {
  tasks: [],
  loading: false,
};

export const getTasks =
  createAsyncThunk(
    "tasks/getTasks",

    async () => {
      return await getTasksService();
    }
  );

const taskSlice =
  createSlice({
    name: "tasks",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
      builder

        .addCase(
          getTasks.pending,
          (state) => {
            state.loading = true;
          }
        )

        .addCase(
          getTasks.fulfilled,
          (
            state,
            action
          ) => {
            state.loading = false;

            state.tasks =
              action.payload.data;
          }
        );
    },
  });

export default taskSlice.reducer;