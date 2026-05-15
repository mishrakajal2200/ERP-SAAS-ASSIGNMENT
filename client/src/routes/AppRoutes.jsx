// src/routes/AppRoutes.jsx

import { Routes, Route, Navigate } from "react-router-dom";

// 🔐 Auth Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// 📊 Dashboard
import Dashboard from "../pages/dashboard/Dashboard";
import Analytics from "../pages/dashboard/Analytics";

// 👤 Users
import UserList from "../pages/users/UserList";
import CreateUser from "../pages/users/CreateUser";
import EditUser from "../pages/users/EditUser";

// 🏢 Company
import CompanyProfile from "../pages/companies/CompanyProfile";

// 🏬 Departments
import DepartmentList from "../pages/departments/DepartmentList";
import CreateDepartment from "../pages/departments/CreateDepartment";

// 📁 Projects
import ProjectList from "../pages/projects/ProjectList";
import CreateProject from "../pages/projects/CreateProject";
import EditProject from "../pages/projects/EditProject";
import ProjectDetails from "../pages/projects/ProjectDetails";

// ✅ Tasks
import TaskList from "../pages/tasks/TaskList";
import CreateTask from "../pages/tasks/CreateTask";
import TaskBoard from "../pages/tasks/TaskBoard";

// 📜 Logs
import ActivityLogs from "../pages/logs/ActivityLogs";

// 🧱 Layout
import Layout from "../components/layout/Layout";

// 🔐 Route Guard
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES ================= */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ================= PROTECTED ROUTES ================= */}
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />

          {/* Users */}
          <Route path="/users" element={<UserList />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />

          {/* Company */}
          <Route path="/company" element={<CompanyProfile />} />

          {/* Departments */}
          <Route path="/departments" element={<DepartmentList />} />
          <Route path="/departments/create" element={<CreateDepartment />} />

          {/* Projects */}
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/create" element={<CreateProject />} />
          <Route path="/projects/edit/:id" element={<EditProject />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />

          {/* Tasks */}
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/create" element={<CreateTask />} />
          <Route path="/tasks/board" element={<TaskBoard />} />

          {/* Logs */}
          <Route path="/logs" element={<ActivityLogs />} />

        </Route>
      </Route>

      {/* ================= DEFAULT ROUTE ================= */}
      <Route path="*" element={<Navigate to="/dashboard" />} />

    </Routes>
  );
};

export default AppRoutes;