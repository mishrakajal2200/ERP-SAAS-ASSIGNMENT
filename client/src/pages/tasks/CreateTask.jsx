// src/pages/tasks/CreateTask.jsx

import { useEffect, useState } from "react";
import { createTask } from "../../services/taskService";
import { getProjects } from "../../services/projectService";

import {
  FiClipboard,
  FiFlag,
  FiCalendar,
  FiFolder,
  FiUser,
  FiCheckCircle,
} from "react-icons/fi";

const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    status: "todo",
    dueDate: "",
    projectId: "",
  });

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔥 Fetch Projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        setProjects(res.data.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  // 🔥 Handle Change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 🔥 Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createTask(formData);

      alert("Task Created Successfully");

      setFormData({
        title: "",
        description: "",
        priority: "medium",
        status: "todo",
        dueDate: "",
        projectId: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="mb-10">
        <p className="uppercase tracking-[0.25em] text-sm text-indigo-300 mb-3">
          Multi Tenant ERP
        </p>

        <h1 className="text-4xl font-black bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
          Create New Task
        </h1>

        <p className="text-slate-400 mt-3 max-w-2xl">
          Organize team workflows, assign priorities, and
          manage project execution efficiently.
        </p>
      </div>

      {/* Form Container */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/10
          backdrop-blur-2xl
          shadow-2xl
          p-8
        "
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 h-72 w-72 bg-indigo-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 h-72 w-72 bg-purple-500/20 blur-3xl rounded-full" />

        <form
          onSubmit={handleSubmit}
          className="relative z-10 space-y-7"
        >
          {/* Title */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3">
              <FiClipboard />
              Task Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter task title..."
              value={formData.title}
              onChange={handleChange}
              required
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/10
                px-5
                py-4
                text-white
                placeholder:text-slate-400
                outline-none
                focus:ring-2
                focus:ring-indigo-500
                backdrop-blur-xl
              "
            />
          </div>

          {/* Description */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3">
              <FiClipboard />
              Description
            </label>

            <textarea
              rows={5}
              name="description"
              placeholder="Write task description..."
              value={formData.description}
              onChange={handleChange}
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/10
                px-5
                py-4
                text-white
                placeholder:text-slate-400
                outline-none
                focus:ring-2
                focus:ring-indigo-500
                backdrop-blur-xl
                resize-none
              "
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Priority */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3">
                <FiFlag />
                Priority
              </label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  px-5
                  py-4
                  text-white
                  outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                  backdrop-blur-xl
                "
              >
                <option className="bg-slate-900" value="low">
                  Low
                </option>

                <option className="bg-slate-900" value="medium">
                  Medium
                </option>

                <option className="bg-slate-900" value="high">
                  High
                </option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3">
                <FiCheckCircle />
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  px-5
                  py-4
                  text-white
                  outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                  backdrop-blur-xl
                "
              >
                <option className="bg-slate-900" value="todo">
                  Todo
                </option>

                <option className="bg-slate-900" value="in-progress">
                  In Progress
                </option>

                <option className="bg-slate-900" value="completed">
                  Completed
                </option>
              </select>
            </div>

            {/* Due Date */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3">
                <FiCalendar />
                Due Date
              </label>

              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  px-5
                  py-4
                  text-white
                  outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                  backdrop-blur-xl
                "
              />
            </div>

            {/* Project */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3">
                <FiFolder />
                Project
              </label>

              <select
                name="projectId"
                value={formData.projectId}
                onChange={handleChange}
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  px-5
                  py-4
                  text-white
                  outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                  backdrop-blur-xl
                "
              >
                <option className="bg-slate-900" value="">
                  Select Project
                </option>

                {projects.map((project) => (
                  <option
                    key={project._id}
                    value={project._id}
                    className="bg-slate-900"
                  >
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <FiUser className="text-indigo-300" />

              <span>
                Tenant-secured task creation workspace
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
                hover:scale-[1.03]
                transition-all
                duration-300
                shadow-2xl
                shadow-indigo-900/40
                font-semibold
                disabled:opacity-50
              "
            >
              {loading ? "Creating..." : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;