// src/components/layout/Sidebar.jsx

import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  Building2,
  ClipboardList,
  Activity,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FolderKanban size={20} />,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: <CheckSquare size={20} />,
    },
    {
      name: "Users",
      path: "/users",
      icon: <Users size={20} />,
    },
    {
      name: "Departments",
      path: "/departments",
      icon: <Building2 size={20} />,
    },
    {
      name: "Logs",
      path: "/logs",
      icon: <ClipboardList size={20} />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <Activity size={20} />,
    },
  ];

  return (
    <aside
      className={`
        relative
        h-screen
        transition-all
        duration-300
        border-r
        border-white/10
        bg-white/10
        backdrop-blur-2xl
        shadow-2xl
        overflow-hidden
        ${
          collapsed ? "w-[90px]" : "w-[280px]"
        }
      `}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-52 h-52 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Top */}
      <div className="relative z-10 flex items-center justify-between px-5 py-6">
        {!collapsed && (
          <div>
            <h1 className="text-2xl font-black tracking-wide text-white">
              ERP SaaS
            </h1>

            <div className="flex items-center gap-2 mt-1">
              <Sparkles size={14} className="text-cyan-300" />
              <p className="text-xs text-gray-300">
                Multi-Tenant Platform
              </p>
            </div>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            p-2
            rounded-xl
            bg-white/10
            hover:bg-white/20
            text-white
            transition
          "
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>
      </div>

      {/* Company Card */}
      {!collapsed && (
        <div className="relative z-10 px-4 mb-6">
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-gradient-to-r
              from-indigo-500/20
              to-cyan-500/20
              p-4
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  h-12
                  w-12
                  rounded-xl
                  bg-gradient-to-br
                  from-indigo-500
                  to-cyan-500
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                  shadow-lg
                "
              >
                A
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  Acme Corp
                </h3>

                <p className="text-xs text-gray-300">
                  Enterprise Plan
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="relative z-10 px-3 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `
              group
              flex
              items-center
              gap-4
              px-4
              py-3
              rounded-2xl
              transition-all
              duration-300
              ${
                isActive
                  ? `
                    bg-gradient-to-r
                    from-indigo-500
                    to-cyan-500
                    text-white
                    shadow-lg
                    shadow-cyan-500/20
                  `
                  : `
                    text-gray-300
                    hover:bg-white/10
                    hover:text-white
                  `
              }
            `
            }
          >
            <span>{link.icon}</span>

            {!collapsed && (
              <span className="font-medium tracking-wide">
                {link.name}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-5 left-0 w-full px-4 z-10">
        {!collapsed ? (
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-4
              backdrop-blur-xl
            "
          >
            <p className="text-sm text-white font-semibold">
              Upgrade to Pro
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Unlock advanced analytics & AI insights.
            </p>

            <button
              className="
                mt-4
                w-full
                rounded-xl
                bg-gradient-to-r
                from-indigo-500
                to-cyan-500
                py-2
                text-sm
                font-semibold
                text-white
                hover:scale-[1.02]
                transition
              "
            >
              Upgrade
            </button>
          </div>
        ) : (
          <div
            className="
              h-12
              w-12
              mx-auto
              rounded-2xl
              bg-gradient-to-r
              from-indigo-500
              to-cyan-500
              flex
              items-center
              justify-center
              text-white
              shadow-lg
            "
          >
            ⭐
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;