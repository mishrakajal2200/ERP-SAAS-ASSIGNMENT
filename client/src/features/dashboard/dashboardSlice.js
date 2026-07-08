import { createSlice } from "@reduxjs/toolkit";
import { getDashboard } from "./dashboardThunk.js";

const initialState = {
  loading: false,
  dashboard: null,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(getDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getDashboard.fulfilled, (state, action) => {
        console.log("FULFILLED PAYLOAD:", action.payload);
        state.loading = false;
        state.dashboard = action.payload;
      })

      .addCase(getDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;