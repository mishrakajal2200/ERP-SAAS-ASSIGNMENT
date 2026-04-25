import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCompaniesAPI,
  createCompanyAPI,
  switchCompanyAPI,
} from "./companysApi.js";

export const fetchCompanies = createAsyncThunk(
  "company/fetch",
  async () => {
    return await getCompaniesAPI();
  }
);

export const createCompany = createAsyncThunk(
  "company/create",
  async (data, { dispatch }) => {
    await createCompanyAPI(data);
    dispatch(fetchCompanies());
  }
);

export const switchCompany = createAsyncThunk(
  "company/switch",
  async (companyId) => {
    return await switchCompanyAPI(companyId);
  }
);

const companySlice = createSlice({
  name: "company",
  initialState: {
    companies: [],
    currentCompany: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.companies = action.payload.data;
      })
      .addCase(switchCompany.fulfilled, (state, action) => {
        state.currentCompany = action.payload.company;
      });
  },
});

export default companySlice.reducer;