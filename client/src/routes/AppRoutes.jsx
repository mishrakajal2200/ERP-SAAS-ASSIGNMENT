
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Guards
import PrivateRoute from "../guards/PrivateRoute";
import AdminRoute from "../guards/AdminRoute";

// ---------------- AUTH ----------------
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

// ---------------- DASHBOARD ----------------
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Analytics from "../pages/dashboard/Analytics";
import Reports from "../pages/dashboard/Reports";
import Calendar from "../pages/dashboard/Calendar";

// ---------------- PROJECTS ----------------
import Projects from "../pages/projects/Projects";
import ProjectDetails from "../pages/projects/ProjectDetails";
import CreateProject from "../pages/projects/CreateProject";
import EditProject from "../pages/projects/EditProject";

// ---------------- TASKS ----------------
import Tasks from "../pages/tasks/Tasks";
import TaskDetails from "../pages/tasks/TaskDetails";
import CreateTask from "../pages/tasks/CreateTask";

// ---------------- USERS ----------------
import Users from "../pages/users/Users";
import CreateUser from "../pages/users/CreateUser";
import UserProfile from "../pages/users/UserProfile";

// ---------------- DEPARTMENTS ----------------
import Departments from "../pages/departments/Departments";
import CreateDepartment from "../pages/departments/CreateDepartment";

// ---------------- SETTINGS ----------------
import Settings from "../pages/settings/Settings";
import CompanySettings from "../pages/settings/CompanySettings";
import ProfileSettings from "../pages/settings/ProfileSettings";

// ---------------- NOTIFICATIONS ----------------
import Notifications from "../pages/notifications/Notifications";

// ---------------- ERRORS ----------------
import Forbidden from "../pages/errors/Forbidden";
import NotFound from "../pages/errors/NotFound";
import ServerError from "../pages/errors/ServerError";

const AppRoutes = () => {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES ================= */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register-company"
        element={<Register />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/reset-password/:token"
        element={<ResetPassword />}
      />

      {/* ================= PRIVATE ROUTES ================= */}

      <Route
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >

        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/dashboard/home"
          element={<DashboardHome />}
        />

        <Route
          path="/dashboard/analytics"
          element={<Analytics />}
        />

        <Route
          path="/dashboard/reports"
          element={<Reports />}
        />

        <Route
          path="/dashboard/calendar"
          element={<Calendar />}
        />

        {/* Projects */}

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />

        <Route
          path="/projects/create"
          element={
            <AdminRoute>
              <CreateProject />
            </AdminRoute>
          }
        />

        <Route
          path="/projects/edit/:id"
          element={
            <AdminRoute>
              <EditProject />
            </AdminRoute>
          }
        />

        {/* Tasks */}

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/tasks/:id"
          element={<TaskDetails />}
        />

        <Route
          path="/tasks/create"
          element={<CreateTask />}
        />

        {/* Users */}

        <Route
          path="/users"
          element={
            <AdminRoute>
              <Users />
            </AdminRoute>
          }
        />

        <Route
          path="/users/create"
          element={
            <AdminRoute>
              <CreateUser />
            </AdminRoute>
          }
        />

        <Route
          path="/profile"
          element={<UserProfile />}
        />

        {/* Departments */}

        <Route
          path="/departments"
          element={<Departments />}
        />

        <Route
          path="/departments/create"
          element={
            <AdminRoute>
              <CreateDepartment />
            </AdminRoute>
          }
        />

        {/* Settings */}

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route
          path="/settings/company"
          element={<CompanySettings />}
        />

        <Route
          path="/settings/profile"
          element={<ProfileSettings />}
        />

        {/* Notifications */}

        <Route
          path="/notifications"
          element={<Notifications />}
        />

      </Route>

      {/* ================= ERROR ROUTES ================= */}

      <Route
        path="/403"
        element={<Forbidden />}
      />

      <Route
        path="/500"
        element={<ServerError />}
      />

      {/* ================= DEFAULT ================= */}

      <Route
        path="/"
        element={
          <Navigate
            to="/dashboard"
            replace
          />
        }
      />

      {/* ================= 404 ================= */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
};

export default AppRoutes;