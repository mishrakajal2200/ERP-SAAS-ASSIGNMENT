import {
  HardDrive,
  Database,
  Image,
  FileText,
  FolderKanban,
  ArrowUpRight,
} from "lucide-react";

import { useSelector } from "react-redux";

const StorageUsage = () => {
  const { dashboard } = useSelector((state) => state.dashboard);

  const storage = dashboard?.storage || {};

  const used = storage.used || 0;
  const total = storage.total || 0;

  const percentage =
    total > 0 ? Math.round((used / total) * 100) : 0;

  const available = total - used;

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
            <HardDrive
              size={30}
              className="text-white"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              Storage Usage
            </h2>

            <p className="text-slate-400">
              Company Storage
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

      {/* Main Usage */}

      <div className="mt-8">
        <div className="flex justify-between">
          <div>
            <p className="text-slate-400">
              Used
            </p>

            <h2 className="text-4xl font-bold text-white mt-2">
              {used} GB
            </h2>
          </div>

          <div className="text-right">
            <p className="text-slate-400">
              Available
            </p>

            <h2 className="text-3xl font-bold text-cyan-400 mt-2">
              {available} GB
            </h2>
          </div>
        </div>
      </div>

      {/* Progress */}

      <div className="mt-8">
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">
            Storage Utilization
          </span>

          <span className="text-cyan-400 font-semibold">
            {percentage}%
          </span>
        </div>

        <div
          className="
          h-4
          bg-slate-800
          rounded-full
          overflow-hidden
          mt-3
          "
        >
          <div
            style={{
              width: `${percentage}%`,
            }}
            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-indigo-500
            "
          />
        </div>
      </div>

      {/* Breakdown */}

      <div className="grid grid-cols-2 gap-5 mt-8">
        <div className="bg-slate-800 rounded-2xl p-4">
          <FileText
            className="text-cyan-400"
            size={24}
          />

          <p className="text-slate-400 mt-3 text-sm">
            Documents
          </p>

          <h3 className="text-2xl text-white font-bold mt-1">
            {storage.documents || 0}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4">
          <Image
            className="text-pink-400"
            size={24}
          />

          <p className="text-slate-400 mt-3 text-sm">
            Images
          </p>

          <h3 className="text-2xl text-white font-bold mt-1">
            {storage.images || 0}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4">
          <Database
            className="text-green-400"
            size={24}
          />

          <p className="text-slate-400 mt-3 text-sm">
            Files
          </p>

          <h3 className="text-2xl text-white font-bold mt-1">
            {storage.files || 0}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4">
          <FolderKanban
            className="text-yellow-400"
            size={24}
          />

          <p className="text-slate-400 mt-3 text-sm">
            Projects
          </p>

          <h3 className="text-2xl text-white font-bold mt-1">
            {storage.projects || 0}
          </h3>
        </div>
      </div>

      {/* Footer */}

      <button
        className="
        mt-8
        w-full
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        hover:opacity-90
        transition
        text-white
        font-semibold
        shadow-lg
        "
      >
        Manage Storage
      </button>
    </section>
  );
};

export default StorageUsage;