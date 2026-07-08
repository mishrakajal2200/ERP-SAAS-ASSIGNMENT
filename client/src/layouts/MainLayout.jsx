import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
  return (
    <div
      className="
        min-h-screen
        flex
        bg-[#020617]
        text-white
      "
    >
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div
        className="
          flex-1
          flex
          flex-col
          min-h-screen
        "
      >
        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main
          className="
            flex-1
            p-6
            overflow-y-auto
          "
        >
          <Outlet />
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;