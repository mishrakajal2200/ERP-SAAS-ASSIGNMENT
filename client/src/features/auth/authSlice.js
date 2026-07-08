import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  loginService,
  registerService,
  forgotPasswordService,
  resetPasswordService,

} from "./authService";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const login =
  createAsyncThunk(
    "auth/login",

    async (
      data,
      thunkAPI
    ) => {
      try {
        return await loginService(
          data
        );
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

export const register =
  createAsyncThunk(
    "auth/register-company",

    async (
      data,
      thunkAPI
    ) => {
      try {
        return await registerService(
          data
        );
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        );
      }
    }
  );

  export const forgotPassword =
  createAsyncThunk(
    "auth/forgot-password",

    async (
      email,
      thunkAPI
    ) => {
      try {
        const response =
          await forgotPasswordService(
            {email}
          );

        return response.data;

      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response.data.message
        );
      }
    }
  );

  export const resetPassword =
  createAsyncThunk(
    "auth/reset-password",

    async (
      { token, password },
      thunkAPI
    ) => {
      try {
        const response =
          await resetPasswordService(
            token,
            {
              password,
            }
          );

        return response.data;

      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response.data.message
        );
      }
    }
  );

const authSlice =
  createSlice({
    name: "auth",

    initialState,

    reducers: {
      logout: (state) => {
        state.user = null;

        localStorage.removeItem(
          "token"
        );

        localStorage.removeItem(
          "user"
        );
      },
    },

    extraReducers: (builder) => {
      builder

      .addCase(
  forgotPassword.pending,
  (state) => {
    state.loading = true;
    state.error = null;
    state.success = null;
  }
)

.addCase(
  forgotPassword.fulfilled,
  (state, action) => {
    state.loading = false;
    state.success =
      action.payload.message;
  }
)

.addCase(
  forgotPassword.rejected,
  (state, action) => {
    state.loading = false;
    state.error =
      action.payload;
  }
)

.addCase(
  resetPassword.pending,
  (state) => {
    state.loading = true;
    state.error = null;
    state.success = null;
  }
)

.addCase(
  resetPassword.fulfilled,
  (state, action) => {
    state.loading = false;
    state.success =
      action.payload.message;
  }
)

.addCase(
  resetPassword.rejected,
  (state, action) => {
    state.loading = false;
    state.error =
      action.payload;
  }
)

        .addCase(
          login.pending,
          (state) => {
            state.loading = true;
          }
        )

        .addCase(
          login.fulfilled,
          (
            state,
            action
          ) => {
            state.loading = false;

            state.user =
              action.payload.data.user;

            localStorage.setItem(
              "token",
              action.payload.data.token
            );

            localStorage.setItem(
              "user",
              JSON.stringify(
                action.payload.data.user
              )
            );
          }
        )

        .addCase(
          login.rejected,
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

export const { logout } =
  authSlice.actions;

export default authSlice.reducer;