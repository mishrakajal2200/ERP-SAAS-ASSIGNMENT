import { useState } from "react";
import {
  NavLink,
} from "react-router-dom";

import {
  HiOutlineMenuAlt2,
  HiOutlineHome,
  HiOutlineFolder,
  HiOutlineClipboardList,
  HiOutlineUsers,
  HiOutlineOfficeBuilding,
  HiOutlineChartBar,
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlineCalendar,
  HiOutlineDocumentReport,
} from "react-icons/hi";

const Sidebar = () => {
  const [collapsed, setCollapsed] =
    useState(false);

  const menu = [
    {
      title: "MAIN",
      items: [
        {
          name: "Dashboard",
          icon: <HiOutlineHome />,
          path: "/dashboard",
        },
        {
          name: "Analytics",
          icon: <HiOutlineChartBar />,
          path: "/analytics",
        },
        {
          name: "Reports",
          icon: <HiOutlineDocumentReport />,
          path: "/reports",
        },
        {
          name: "Calendar",
          icon: <HiOutlineCalendar />,
          path: "/calendar",
        },
      ],
    },

    {
      title: "WORKSPACE",
      items: [
        {
          name: "Projects",
          icon: <HiOutlineFolder />,
          path: "/projects",
        },
        {
          name: "Tasks",
          icon: <HiOutlineClipboardList />,
          path: "/tasks",
        },
        {
          name: "Departments",
          icon: <HiOutlineOfficeBuilding />,
          path: "/departments",
        },
        {
          name: "Users",
          icon: <HiOutlineUsers />,
          path: "/users",
        },
      ],
    },

    {
      title: "SYSTEM",
      items: [
        {
          name: "Notifications",
          icon: <HiOutlineBell />,
          path: "/notifications",
        },
        {
          name: "Settings",
          icon: <HiOutlineCog />,
          path: "/settings",
        },
      ],
    },
  ];

  return (
    <aside
      className={`
      bg-[#0F172A]
      text-white
      min-h-screen
      border-r border-white/10
      transition-all
      duration-300
      flex
      flex-col
      ${
        collapsed
          ? "w-20"
          : "w-72"
      }
      `}
    >
      {/* Header */}

      <div
        className="
        h-20
        flex
        items-center
        justify-between
        px-5
        border-b
        border-white/10
      "
      >
        {!collapsed && (
          <div>
            <h2 className="font-bold text-xl">
              ERP Nexus
            </h2>

            <p className="text-xs text-slate-400">
              Multi Tenant ERP
            </p>
          </div>
        )}

        <button
          onClick={() =>
            setCollapsed(
              !collapsed
            )
          }
          className="
          h-10
          w-10
          rounded-xl
          bg-white/5
          hover:bg-cyan-500
          transition
          flex
          items-center
          justify-center
          text-xl
        "
        >
          <HiOutlineMenuAlt2 />
        </button>
      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto p-4">
        {menu.map((section) => (
          <div
            key={section.title}
            className="mb-8"
          >
            {!collapsed && (
              <p
                className="
                text-[11px]
                uppercase
                tracking-widest
                text-slate-500
                mb-3
                px-3
              "
              >
                {section.title}
              </p>
            )}

            <div className="space-y-2">
              {section.items.map(
                (item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    title={
                      collapsed
                        ? item.name
                        : ""
                    }
                    className={({
                      isActive,
                    }) =>
                      `
                      flex
                      items-center
                      ${
                        collapsed
                          ? "justify-center"
                          : "gap-4"
                      }
                      px-4
                      py-3
                      rounded-xl
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? "bg-cyan-500 text-white shadow-lg"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }
                    `
                    }
                  >
                    <span className="text-xl">
                      {item.icon}
                    </span>

                    {!collapsed && (
                      <span className="font-medium">
                        {item.name}
                      </span>
                    )}
                  </NavLink>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}

      <div
        className="
        border-t
        border-white/10
        p-4
      "
      >
        <div
          className={`
          flex
          items-center
          ${
            collapsed
              ? "justify-center"
              : "gap-3"
          }
          `}
        >
          <img
            src="https://i.pravatar.cc/100"
            alt="user"
            className="h-11 w-11 rounded-full"
          />

          {!collapsed && (
            <div className="flex-1">
              <h4 className="font-semibold">
                Kajal Mishra
              </h4>

              <p className="text-xs text-slate-400">
                Super Admin
              </p>
            </div>
          )}

          {!collapsed && (
            <button
              className="
              h-10
              w-10
              rounded-xl
              hover:bg-red-500
              transition
              flex
              items-center
              justify-center
            "
            >
              <HiOutlineLogout />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;