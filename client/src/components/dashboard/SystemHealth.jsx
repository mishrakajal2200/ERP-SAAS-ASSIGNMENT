import {
  Server,
  Database,
  Cpu,
  Wifi,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import { useSelector } from "react-redux";

const SystemHealth = () => {
  const { dashboard, loading } = useSelector(
    (state) => state.dashboard
  );

  const system = dashboard?.systemHealth;

  if (loading) {
    return (
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 animate-pulse h-[520px]" />
    );
  }

  if (!system) {
    return (
      <section className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
        <p className="text-slate-400">
          System information unavailable.
        </p>
      </section>
    );
  }

  const isHealthy =
    system.overallStatus === "Healthy";

  return (
    <section
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      p-7
      shadow-xl
      hover:border-emerald-500
      transition-all
      duration-300
      "
    >
      {/* Header */}

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-4">

          <div
            className="
            h-16
            w-16
            rounded-2xl
            bg-gradient-to-r
            from-emerald-500
            to-green-600
            flex
            items-center
            justify-center
            "
          >
            <Server
              size={30}
              className="text-white"
            />
          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              System Health
            </h2>

            <p className="text-slate-400">
              Infrastructure Monitoring
            </p>

          </div>

        </div>

        <button
          className="
          h-11
          w-11
          rounded-xl
          bg-slate-800
          hover:bg-emerald-500
          transition
          flex
          items-center
          justify-center
          "
        >
          <ArrowUpRight size={20} />
        </button>

      </div>

      {/* Overall */}

      <div
        className={`
        mt-8
        rounded-2xl
        border
        p-5
        flex
        justify-between
        items-center

        ${
          isHealthy
            ? "bg-green-500/10 border-green-500/30"
            : "bg-red-500/10 border-red-500/30"
        }
        `}
      >
        <div>

          <p className="text-slate-300">
            Overall Status
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {system.overallStatus}
          </h2>

        </div>

        {isHealthy ? (
          <CheckCircle2
            size={48}
            className="text-green-400"
          />
        ) : (
          <AlertTriangle
            size={48}
            className="text-red-400"
          />
        )}

      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 gap-5 mt-8">

        <div className="bg-slate-800 rounded-2xl p-5">

          <Activity
            size={24}
            className="text-cyan-400"
          />

          <p className="text-slate-400 mt-3 text-sm">
            Uptime
          </p>

          <h3 className="text-2xl text-white font-bold mt-1">
            {system.uptime}
          </h3>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5">

          <Wifi
            size={24}
            className={
              system.api === "Online"
                ? "text-green-400"
                : "text-red-400"
            }
          />

          <p className="text-slate-400 mt-3 text-sm">
            API Status
          </p>

          <h3
            className={`text-2xl font-bold mt-1 ${
              system.api === "Online"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {system.api}
          </h3>

        </div>

      </div>

      {/* CPU */}

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <div className="flex items-center gap-2">

            <Cpu
              size={18}
              className="text-cyan-400"
            />

            <span className="text-slate-300">
              CPU Usage
            </span>

          </div>

          <span className="text-white font-semibold">
            {system.cpu}%
          </span>

        </div>

        <div className="h-3 rounded-full bg-slate-800 overflow-hidden">

          <div
            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            "
            style={{
              width: `${system.cpu}%`,
            }}
          />

        </div>

      </div>

      {/* RAM */}

      <div className="mt-6">

        <div className="flex justify-between mb-2">

          <div className="flex items-center gap-2">

            <Database
              size={18}
              className="text-violet-400"
            />

            <span className="text-slate-300">
              Memory Usage
            </span>

          </div>

          <span className="text-white font-semibold">
            {system.ram}%
          </span>

        </div>

        <div className="h-3 rounded-full bg-slate-800 overflow-hidden">

          <div
            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-violet-500
            to-pink-500
            "
            style={{
              width: `${system.ram}%`,
            }}
          />

        </div>

      </div>

      {/* Footer */}

      <div className="grid grid-cols-2 gap-5 mt-8">

        <div className="bg-slate-800 rounded-2xl p-5">

          <p className="text-slate-400 text-sm">
            Database
          </p>

          <h3
            className={`text-xl font-bold mt-2 ${
              system.database === "Healthy"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {system.database}
          </h3>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5">

          <p className="text-slate-400 text-sm">
            Latency
          </p>

          <h3 className="text-cyan-400 text-xl font-bold mt-2">
            {system.latency}
          </h3>

        </div>

      </div>

    </section>
  );
};

export default SystemHealth;