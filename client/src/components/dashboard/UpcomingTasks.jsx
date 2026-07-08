import {
  CalendarDays,
  Flag,
  CircleCheckBig,
  Clock3,
  FolderKanban,
  User,
} from "lucide-react";

import { useSelector } from "react-redux";

const UpcomingTasks = () => {
  const { dashboard, loading } = useSelector(
    (state) => state.dashboard
  );

  const tasks =
    dashboard?.recentTasks || [];

  const priorityColor = {
    High: "text-red-400 bg-red-500/10",
    Medium: "text-yellow-400 bg-yellow-500/10",
    Low: "text-green-400 bg-green-500/10",
  };

  const statusColor = {
    Pending: "text-orange-400",
    "In Progress": "text-cyan-400",
    Completed: "text-green-400",
  };

  if (loading) {
    return (
      <section className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl animate-pulse h-[520px]" />
    );
  }

  return (
    <section
      className="
      bg-slate-900
      rounded-3xl
      p-6
      border
      border-slate-800
      shadow-xl
      "
    >
      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Upcoming Tasks
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Tasks due soon
          </p>

        </div>

        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

          <CalendarDays className="text-cyan-400" />

        </div>

      </div>

      {/* Empty State */}

      {tasks.length === 0 ? (
        <div className="flex justify-center items-center h-64">

          <p className="text-slate-400">

            No upcoming tasks found.

          </p>

        </div>
      ) : (
        <div className="space-y-5">

          {tasks.map((task) => (
            <div
              key={task._id}
              className="
              bg-slate-800
              hover:bg-slate-700
              transition-all
              duration-300
              rounded-2xl
              p-5
              border
              border-slate-700
              "
            >
              {/* Title */}

              <div className="flex justify-between items-start">

                <div className="flex gap-3">

                  <CircleCheckBig
                    size={22}
                    className={
                      task.status === "Completed"
                        ? "text-green-400 mt-1"
                        : "text-cyan-400 mt-1"
                    }
                  />

                  <div>

                    <h3 className="text-white font-semibold text-lg">

                      {task.title}

                    </h3>

                    {task.description && (
                      <p className="text-slate-400 text-sm mt-1 line-clamp-2">

                        {task.description}

                      </p>
                    )}

                  </div>

                </div>

                {/* Priority */}

                <span
                  className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                  flex
                  items-center
                  gap-1
                  ${
                    priorityColor[
                      task.priority
                    ] ||
                    "text-slate-300 bg-slate-700"
                  }
                `}
                >

                  <Flag size={13} />

                  {task.priority}

                </span>

              </div>

              {/* Bottom */}

              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">

                {/* Project */}

                <div className="flex items-center gap-2 text-slate-300">

                  <FolderKanban
                    size={16}
                  />

                  <span>

                    {task.project?.name ||
                      "No Project"}

                  </span>

                </div>

                {/* Assigned */}

                <div className="flex items-center gap-2 text-slate-300">

                  <User size={16} />

                  <span>

                    {task.assignedTo?.name ||
                      "Unassigned"}

                  </span>

                </div>

                {/* Due Date */}

                <div className="flex items-center gap-2 text-slate-300">

                  <Clock3
                    size={16}
                  />

                  <span>

                    {task.dueDate
                      ? new Date(
                          task.dueDate
                        ).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )
                      : "No Due Date"}

                  </span>

                </div>

              </div>

              {/* Status */}

              <div className="mt-5 flex justify-end">

                <span
                  className={`
                  text-sm
                  font-medium
                  ${
                    statusColor[
                      task.status
                    ] ||
                    "text-slate-300"
                  }
                `}
                >

                  {task.status}

                </span>

              </div>

            </div>
          ))}

        </div>
      )}
    </section>
  );
};

export default UpcomingTasks;