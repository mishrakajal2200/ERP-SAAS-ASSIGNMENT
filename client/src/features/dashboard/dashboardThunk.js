import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDashboardService } from "./dashboardService";

export const getDashboard = createAsyncThunk(
  "dashboard/get",
  async (_, thunkAPI) => {
    try {
      return await getDashboardService();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);