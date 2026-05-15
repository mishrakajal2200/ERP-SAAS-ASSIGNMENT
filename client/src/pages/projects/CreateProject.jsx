// src/pages/projects/CreateProject.jsx

import { useState } from "react";
import {
  FolderPlus,
  Layers3,
  FileText,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { createProject } from "../../services/projectService";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "active",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createProject(formData);

      alert("Project Created Successfully 🚀");

      setFormData({
        name: "",
        description: "",
        status: "active",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to create project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white p-6 lg:p-10">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
              <FolderPlus className="text-indigo-300" size={24} />
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                Create New Project
              </h1>

              <p className="text-gray-400 mt-1">
                Build and manage projects across your multi-tenant ERP platform.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-xl">
          <Sparkles size={18} className="text-yellow-300" />

          <p className="text-sm text-gray-300">
            Senior-level SaaS Project Management UI
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          {/* Gradient Blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full" />

          <div className="relative z-10 p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* PROJECT NAME */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">
                  Project Name
                </label>

                <div className="relative">
                  <FolderPlus
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter project name"
                    required
                    className="
                      w-full
                      pl-12
                      pr-4
                      py-4
                      rounded-2xl
                      bg-white/5
                      border border-white/10
                      text-white
                      placeholder:text-gray-500
                      outline-none
                      transition-all duration-300
                      focus:border-indigo-400
                      focus:bg-white/10
                      focus:ring-4
                      focus:ring-indigo-500/20
                    "
                  />
                </div>
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">
                  Project Description
                </label>

                <div className="relative">
                  <FileText
                    size={18}
                    className="absolute left-4 top-5 text-gray-400"
                  />

                  <textarea
                    rows="5"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your project..."
                    className="
                      w-full
                      pl-12
                      pr-4
                      py-4
                      rounded-2xl
                      bg-white/5
                      border border-white/10
                      text-white
                      placeholder:text-gray-500
                      outline-none
                      transition-all duration-300
                      focus:border-indigo-400
                      focus:bg-white/10
                      focus:ring-4
                      focus:ring-indigo-500/20
                      resize-none
                    "
                  />
                </div>
              </div>

              {/* STATUS */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">
                  Project Status
                </label>

                <div className="relative">
                  <Layers3
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="
                      w-full
                      pl-12
                      pr-4
                      py-4
                      rounded-2xl
                      bg-white/5
                      border border-white/10
                      text-white
                      outline-none
                      transition-all duration-300
                      focus:border-indigo-400
                      focus:bg-white/10
                      focus:ring-4
                      focus:ring-indigo-500/20
                    "
                  >
                    <option value="active" className="bg-gray-900">
                      Active
                    </option>

                    <option value="completed" className="bg-gray-900">
                      Completed
                    </option>

                    <option value="pending" className="bg-gray-900">
                      Pending
                    </option>
                  </select>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center justify-between pt-4">
                <div className="text-sm text-gray-400">
                  Multi-Tenant ERP • Project Workspace
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    relative
                    overflow-hidden
                    px-8
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-indigo-500
                    to-violet-600
                    hover:from-indigo-400
                    hover:to-violet-500
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    shadow-[0_10px_40px_rgba(99,102,241,0.45)]
                    disabled:opacity-50
                  "
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? "Creating..." : "Create Project"}

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>

                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {[
            {
              title: "Tenant Isolated",
              desc: "Projects remain isolated per company.",
            },
            {
              title: "Secure Access",
              desc: "JWT + role-based access control enabled.",
            },
            {
              title: "Scalable SaaS",
              desc: "Designed for enterprise multi-tenant systems.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-5
                hover:bg-white/10
                transition-all
                duration-300
              "
            >
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateProject;