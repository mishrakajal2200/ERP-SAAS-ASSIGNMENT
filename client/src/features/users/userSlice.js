import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUsersAPI,
  createUserAPI,
  updateUserAPI,
  deleteUserAPI,
} from "./userAPI";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (params, { rejectWithValue }) => {
    try {
      return await getUsersAPI(params);
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (data, { dispatch }) => {
    await createUserAPI(data);
    dispatch(fetchUsers());
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, data }, { dispatch }) => {
    await updateUserAPI(id, data);
    dispatch(fetchUsers());
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, { dispatch }) => {
    await deleteUserAPI(id);
    dispatch(fetchUsers());
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data || [];
      });
  },
});

export default userSlice.reducer;