import {
  FolderKanban,
  Clock3,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { useSelector } from "react-redux";

const RecentProjects = () => {
  const { dashboard } = useSelector((state) => state.dashboard);

  const projects = dashboard?.recentProjects || [];

  const statusIcon = {
  completed: (
    <CheckCircle2
      size={18}
      className="text-green-500"
    />
  ),

  active: (
    <Clock3
      size={18}
      className="text-blue-500"
    />
  ),

  "on-hold": (
    <AlertCircle
      size={18}
      className="text-yellow-500"
    />
  ),
};

  return (
    <section className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div className="flex items-center gap-3">

          <FolderKanban className="text-cyan-400" />

          <h2 className="text-2xl font-bold text-white">
            Recent Projects
          </h2>

        </div>

        <button className="text-cyan-400 hover:text-cyan-300">
          View All
        </button>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-800 text-slate-400">

              <th className="text-left py-3">
                Project
              </th>

              <th className="text-left py-3">
                Manager
              </th>

              <th className="text-left py-3">
                Progress
              </th>

              <th className="text-left py-3">
                Status
              </th>

              <th className="text-left py-3">
                Due Date
              </th>

            </tr>

          </thead>

          <tbody>

            {projects.length > 0 ? (

              projects.map((project) => (

                <tr
                  key={project._id}
                  className="border-b border-slate-800 hover:bg-slate-800/40 transition"
                >

                  <td className="py-5 text-white font-medium">
                    {project.name}
                  </td>

                  <td className="text-slate-300">
                    {project.managerId?.name || "N/A"}
                  </td>

                  <td>

                    <div className="w-40 bg-slate-700 rounded-full h-2">

                      <div
                        className={`h-2 rounded-full ${
                          (project.progress ?? 0) === 100
                            ? "bg-green-500"
                            : (project.progress ?? 0) >= 70
                            ? "bg-cyan-500"
                            : "bg-yellow-500"
                        }`}
                        style={{
                          width: `${project.progress ?? 0}%`,
                        }}
                      />

                    </div>

                    <p className="text-xs text-slate-400 mt-2">
                      {project.progress}%
                    </p>

                  </td>

                  <td>

                    <div className="flex items-center gap-2">

                      {statusIcon[project.status]}

                      <span className="text-slate-300">
                        {project.status
  ?.replace("-", " ")
  .replace(/\b\w/g, (c) => c.toUpperCase())}
                      </span>

                    </div>

                  </td>

                  <td className="text-slate-400">
                    {project.dueDate
  ? new Date(project.dueDate).toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    )
  : "No Due Date"}
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan={5}
                  className="py-8 text-center text-slate-400"
                >
                  No Projects Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div className="mt-6 flex justify-between text-sm text-slate-400">

        <span>
          Total Projects :
          <span className="text-cyan-400 ml-2 font-semibold">
            {projects.length}
          </span>
        </span>

        <span>
          Completed :
          <span className="text-green-400 ml-2 font-semibold">
            {
              projects.filter(
  (project) => project.status === "completed"
).length
            }
          </span>
        </span>

      </div>

    </section>
  );
};

export default RecentProjects;