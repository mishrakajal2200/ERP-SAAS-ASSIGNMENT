// src/pages/tasks/TaskBoard.jsx

import { useEffect, useMemo, useState } from "react";
import { getTasks } from "../../services/taskService";

import {
  FiClipboard,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiCalendar,
  FiUser,
  FiActivity,
} from "react-icons/fi";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch Tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await getTasks();

        setTasks(res.data.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // 🔥 Columns
  const columns = useMemo(() => {
    return {
      todo: tasks.filter((t) => t.status === "todo"),

      inprogress: tasks.filter(
        (t) =>
          t.status === "inprogress" ||
          t.status === "in-progress"
      ),

      done: tasks.filter(
        (t) =>
          t.status === "done" ||
          t.status === "completed"
      ),
    };
  }, [tasks]);

  // 🔥 Column Config
  const columnConfig = {
    todo: {
      title: "Todo",
      icon: <FiClipboard />,
      color: "from-slate-500/20 to-slate-700/10",
      border: "border-slate-400/20",
      badge: "bg-slate-500/20 text-slate-300",
    },

    inprogress: {
      title: "In Progress",
      icon: <FiClock />,
      color: "from-amber-500/20 to-orange-600/10",
      border: "border-amber-400/20",
      badge: "bg-amber-500/20 text-amber-300",
    },

    done: {
      title: "Completed",
      icon: <FiCheckCircle />,
      color: "from-emerald-500/20 to-green-600/10",
      border: "border-emerald-400/20",
      badge: "bg-emerald-500/20 text-emerald-300",
    },
  };

  // 🔥 Priority Style
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-300 border-red-500/20";

      case "medium":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/20";

      default:
        return "bg-sky-500/20 text-sky-300 border-sky-500/20";
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <p className="uppercase tracking-[0.25em] text-sm text-indigo-300 mb-3">
            Multi Tenant ERP
          </p>

          <h1 className="text-4xl font-black bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
            Task Management Board
          </h1>

          <p className="text-slate-400 mt-3 max-w-2xl">
            Monitor workflow progress, organize tasks, and
            collaborate efficiently across projects.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-4 text-center">
            <p className="text-slate-400 text-sm">Todo</p>

            <h3 className="text-2xl font-bold mt-1">
              {columns.todo.length}
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-4 text-center">
            <p className="text-slate-400 text-sm">Progress</p>

            <h3 className="text-2xl font-bold mt-1">
              {columns.inprogress.length}
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-4 text-center">
            <p className="text-slate-400 text-sm">Done</p>

            <h3 className="text-2xl font-bold mt-1">
              {columns.done.length}
            </h3>
          </div>
        </div>
      </div>

      {/* Board */}
      {loading ? (
        <div className="grid lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="
                h-[600px]
                rounded-3xl
                bg-white/10
                animate-pulse
                border
                border-white/10
              "
            />
          ))}
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {Object.keys(columns).map((colKey) => {
            const config = columnConfig[colKey];

            return (
              <div
                key={colKey}
                className={`
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  ${config.border}
                  bg-gradient-to-br
                  ${config.color}
                  backdrop-blur-2xl
                  shadow-2xl
                  min-h-[700px]
                `}
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 h-60 w-60 bg-white/5 blur-3xl rounded-full" />

                {/* Header */}
                <div className="relative z-10 p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          h-14
                          w-14
                          rounded-2xl
                          bg-white/10
                          border
                          border-white/10
                          flex
                          items-center
                          justify-center
                          text-2xl
                        "
                      >
                        {config.icon}
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold">
                          {config.title}
                        </h2>

                        <p className="text-slate-400 text-sm mt-1">
                          {columns[colKey].length} Tasks
                        </p>
                      </div>
                    </div>

                    <div
                      className={`
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-semibold
                        border
                        border-white/10
                        ${config.badge}
                      `}
                    >
                      {columns[colKey].length}
                    </div>
                  </div>
                </div>

                {/* Tasks */}
                <div className="relative z-10 p-5 space-y-5">
                  {columns[colKey].length === 0 ? (
                    <div
                      className="
                        rounded-2xl
                        border
                        border-dashed
                        border-white/10
                        bg-white/5
                        p-10
                        text-center
                      "
                    >
                      <FiActivity className="mx-auto text-4xl text-slate-500 mb-4" />

                      <h3 className="text-lg font-semibold mb-2">
                        No Tasks
                      </h3>

                      <p className="text-slate-400 text-sm">
                        No tasks available in this column.
                      </p>
                    </div>
                  ) : (
                    columns[colKey].map((task) => (
                      <div
                        key={task._id}
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-3xl
                          border
                          border-white/10
                          bg-white/10
                          backdrop-blur-xl
                          p-5
                          shadow-xl
                          hover:-translate-y-1
                          transition-all
                          duration-300
                        "
                      >
                        {/* Glow */}
                        <div className="absolute top-0 right-0 h-32 w-32 bg-indigo-500/10 blur-2xl rounded-full" />

                        {/* Top */}
                        <div className="relative z-10 flex items-start justify-between gap-3">
                          <h3 className="text-lg font-bold leading-snug">
                            {task.title}
                          </h3>

                          <span
                            className={`
                              px-3
                              py-1
                              rounded-full
                              text-xs
                              font-semibold
                              border
                              whitespace-nowrap
                              ${getPriorityStyle(task.priority)}
                            `}
                          >
                            {task.priority || "low"}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="relative z-10 text-slate-400 text-sm leading-relaxed mt-4">
                          {task.description ||
                            "No description available for this task."}
                        </p>

                        {/* Divider */}
                        <div className="border-t border-white/10 my-5" />

                        {/* Meta */}
                        <div className="relative z-10 space-y-3 text-sm text-slate-300">
                          <div className="flex items-center gap-3">
                            <FiCalendar className="text-indigo-300" />

                            <span>
                              {task.dueDate
                                ? new Date(
                                    task.dueDate
                                  ).toLocaleDateString()
                                : "No due date"}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <FiUser className="text-purple-300" />

                            <span>
                              {task.assignedTo?.name ||
                                "Unassigned"}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TaskBoard;