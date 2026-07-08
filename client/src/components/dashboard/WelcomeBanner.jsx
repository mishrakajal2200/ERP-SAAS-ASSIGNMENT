import {
  Bell,
  Search,
  CalendarDays,
  Building2,
  UserCircle2,
  Crown,
} from "lucide-react";

import { useSelector } from "react-redux";

const WelcomeBanner = () => {
  // Logged-in user
  const { user } = useSelector(
    (state) => state.auth
  );

  // Dashboard data
  const {
    dashboard,
    loading,
  } = useSelector(
    (state) => state.dashboard
  );

  const company = dashboard?.company;

  const notifications =
    dashboard?.recentActivities?.length || 0;
  // Greeting
  const currentHour =
    new Date().getHours();

  let greeting =
    "Good Evening";

  if (currentHour < 12) {
    greeting =
      "Good Morning";
  } else if (
    currentHour < 17
  ) {
    greeting =
      "Good Afternoon";
  }

  // Date
  const today =
    new Date().toLocaleDateString(
      "en-IN",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  // Loading Skeleton

  if (loading) {
    return (
      <div
        className="
        h-72
        rounded-3xl
        bg-slate-900
        animate-pulse
      "
      />
    );
  }

  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-3xl
      bg-gradient-to-r
      from-blue-700
      via-indigo-700
      to-cyan-700
      p-8
      text-white
      shadow-2xl
    "
    >
      {/* Background */}

      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cyan-300/20 blur-3xl" />

      <div
        className="
        relative
        z-10
        flex
        flex-col
        xl:flex-row
        justify-between
        gap-10
      "
      >
        {/* LEFT */}

        <div className="flex-1">

          <p className="text-lg text-blue-100">
            {greeting},
          </p>

          <h1 className="text-4xl font-bold mt-2">

            {user?.name || "User"} 👋

          </h1>

          {/* User Info */}

          <div className="flex flex-wrap gap-6 mt-6 text-sm">

            <div className="flex items-center gap-2">

              <UserCircle2 size={18} />

              <span>
                {user?.role}
              </span>

            </div>

            <div className="flex items-center gap-2">

              <Building2 size={18} />

              <span>

                {company?.name ||
                  "Your Company"}

              </span>

            </div>

            <div className="flex items-center gap-2">

              <CalendarDays size={18} />

              <span>{today}</span>

            </div>

          </div>

          {/* Subscription */}

          {company?.subscription && (

            <div
              className="
              mt-5
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-yellow-400/20
              text-yellow-100
              border
              border-yellow-300/20
            "
            >

              <Crown size={18} />

              <span>

                {company.subscription}
                {" "}
                Plan

              </span>

            </div>

          )}

          <p
            className="
            mt-6
            max-w-2xl
            text-blue-100
            leading-8
          "
          >
            Welcome back to your enterprise
            workspace. Manage projects,
            employees, departments,
            analytics, reports, tasks,
            company settings and business
            performance from one centralized
            platform.
          </p>

        </div>

        {/* RIGHT */}

        <div
          className="
          w-full
          xl:w-[360px]
          flex
          flex-col
          gap-5
        "
        >
          {/* Search */}

          <div className="relative">

            <Search
              size={18}
              className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-white/70
            "
            />

            <input
              type="text"
              placeholder="Search projects, employees..."
              className="
              w-full
              rounded-2xl
              bg-white/10
              border
              border-white/20
              backdrop-blur-md
              py-3
              pl-12
              pr-4
              placeholder:text-white/70
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-300
            "
            />

          </div>

          {/* Notifications */}

          <div
            className="
            flex
            justify-between
            items-center
            rounded-2xl
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            p-5
          "
          >

            <div>

              <p className="text-blue-100">

                Notifications

              </p>

              <h3 className="text-3xl font-bold mt-1">

                {notifications}

              </h3>

            </div>

            <div className="relative">

              <Bell size={30} />

              {notifications > 0 && (

                <span
                  className="
                  absolute
                  -top-2
                  -right-2
                  w-6
                  h-6
                  rounded-full
                  bg-red-500
                  text-xs
                  font-bold
                  flex
                  items-center
                  justify-center
                "
                >

                  {notifications}

                </span>

              )}

            </div>

          </div>

          {/* Company Card */}

          <div
            className="
            rounded-2xl
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            p-5
          "
          >

            <p className="text-blue-100">

              Company

            </p>

            <h2 className="text-2xl font-bold mt-2">

              {company?.name ||
                "ERP Nexus"}

            </h2>

            <p className="mt-2 text-sm text-blue-100">

              Subscription :
              {" "}
              <span className="font-semibold">

                {company?.subscription ||
                  "Free"}

              </span>

            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WelcomeBanner;