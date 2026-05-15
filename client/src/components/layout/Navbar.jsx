// src/components/layout/Navbar.jsx

import {
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineMoon,
} from "react-icons/hi";

import {
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tenantId");

    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B1120]/70 backdrop-blur-2xl">
      <div className="flex items-center justify-between px-6 py-4">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-5">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <span className="text-white font-black text-lg">
                E
              </span>
            </div>

            <div>
              <h1 className="text-white text-lg font-bold tracking-wide">
                ERP SaaS
              </h1>

              <p className="text-slate-400 text-xs">
                Multi-Tenant Platform
              </p>
            </div>
          </div>

          {/* SEARCH */}
          <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-2xl px-4 py-3 w-[350px]">
            <HiOutlineSearch className="text-slate-400 text-xl" />

            <input
              type="text"
              placeholder="Search projects, users, tasks..."
              className="bg-transparent outline-none text-sm text-white placeholder:text-slate-500 ml-3 w-full"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* THEME BUTTON */}
          <button className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/10 transition">
            <HiOutlineMoon className="text-xl" />
          </button>

          {/* SETTINGS */}
          <button className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/10 transition">
            <HiOutlineCog className="text-xl" />
          </button>

          {/* NOTIFICATIONS */}
          <div className="relative">
            <button className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white/10 transition">
              <HiOutlineBell className="text-xl" />
            </button>

            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
          </div>

          {/* PROFILE */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-2 backdrop-blur-xl">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="profile"
              className="w-11 h-11 rounded-xl object-cover border border-cyan-500/30"
            />

            <div className="hidden md:block">
              <h3 className="text-sm font-semibold text-white">
                Kajal Mishra
              </h3>

              <p className="text-xs text-slate-400">
                Super Admin
              </p>
            </div>

            <FaChevronDown className="text-slate-500 text-xs" />
          </div>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="hidden md:flex items-center justify-center px-5 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-lg shadow-red-500/20 hover:scale-105 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;