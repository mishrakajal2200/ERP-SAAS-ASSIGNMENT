import {
  Clock3,
  CalendarDays,
  Flag,
  User,
} from "lucide-react";

import { useSelector } from "react-redux";

const UpcomingDeadlines = () => {
  const { dashboard, loading } = useSelector(
    (state) => state.dashboard
  );

  const deadlines =
    dashboard?.upcomingDeadlines || [];

  const priorityColor = {
    High: "bg-red-500/20 text-red-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    Low: "bg-green-500/20 text-green-400",
  };

  if (loading) {
    return (
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 h-[420px] animate-pulse" />
    );
  }

  return (
    <section
      className="
      bg-slate-900
      rounded-3xl
      border
      border-slate-800
      shadow-xl
      p-6
      "
    >
      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Upcoming Deadlines
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Deadlines approaching soon
          </p>

        </div>

        <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center">

          <Clock3 className="text-yellow-400" />

        </div>

      </div>

      {/* Empty State */}

      {deadlines.length === 0 ? (
        <div className="flex justify-center items-center h-60">

          <p className="text-slate-400">
            No upcoming deadlines.
          </p>

        </div>
      ) : (
        <div className="space-y-5">

          {deadlines.map((item) => (
            <div
              key={item._id}
              className="
              bg-slate-800
              hover:bg-slate-700
              transition
              rounded-2xl
              border
              border-slate-700
              p-5
              "
            >
              {/* Top */}

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="text-lg font-semibold text-white">

                    {item.title}

                  </h3>

                  <p className="text-sm text-cyan-400 mt-1">

                    {item.type}

                  </p>

                </div>

                <span
                  className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                  ${
                    priorityColor[
                      item.priority
                    ] ||
                    "bg-slate-700 text-slate-300"
                  }
                `}
                >

                  <Flag
                    size={12}
                    className="inline mr-1"
                  />

                  {item.priority}

                </span>

              </div>

              {/* Bottom */}

              <div className="mt-5 grid grid-cols-2 gap-4 text-sm">

                <div className="flex items-center gap-2 text-slate-400">

                  <CalendarDays size={16} />

                  <span>

                    {new Date(
                      item.dueDate
                    ).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}

                  </span>

                </div>

                <div className="flex items-center gap-2 text-slate-400">

                  <User size={16} />

                  <span>

                    {item.assignedTo?.name ||
                      "Unassigned"}

                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}
    </section>
  );
};

export default UpcomingDeadlines;