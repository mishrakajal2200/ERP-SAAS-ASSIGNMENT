import {
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineSearch,
} from "react-icons/hi";

import {
  FaChevronDown,
} from "react-icons/fa";

import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] =
    useState("");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href =
      "/login";
  };

  return (
    <header
      className="
        sticky top-0 z-50
        w-full
        border-b border-white/10
        bg-[#0B1120]/80
        backdrop-blur-2xl
      "
    >
      <div
        className="
          flex items-center
          justify-between
          px-6 py-4
        "
      >
        {/* LEFT */}
        <div
          className="
            flex items-center gap-5
          "
        >
          {/* LOGO */}
          <div
            className="
              flex items-center gap-3
            "
          >
            <div
              className="
                w-11 h-11
                rounded-2xl
                bg-gradient-to-br
                from-cyan-500
                via-blue-500
                to-purple-600
                flex items-center
                justify-center
              "
            >
              <span
                className="
                  text-white font-black
                "
              >
                E
              </span>
            </div>

            <div>
              <h1
                className="
                  text-white
                  font-bold
                  text-lg
                "
              >
                ERP SaaS
              </h1>

              <p
                className="
                  text-slate-400
                  text-xs
                "
              >
                Multi-Tenant Platform
              </p>
            </div>
          </div>

          {/* SEARCH */}
          <div
            className="
              hidden lg:flex
              items-center
              bg-white/5
              border border-white/10
              rounded-2xl
              px-4 py-3
              w-[350px]
            "
          >
            <HiOutlineSearch
              className="
                text-slate-400 text-xl
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search..."
              className="
                ml-3
                bg-transparent
                outline-none
                text-white
                placeholder:text-slate-500
                w-full
              "
            />
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            flex items-center gap-4
          "
        >
          {/* SETTINGS */}
          <button
            className="
              w-11 h-11
              rounded-2xl
              bg-white/5
              border border-white/10
              flex items-center
              justify-center
              text-slate-300
              hover:bg-white/10
              transition
            "
          >
            <HiOutlineCog
              className="text-xl"
            />
          </button>

          {/* NOTIFICATION */}
          <div className="relative">
            <button
              className="
                w-11 h-11
                rounded-2xl
                bg-white/5
                border border-white/10
                flex items-center
                justify-center
                text-slate-300
                hover:bg-white/10
                transition
              "
            >
              <HiOutlineBell
                className="text-xl"
              />
            </button>

            <span
              className="
                absolute
                top-2 right-2
                w-2.5 h-2.5
                bg-cyan-400
                rounded-full
              "
            />
          </div>

          {/* PROFILE */}
          <div
            className="
              flex items-center gap-3
              bg-white/5
              border border-white/10
              rounded-2xl
              px-3 py-2
            "
          >
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="profile"
              className="
                w-10 h-10
                rounded-xl
                object-cover
              "
            />

            <div className="hidden md:block">
              <h3
                className="
                  text-sm
                  font-semibold
                  text-white
                "
              >
                {user?.name || "User"}
              </h3>

              <p
                className="
                  text-xs
                  text-slate-400
                "
              >
                {user?.role || "Employee"}
              </p>
            </div>

            <FaChevronDown
              className="
                text-slate-500 text-xs
              "
            />
          </div>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="
              hidden md:flex
              px-5 py-3
              rounded-2xl
              bg-gradient-to-r
              from-red-500
              to-pink-500
              text-white
              font-semibold
              hover:scale-105
              transition
            "
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;