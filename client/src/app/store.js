import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice.js";
import projectReducer from "../features/projects/projectSlice.js";
import taskReducer from "../features/tasks/taskSlice.js";
import userReducer from "../features/users/userSlice.js";
import departmentReducer from "../features/departments/departmentSlice.js";
import dashboardReducer from "../features/dashboard/dashboardSlice.js"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
    tasks: taskReducer,
    users: userReducer,
    departments: departmentReducer,
    dashboard:dashboardReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});