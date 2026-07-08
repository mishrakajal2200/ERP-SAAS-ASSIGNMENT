import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  getUsersService,
} from "./userService";

const initialState = {
  users: [],
  loading: false,
};

export const getUsers =
  createAsyncThunk(
    "users/getUsers",

    async () => {
      return await getUsersService();
    }
  );

const userSlice =
  createSlice({
    name: "users",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
      builder

        .addCase(
          getUsers.fulfilled,
          (
            state,
            action
          ) => {
            state.users =
              action.payload.data;
          }
        );
    },
  });

export default userSlice.reducer;