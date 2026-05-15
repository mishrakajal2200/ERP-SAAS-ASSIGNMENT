// src/pages/projects/ProjectList.jsx

import { useEffect, useMemo, useState } from "react";
import {
  getProjects,
  deleteProject,
} from "../../services/projectService";
import { useNavigate } from "react-router-dom";

import {
  FiFolder,
  FiPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiArrowRight,
  FiActivity,
  FiClock,
} from "react-icons/fi";

const ProjectList = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const res = await getProjects();

      setProjects(res.data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      project.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [projects, search]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProject(id);

      setProjects((prev) =>
        prev.filter((project) => project._id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Failed to delete project");
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-indigo-300 mb-2">
            Multi Tenant ERP
          </p>

          <h1 className="text-4xl font-black bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
            Project Management
          </h1>

          <p className="text-slate-400 mt-2">
            Manage all company projects in one place.
          </p>
        </div>

        <button
          onClick={() => navigate("/projects/create")}
          className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.03] transition-all duration-300 shadow-2xl shadow-indigo-900/40"
        >
          <FiPlus className="text-lg" />

          <span className="font-semibold">Create Project</span>
        </button>
      </div>

      {/* Search + Stats */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-8">
        {/* Search */}
        <div className="xl:col-span-3 relative">
          <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              pl-14
              pr-5
              py-4
              rounded-3xl
              bg-white/10
              border
              border-white/10
              backdrop-blur-xl
              text-white
              placeholder:text-slate-400
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
              shadow-xl
            "
          />
        </div>

        {/* Stat Card */}
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-br
            from-indigo-500/20
            to-purple-500/10
            backdrop-blur-xl
            p-5
            shadow-2xl
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-300 text-sm">
                Total Projects
              </p>

              <h2 className="text-4xl font-black mt-2">
                {projects.length}
              </h2>
            </div>

            <div
              className="
                h-14
                w-14
                rounded-2xl
                bg-indigo-500/20
                flex
                items-center
                justify-center
                text-indigo-300
                text-2xl
              "
            >
              <FiFolder />
            </div>
          </div>
        </div>
      </div>

      {/* Project Grid */}
      {loading ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
                h-64
                rounded-3xl
                bg-white/10
                animate-pulse
                border
                border-white/10
              "
            />
          ))}
        </div>
      ) : filteredProjects.length === 0 ? (
        <div
          className="
            rounded-3xl
            border
            border-dashed
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-16
            text-center
          "
        >
          <div
            className="
              h-20
              w-20
              mx-auto
              rounded-3xl
              bg-indigo-500/20
              flex
              items-center
              justify-center
              text-4xl
              text-indigo-300
              mb-5
            "
          >
            <FiFolder />
          </div>

          <h2 className="text-2xl font-bold mb-2">
            No Projects Found
          </h2>

          <p className="text-slate-400 mb-8">
            Create your first project to start managing work.
          </p>

          <button
            onClick={() => navigate("/projects/create")}
            className="
              px-6
              py-3
              rounded-2xl
              bg-gradient-to-r
              from-indigo-600
              to-purple-600
              font-semibold
              shadow-xl
            "
          >
            Create Project
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/10
                backdrop-blur-2xl
                p-6
                shadow-2xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  top-0
                  right-0
                  h-40
                  w-40
                  bg-indigo-500/20
                  blur-3xl
                  rounded-full
                "
              />

              {/* Header */}
              <div className="relative z-10 flex items-start justify-between">
                <div
                  className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-gradient-to-br
                    from-indigo-500/20
                    to-purple-500/20
                    flex
                    items-center
                    justify-center
                    text-2xl
                    text-indigo-300
                    border
                    border-white/10
                  "
                >
                  <FiFolder />
                </div>

                <span
                  className="
                    px-4
                    py-1.5
                    rounded-full
                    text-xs
                    font-semibold
                    bg-emerald-500/20
                    text-emerald-300
                    border
                    border-emerald-400/20
                  "
                >
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-6">
                <h2 className="text-2xl font-bold mb-3 line-clamp-1">
                  {project.name}
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Enterprise SaaS project workspace for managing
                  operations, tasks, analytics, and company data.
                </p>
              </div>

              {/* Meta */}
              <div className="relative z-10 mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <FiClock className="text-indigo-300" />

                  <span>
                    {new Date(
                      project.createdAt
                    ).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <FiActivity className="text-purple-300" />

                  <span>Tenant Protected Workspace</span>
                </div>
              </div>

              {/* Actions */}
              <div className="relative z-10 mt-8 flex items-center justify-between">
                <button
                  onClick={() =>
                    navigate(`/projects/${project._id}`)
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    text-indigo-300
                    hover:text-white
                    transition
                    font-semibold
                  "
                >
                  View Details

                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      navigate(`/projects/edit/${project._id}`)
                    }
                    className="
                      h-11
                      w-11
                      rounded-2xl
                      bg-white/10
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      hover:bg-indigo-500/20
                      transition
                    "
                  >
                    <FiEdit2 />
                  </button>

                  <button
                    onClick={() => handleDelete(project._id)}
                    className="
                      h-11
                      w-11
                      rounded-2xl
                      bg-red-500/10
                      border
                      border-red-500/20
                      flex
                      items-center
                      justify-center
                      hover:bg-red-500/20
                      transition
                    "
                  >
                    <FiTrash2 className="text-red-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;