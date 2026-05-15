// src/pages/tasks/TaskList.jsx

import { useEffect, useMemo, useState } from "react";
import {
  getTasks,
} from "../../services/taskService";

import {
  FiSearch,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiPlus,
  FiFilter,
} from "react-icons/fi";

import {
  MdOutlineTaskAlt,
} from "react-icons/md";

import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await getTasks();
        setTasks(res.data.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchSearch =
        task.title?.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "all"
          ? true
          : task.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [tasks, search, statusFilter]);

  const stats = {
    total: tasks.length,
    todo: tasks.filter((t) => t.status === "todo").length,
    inprogress: tasks.filter((t) => t.status === "inprogress").length,
    done: tasks.filter((t) => t.status === "done").length,
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "done":
        return {
          bg: "bg-emerald-500/15",
          text: "text-emerald-400",
          border: "border-emerald-500/30",
          icon: <FiCheckCircle />,
          label: "Completed",
        };

      case "inprogress":
        return {
          bg: "bg-amber-500/15",
          text: "text-amber-400",
          border: "border-amber-500/30",
          icon: <FiClock />,
          label: "In Progress",
        };

      default:
        return {
          bg: "bg-rose-500/15",
          text: "text-rose-400",
          border: "border-rose-500/30",
          icon: <FiAlertCircle />,
          label: "Pending",
        };
    }
  };

  return (
    <div className="min-h-screen text-white p-6 md:p-8">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
        <div>
          <p className="text-indigo-300 text-sm uppercase tracking-widest mb-2">
            Workspace Tasks
          </p>

          <h1 className="text-4xl font-black">
            Task Management
          </h1>

          <p className="text-gray-400 mt-3 max-w-2xl">
            Track tasks, monitor progress, manage priorities,
            and streamline productivity across your ERP workspace.
          </p>
        </div>

        <button
          onClick={() => navigate("/tasks/create")}
          className="
            flex items-center gap-2
            px-5 py-3
            rounded-2xl
            bg-gradient-to-r from-indigo-500 to-purple-600
            hover:scale-105
            transition-all duration-300
            shadow-xl shadow-indigo-500/20
            font-semibold
          "
        >
          <FiPlus />
          Create Task
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {/* TOTAL */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-2xl mb-5">
              <MdOutlineTaskAlt />
            </div>

            <p className="text-gray-400 text-sm">Total Tasks</p>

            <h2 className="text-4xl font-black mt-2">
              {stats.total}
            </h2>
          </div>
        </div>

        {/* TODO */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/20 text-rose-300 flex items-center justify-center text-2xl mb-5">
              <FiAlertCircle />
            </div>

            <p className="text-gray-400 text-sm">Pending</p>

            <h2 className="text-4xl font-black mt-2">
              {stats.todo}
            </h2>
          </div>
        </div>

        {/* IN PROGRESS */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center text-2xl mb-5">
              <FiClock />
            </div>

            <p className="text-gray-400 text-sm">In Progress</p>

            <h2 className="text-4xl font-black mt-2">
              {stats.inprogress}
            </h2>
          </div>
        </div>

        {/* DONE */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-2xl mb-5">
              <FiCheckCircle />
            </div>

            <p className="text-gray-400 text-sm">Completed</p>

            <h2 className="text-4xl font-black mt-2">
              {stats.done}
            </h2>
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div
        className="
          mb-8
          bg-white/5
          border border-white/10
          backdrop-blur-xl
          rounded-3xl
          p-5
          shadow-2xl
        "
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          {/* SEARCH */}
          <div className="relative w-full lg:max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                pl-12 pr-4 py-3
                rounded-2xl
                bg-white/5
                border border-white/10
                text-white
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500/40
              "
            />
          </div>

          {/* FILTER */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-gray-400">
              <FiFilter />
              <span className="text-sm">Filter</span>
            </div>

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
              className="
                px-4 py-3
                rounded-2xl
                bg-[#111827]
                border border-white/10
                text-white
                focus:outline-none
              "
            >
              <option value="all">All Tasks</option>
              <option value="todo">Pending</option>
              <option value="inprogress">
                In Progress
              </option>
              <option value="done">Completed</option>
            </select>
          </div>
        </div>
      </div>

      {/* TASK GRID */}
      {filteredTasks.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
          {filteredTasks.map((task) => {
            const style = getStatusStyle(task.status);

            return (
              <div
                key={task._id}
                className="
                  relative overflow-hidden
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                  shadow-2xl
                  hover:-translate-y-1
                  hover:border-indigo-500/30
                  transition-all duration-300
                "
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-500/10 blur-3xl rounded-full" />

                <div className="relative z-10">
                  {/* TOP */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {task.title}
                      </h3>

                      <p className="text-gray-400 text-sm">
                        Task ID: {task._id.slice(0, 10)}...
                      </p>
                    </div>

                    <div
                      className={`
                        px-3 py-2 rounded-xl border
                        flex items-center gap-2 text-sm
                        ${style.bg}
                        ${style.text}
                        ${style.border}
                      `}
                    >
                      {style.icon}
                      {style.label}
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="mb-6">
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {task.description ||
                        "No task description available for this task."}
                    </p>
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between pt-5 border-t border-white/10">
                    <div>
                      <p className="text-xs text-gray-500">
                        Created
                      </p>

                      <p className="text-sm text-gray-300 mt-1">
                        {new Date(
                          task.createdAt
                        ).toLocaleDateString()}
                      </p>
                    </div>

                    <button
                      className="
                        px-4 py-2
                        rounded-xl
                        bg-indigo-500/15
                        hover:bg-indigo-500/25
                        border border-indigo-500/20
                        text-indigo-300
                        text-sm
                        font-medium
                        transition-all
                      "
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className="
            flex flex-col items-center justify-center
            py-24
            rounded-3xl
            border border-dashed border-white/10
            bg-white/5
            backdrop-blur-xl
          "
        >
          <div className="w-20 h-20 rounded-full bg-indigo-500/10 flex items-center justify-center text-4xl text-indigo-300 mb-6">
            <MdOutlineTaskAlt />
          </div>

          <h3 className="text-2xl font-bold mb-3">
            No Tasks Found
          </h3>

          <p className="text-gray-400 text-center max-w-md">
            No tasks matched your current filters.
            Try searching with different keywords or
            create a new task.
          </p>
        </div>
      )}
    </div>
  );
};

export default TaskList;