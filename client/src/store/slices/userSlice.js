// src/store/slices/userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers: (_, action) => action.payload,
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;