import {
  FolderPlus,
  UserPlus,
  Building2,
  ClipboardPlus,
  FileText,
  Settings,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const QuickActions = () => {
  const navigate = useNavigate();

  const { dashboard } = useSelector(
    (state) => state.dashboard
  );

  const user = dashboard?.user;

  const permissions = user?.permissions || [];

  const actions = [];

  // Create Project
  if (permissions.includes("create_project")) {
    actions.push({
      id: 1,
      title: "Create Project",
      icon: FolderPlus,
      path: "/projects/create",
      color: "bg-blue-500",
    });
  }

  // Add Employee
  if (permissions.includes("create_user")) {
    actions.push({
      id: 2,
      title: "Add Employee",
      icon: UserPlus,
      path: "/users/create",
      color: "bg-green-500",
    });
  }

  // Department
  if (permissions.includes("create_department")) {
    actions.push({
      id: 3,
      title: "Department",
      icon: Building2,
      path: "/departments/create",
      color: "bg-indigo-500",
    });
  }

  // Create Task
  if (permissions.includes("create_task")) {
    actions.push({
      id: 4,
      title: "Create Task",
      icon: ClipboardPlus,
      path: "/tasks/create",
      color: "bg-cyan-500",
    });
  }

  // Reports
  if (permissions.includes("view_reports")) {
    actions.push({
      id: 5,
      title: "Reports",
      icon: FileText,
      path: "/reports",
      color: "bg-yellow-500",
    });
  }

  // Settings
  if (permissions.includes("manage_settings")) {
    actions.push({
      id: 6,
      title: "Settings",
      icon: Settings,
      path: "/settings",
      color: "bg-purple-500",
    });
  }

  return (
    <section
      className="
      bg-slate-900
      rounded-3xl
      border
      border-slate-800
      p-8
      shadow-xl
      "
    >
      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="text-slate-400">
          Frequently Used Shortcuts
        </p>

      </div>

      {actions.length === 0 ? (
        <div className="text-center py-10 text-slate-400">
          No actions available.
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

          {actions.map((action) => {

            const Icon = action.icon;

            return (

              <button
                key={action.id}
                onClick={() => navigate(action.path)}
                className="
                bg-slate-800
                rounded-2xl
                p-6
                border
                border-slate-700
                hover:border-cyan-500
                hover:-translate-y-1
                transition-all
                duration-300
                "
              >

                <div
                  className={`
                    w-14
                    h-14
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    text-white
                    ${action.color}
                  `}
                >
                  <Icon size={26} />
                </div>

                <h3 className="text-white font-semibold mt-5">
                  {action.title}
                </h3>

              </button>

            );
          })}

        </div>
      )}
    </section>
  );
};

export default QuickActions;