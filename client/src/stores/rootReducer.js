import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js";
import userReducer from "../features/users/userSlice.js";
import companyReducer from "../features/companies/companysSlice.js";
import projectReducer from "../features/projects/projectsSlice.js";
import taskReducer from "../features/tasks/taskSlice.js";

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  company: companyReducer,
  projects: projectReducer,
  tasks: taskReducer,
});

export default rootReducer;