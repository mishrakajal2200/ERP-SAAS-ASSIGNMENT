import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  getDepartmentsService,
  createDepartmentService,
  updateDepartmentService,
  deleteDepartmentService,
} from "./departmentService";

const initialState = {
  departments: [],
  loading: false,
  error: null,
};

// GET
export const getDepartments =
  createAsyncThunk(
    "departments/getDepartments",

    async (_, thunkAPI) => {
      try {
        return await getDepartmentsService();
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

// CREATE
export const createDepartment =
  createAsyncThunk(
    "departments/createDepartment",

    async (
      data,
      thunkAPI
    ) => {
      try {
        return await createDepartmentService(
          data
        );
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

// UPDATE
export const updateDepartment =
  createAsyncThunk(
    "departments/updateDepartment",

    async (
      {
        id,
        data,
      },
      thunkAPI
    ) => {
      try {
        return await updateDepartmentService(
          id,
          data
        );
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

// DELETE
export const deleteDepartment =
  createAsyncThunk(
    "departments/deleteDepartment",

    async (
      id,
      thunkAPI
    ) => {
      try {
        await deleteDepartmentService(
          id
        );

        return id;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

const departmentSlice =
  createSlice({
    name: "departments",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
      builder

        // GET
        .addCase(
          getDepartments.pending,
          (state) => {
            state.loading = true;
          }
        )

        .addCase(
          getDepartments.fulfilled,
          (
            state,
            action
          ) => {
            state.loading = false;

            state.departments =
              action.payload.data;
          }
        )

        .addCase(
          getDepartments.rejected,
          (
            state,
            action
          ) => {
            state.loading = false;

            state.error =
              action.payload;
          }
        )

        // CREATE
        .addCase(
          createDepartment.fulfilled,
          (
            state,
            action
          ) => {
            state.departments.unshift(
              action.payload.data
            );
          }
        )

        // UPDATE
        .addCase(
          updateDepartment.fulfilled,
          (
            state,
            action
          ) => {
            state.departments =
              state.departments.map(
                (item) =>
                  item._id ===
                  action.payload.data._id
                    ? action.payload.data
                    : item
              );
          }
        )

        // DELETE
        .addCase(
          deleteDepartment.fulfilled,
          (
            state,
            action
          ) => {
            state.departments =
              state.departments.filter(
                (item) =>
                  item._id !==
                  action.payload
              );
          }
        );
    },
  });

export default departmentSlice.reducer;