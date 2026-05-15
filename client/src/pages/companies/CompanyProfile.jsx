// src/pages/companies/CompanyProfile.jsx

import { useEffect, useState } from "react";
import {
  Building2,
  CalendarDays,
  Globe,
  Users,
  ShieldCheck,
  Crown,
  Activity,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Pencil,
} from "lucide-react";

import { getCompany } from "../../services/companyService";

const CompanyProfile = () => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await getCompany();
        setCompany(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCompany();
  }, []);

  if (!company) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div
          className="
            h-16
            w-16
            rounded-full
            border-4
            border-cyan-500/20
            border-t-cyan-400
            animate-spin
          "
        />
      </div>
    );
  }

  const stats = [
    {
      title: "Employees",
      value: "124",
      icon: <Users size={20} />,
    },
    {
      title: "Projects",
      value: "32",
      icon: <Activity size={20} />,
    },
    {
      title: "Subscription",
      value: "Enterprise",
      icon: <Crown size={20} />,
    },
    {
      title: "Security",
      value: "Protected",
      icon: <ShieldCheck size={20} />,
    },
  ];

  return (
    <div className="space-y-8">
      {/* ================================= */}
      {/* HERO SECTION */}
      {/* ================================= */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-2xl
          shadow-[0_8px_32px_rgba(0,0,0,0.25)]
          p-8
        "
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>

        {/* Top Content */}
        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
          {/* Left */}
          <div className="flex items-start gap-6">
            {/* Company Logo */}
            <div
              className="
                h-28
                w-28
                rounded-3xl
                bg-gradient-to-br
                from-cyan-500
                to-indigo-600
                flex
                items-center
                justify-center
                text-white
                shadow-2xl
                shadow-cyan-500/20
              "
            >
              <Building2 size={44} />
            </div>

            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="
                    rounded-full
                    bg-emerald-500/10
                    border
                    border-emerald-500/20
                    px-4
                    py-1
                    text-xs
                    font-semibold
                    text-emerald-400
                  "
                >
                  ACTIVE TENANT
                </span>

                <span
                  className="
                    rounded-full
                    bg-cyan-500/10
                    border
                    border-cyan-500/20
                    px-4
                    py-1
                    text-xs
                    font-semibold
                    text-cyan-300
                  "
                >
                  ENTERPRISE PLAN
                </span>
              </div>

              <h1
                className="
                  text-4xl
                  md:text-5xl
                  font-black
                  tracking-tight
                  bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-indigo-300
                  bg-clip-text
                  text-transparent
                "
              >
                {company.name}
              </h1>

              <p className="text-gray-400 mt-3 max-w-2xl leading-relaxed">
                Manage employees, departments, projects, and enterprise
                workflows from a centralized multi-tenant ERP SaaS platform.
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  <span>
                    Created{" "}
                    {new Date(company.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Globe size={16} />
                  <span>Global Workspace</span>
                </div>

                <div className="flex items-center gap-2">
                  <Sparkles size={16} />
                  <span>Multi-Tenant Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-white/10
                bg-white/[0.06]
                px-6
                py-4
                text-white
                font-semibold
                hover:bg-white/[0.1]
                transition
              "
            >
              <Pencil size={18} />
              Edit Profile
            </button>

            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-indigo-500
                px-6
                py-4
                text-white
                font-semibold
                shadow-lg
                shadow-cyan-500/20
                hover:scale-[1.02]
                transition
              "
            >
              <Crown size={18} />
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* STATS */}
      {/* ================================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-2xl
              p-6
              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            "
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-black text-white mt-2">
                  {item.value}
                </h2>
              </div>

              <div
                className="
                  h-14
                  w-14
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-500
                  to-indigo-600
                  flex
                  items-center
                  justify-center
                  text-white
                  shadow-lg
                "
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================================= */}
      {/* DETAILS GRID */}
      {/* ================================= */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="xl:col-span-2 space-y-8">
          {/* Company Details */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-2xl
              p-8
              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            "
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Company Details
                </h2>

                <p className="text-gray-400 mt-1">
                  Organization profile information
                </p>
              </div>

              <div
                className="
                  h-14
                  w-14
                  rounded-2xl
                  bg-cyan-500/10
                  flex
                  items-center
                  justify-center
                  text-cyan-300
                "
              >
                <Building2 size={24} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: "Company Name",
                  value: company.name,
                },
                {
                  label: "Tenant ID",
                  value: company._id,
                },
                {
                  label: "Created Date",
                  value: new Date(
                    company.createdAt
                  ).toLocaleDateString(),
                },
                {
                  label: "Last Updated",
                  value: new Date(
                    company.updatedAt
                  ).toLocaleDateString(),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-5
                  "
                >
                  <p className="text-sm text-gray-400 mb-2">
                    {item.label}
                  </p>

                  <h3 className="text-white font-semibold break-all">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Workspace Activity */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-2xl
              p-8
              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            "
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Workspace Activity
            </h2>

            <div className="space-y-5">
              {[
                "New project created by Admin",
                "Department updated successfully",
                "5 new users joined workspace",
                "Task board activity increased by 14%",
              ].map((activity, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-4
                  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        h-10
                        w-10
                        rounded-xl
                        bg-cyan-500/10
                        flex
                        items-center
                        justify-center
                        text-cyan-300
                      "
                    >
                      <Activity size={18} />
                    </div>

                    <p className="text-gray-300">
                      {activity}
                    </p>
                  </div>

                  <span className="text-xs text-gray-500">
                    2h ago
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          {/* Contact */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-2xl
              p-6
              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            "
          >
            <h2 className="text-xl font-bold text-white mb-6">
              Contact Information
            </h2>

            <div className="space-y-5">
              {[
                {
                  icon: <Mail size={18} />,
                  title: "Email",
                  value: "admin@company.com",
                },
                {
                  icon: <Phone size={18} />,
                  title: "Phone",
                  value: "+91 9876543210",
                },
                {
                  icon: <MapPin size={18} />,
                  title: "Location",
                  value: "Mumbai, India",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                  "
                >
                  <div
                    className="
                      h-12
                      w-12
                      rounded-2xl
                      bg-cyan-500/10
                      flex
                      items-center
                      justify-center
                      text-cyan-300
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      {item.title}
                    </p>

                    <h3 className="text-white font-medium">
                      {item.value}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div
            className="
              rounded-3xl
              border
              border-emerald-500/20
              bg-emerald-500/5
              backdrop-blur-2xl
              p-6
              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            "
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="
                  h-14
                  w-14
                  rounded-2xl
                  bg-emerald-500/10
                  flex
                  items-center
                  justify-center
                  text-emerald-400
                "
              >
                <ShieldCheck size={28} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  Secure Workspace
                </h2>

                <p className="text-sm text-gray-400">
                  Tenant isolation enabled
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm">
              Your company data is securely isolated using
              multi-tenant SaaS architecture with JWT-based
              authentication and role-based access control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;