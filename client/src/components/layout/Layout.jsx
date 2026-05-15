// src/components/layout/Layout.jsx

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      className="
        relative
        flex
        min-h-screen
        overflow-hidden
        bg-[#060816]
        text-white
      "
    >
      {/* ========================= */}
      {/* Animated Background */}
      {/* ========================= */}

      {/* Main Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* ========================= */}
      {/* Sidebar */}
      {/* ========================= */}

      <div className="relative z-20">
        <Sidebar />
      </div>

      {/* ========================= */}
      {/* Main Content */}
      {/* ========================= */}

      <div className="flex-1 flex flex-col relative z-10 overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Content Area */}
        <main
          className="
            flex-1
            overflow-y-auto
            p-6
            md:p-8
          "
        >
          {/* Glass Container */}
          <div
            className="
              min-h-[calc(100vh-120px)]
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              shadow-[0_8px_32px_rgba(0,0,0,0.35)]
              p-5
              md:p-8
            "
          >
            {/* Inner Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-[32px]
                bg-gradient-to-br
                from-white/[0.03]
                to-transparent
                pointer-events-none
              "
            />

            {/* Actual Page */}
            <div className="relative z-10">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;