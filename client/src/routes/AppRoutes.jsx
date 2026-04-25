import { Routes, Route } from "react-router-dom";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";

import Dashboard from "../pages/Dashboard.jsx";
import NotFound from "../pages/NotFound.jsx";

import UserList from "../features/users/UserList.jsx";
import CompanyPage from "../features/companies/CompanyPage.jsx";
import ProjectList from "../features/projects/ProjectList.jsx";
import TaskBoard from "../features/tasks/TaskBoard.jsx";

import DashboardLayout from "../components/layout/DashboardLayout.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import RoleRoute from "./RoleRoute.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* PRIVATE */}
      <Route element={<PrivateRoute />}>
        <Route element={<DashboardLayout />}>
          
          {/* COMMON */}
          <Route path="/" element={<Dashboard />} />

          {/* ADMIN ONLY */}
          <Route element={<RoleRoute allowedRoles={["admin"]} />}>
            <Route path="/users" element={<UserList />} />
            <Route path="/companies" element={<CompanyPage />} />
          </Route>

          {/* ALL AUTH USERS */}
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/tasks" element={<TaskBoard />} />

        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;