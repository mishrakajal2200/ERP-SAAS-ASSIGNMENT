// src/pages/projects/ProjectDetails.jsx

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  FolderKanban,
  CalendarDays,
  Activity,
  Building2,
  FileText,
  PencilLine,
  ArrowLeft,
  Sparkles,
  Layers3,
} from "lucide-react";

import { getProjectById } from "../../services/projectService";

const ProjectDetails = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // FETCH PROJECT
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await getProjectById(id);
        setProject(res.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  // STATUS COLORS
  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "active":
        return "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";

      case "pending":
        return "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30";

      case "completed":
        return "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30";

      default:
        return "bg-gray-500/20 text-gray-300 border border-gray-500/30";
    }
  };

  // LOADING UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />

          <p className="text-gray-400 text-lg">
            Loading Project Details...
          </p>
        </div>
      </div>
    );
  }

  // EMPTY STATE
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-2">
            Project Not Found
          </h2>

          <p className="text-gray-400">
            Unable to fetch project details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 lg:p-10 text-white">
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-3xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <FolderKanban size={30} className="text-indigo-300" />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl lg:text-4xl font-bold">
                {project.name}
              </h1>

              <div
                className={`px-4 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                  project.status
                )}`}
              >
                {project.status}
              </div>
            </div>

            <p className="text-gray-400">
              Enterprise Multi-Tenant ERP Project Workspace
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/projects"
            className="
              flex items-center gap-2
              px-5 py-3
              rounded-2xl
              bg-white/5
              border border-white/10
              hover:bg-white/10
              transition-all duration-300
              backdrop-blur-xl
            "
          >
            <ArrowLeft size={18} />

            Back
          </Link>

          <Link
            to={`/projects/edit/${project._id}`}
            className="
              flex items-center gap-2
              px-6 py-3
              rounded-2xl
              bg-gradient-to-r
              from-indigo-500
              to-violet-600
              hover:from-indigo-400
              hover:to-violet-500
              transition-all duration-300
              shadow-[0_10px_40px_rgba(99,102,241,0.45)]
            "
          >
            <PencilLine size={18} />

            Edit Project
          </Link>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid xl:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="xl:col-span-2 space-y-8">
          {/* PROJECT OVERVIEW */}
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-8
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            "
          >
            {/* GLOW */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                  <Sparkles
                    size={22}
                    className="text-indigo-300"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    Project Overview
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Detailed information about this project.
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText
                    size={18}
                    className="text-indigo-300"
                  />

                  <h3 className="font-semibold text-lg">
                    Description
                  </h3>
                </div>

                <p className="text-gray-300 leading-8">
                  {project.description ||
                    "No project description available."}
                </p>
              </div>
            </div>
          </div>

          {/* ACTIVITY */}
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-8
            "
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <Activity
                  size={20}
                  className="text-emerald-300"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Project Activity
                </h2>

                <p className="text-gray-400 text-sm">
                  Latest project workspace activity
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                "Project created successfully",
                "Admin updated project status",
                "Tenant workspace synced",
              ].map((activity, index) => (
                <div
                  key={index}
                  className="
                    flex items-center justify-between
                    p-5
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    hover:bg-white/10
                    transition-all duration-300
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-indigo-400" />

                    <p className="text-gray-300">{activity}</p>
                  </div>

                  <span className="text-xs text-gray-500">
                    Just now
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          {/* INFO CARD */}
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-8
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            "
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                <Layers3
                  size={20}
                  className="text-violet-300"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Project Info
                </h2>

                <p className="text-gray-400 text-sm">
                  Metadata & tenant details
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* STATUS */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-gray-400 text-sm mb-2">
                  Status
                </p>

                <div
                  className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${getStatusStyle(
                    project.status
                  )}`}
                >
                  {project.status}
                </div>
              </div>

              {/* CREATED */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <CalendarDays
                    size={18}
                    className="text-indigo-300"
                  />

                  <p className="text-gray-400 text-sm">
                    Created At
                  </p>
                </div>

                <p className="font-semibold text-lg">
                  {new Date(
                    project.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>

              {/* COMPANY */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Building2
                    size={18}
                    className="text-emerald-300"
                  />

                  <p className="text-gray-400 text-sm">
                    Company ID
                  </p>
                </div>

                <p className="font-semibold text-sm break-all text-gray-300">
                  {project.companyId}
                </p>
              </div>
            </div>
          </div>

          {/* QUICK STATS */}
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-gradient-to-br
              from-indigo-500/10
              to-violet-500/10
              backdrop-blur-2xl
              p-8
            "
          >
            <h2 className="text-xl font-bold mb-6">
              Workspace Insights
            </h2>

            <div className="space-y-5">
              {[
                {
                  title: "Tasks",
                  value: "24",
                },
                {
                  title: "Team Members",
                  value: "8",
                },
                {
                  title: "Completion",
                  value: "72%",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex items-center justify-between
                    p-5
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                  "
                >
                  <p className="text-gray-300">
                    {item.title}
                  </p>

                  <h3 className="text-2xl font-bold">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;