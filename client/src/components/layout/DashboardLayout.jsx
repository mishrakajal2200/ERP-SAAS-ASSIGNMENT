import { Box, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: `${drawerWidth}px`,
          backgroundColor: "#f5f6fa",
          minHeight: "100vh",
        }}
      >
        {/* Push content below navbar */}
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;