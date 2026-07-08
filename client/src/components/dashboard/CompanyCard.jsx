import {
  Building2,
  BadgeCheck,
  Users,
  FolderKanban,
  Crown,
  ArrowUpRight,
} from "lucide-react";

import { useSelector } from "react-redux";

const CompanyCard = () => {
  const { dashboard, loading } = useSelector(
    (state) => state.dashboard
  );

  const company = dashboard?.company;

  if (loading) {
    return (
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-7 shadow-xl">
        <p className="text-slate-400">
          Loading company...
        </p>
      </section>
    );
  }

  if (!company) {
    return (
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-7 shadow-xl">
        <p className="text-slate-400">
          Company information not available.
        </p>
      </section>
    );
  }

  return (
    <section
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      p-7
      shadow-xl
      hover:border-cyan-500
      transition-all
      duration-300
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div
            className="
            h-16
            w-16
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            flex
            items-center
            justify-center
            "
          >
            <Building2
              size={30}
              className="text-white"
            />
          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              {company.name}
            </h2>

            <p className="text-slate-400 text-sm mt-1">
              {company.companyId}
            </p>

          </div>

        </div>

        <button
          className="
          h-11
          w-11
          rounded-xl
          bg-slate-800
          hover:bg-cyan-500
          transition
          flex
          items-center
          justify-center
          "
        >
          <ArrowUpRight size={20} />
        </button>

      </div>

      {/* Status */}

      <div className="mt-8">

        <span
          className={`
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          text-sm
          ${
            company.status === "Active"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }
          `}
        >
          <BadgeCheck size={18} />

          {company.status}

        </span>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-2 gap-5 mt-8">

        <div
          className="
          rounded-2xl
          bg-slate-800/70
          p-5
          "
        >
          <Users
            className="text-cyan-400"
            size={28}
          />

          <p className="text-slate-400 mt-4 text-sm">
            Employees
          </p>

          <h3 className="text-3xl font-bold text-white mt-1">
            {company.employees}
          </h3>

        </div>

        <div
          className="
          rounded-2xl
          bg-slate-800/70
          p-5
          "
        >
          <FolderKanban
            className="text-indigo-400"
            size={28}
          />

          <p className="text-slate-400 mt-4 text-sm">
            Projects
          </p>

          <h3 className="text-3xl font-bold text-white mt-1">
            {company.projects}
          </h3>

        </div>

      </div>

      {/* Subscription */}

      <div
        className="
        mt-8
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500/20
        to-blue-500/20
        border
        border-cyan-500/20
        p-5
        flex
        items-center
        justify-between
        "
      >

        <div>

          <p className="text-slate-300 text-sm">
            Current Plan
          </p>

          <h3 className="text-2xl font-bold text-white mt-2">
            {company.plan}
          </h3>

        </div>

        <div
          className="
          h-14
          w-14
          rounded-2xl
          bg-yellow-500
          flex
          items-center
          justify-center
          "
        >
          <Crown
            size={28}
            className="text-white"
          />
        </div>

      </div>

    </section>
  );
};

export default CompanyCard;