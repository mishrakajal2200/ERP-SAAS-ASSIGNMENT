// src/components/layout/Header.jsx

import {
  Sparkles,
  ChevronRight,
  Bell,
  Search,
} from "lucide-react";

const Header = ({
  title = "Dashboard",
  subtitle = "Manage your SaaS ERP platform efficiently",
}) => {
  return (
    <div className="relative mb-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-indigo-500/10 blur-3xl rounded-full"></div>

      <div className="absolute right-0 top-0 w-60 h-60 bg-cyan-500/10 blur-3xl rounded-full"></div>

      {/* Main Header */}
      <div
        className="
          relative
          z-10
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          p-6
          shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        "
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left Section */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
              <span>Workspace</span>

              <ChevronRight size={16} />

              <span className="text-cyan-300">{title}</span>
            </div>

            {/* Title */}
            <div className="flex items-center gap-3">
              <div
                className="
                  h-12
                  w-12
                  rounded-2xl
                  bg-gradient-to-br
                  from-indigo-500
                  to-cyan-500
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  shadow-cyan-500/20
                "
              >
                <Sparkles className="text-white" size={22} />
              </div>

              <div>
                <h1
                  className="
                    text-3xl
                    md:text-4xl
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
                  {title}
                </h1>

                <p className="text-gray-400 mt-1 text-sm md:text-base">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Search */}
            <div
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                px-4
                py-3
                min-w-[260px]
                backdrop-blur-xl
              "
            >
              <Search size={18} className="text-gray-400" />

              <input
                type="text"
                placeholder="Search anything..."
                className="
                  bg-transparent
                  outline-none
                  text-sm
                  text-white
                  placeholder:text-gray-500
                  w-full
                "
              />
            </div>

            {/* Notification */}
            <button
              className="
                relative
                h-12
                w-12
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                flex
                items-center
                justify-center
                backdrop-blur-xl
                hover:bg-white/[0.08]
                transition
              "
            >
              <Bell size={20} className="text-white" />

              <span
                className="
                  absolute
                  top-2
                  right-2
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-cyan-400
                  animate-pulse
                "
              />
            </button>

            {/* Tenant Badge */}
            <div
              className="
                rounded-2xl
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-4
                py-3
                backdrop-blur-xl
              "
            >
              <p className="text-xs text-gray-400">
                Current Tenant
              </p>

              <h3 className="text-sm font-semibold text-cyan-300">
                Acme Corporation
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;