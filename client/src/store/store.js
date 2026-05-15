// src/store/store.js

import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import projectReducer from "./slices/projectSlice";
import taskReducer from "./slices/taskSlice";
import departmentReducer from "./slices/departmentSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    projects: projectReducer,
    tasks: taskReducer,
    departments: departmentReducer,
  },
});