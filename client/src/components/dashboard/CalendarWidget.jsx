import { CalendarDays } from "lucide-react";
import { useSelector } from "react-redux";

const CalendarWidget = () => {
  const { dashboard, loading } = useSelector(
    (state) => state.dashboard
  );

  const events = dashboard?.calendarEvents || [];

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });
  };

  if (loading) {
    return (
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">
        <p className="text-slate-400">
          Loading calendar...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">

          <CalendarDays className="text-cyan-400" />

          <h2 className="text-xl text-white font-semibold">
            Calendar
          </h2>

        </div>

        <span className="text-cyan-400 text-sm">
          {events.length} Events
        </span>

      </div>

      {/* Events */}

      {events.length === 0 ? (
        <div className="py-10 text-center">

          <CalendarDays
            size={40}
            className="mx-auto text-slate-600 mb-3"
          />

          <p className="text-slate-400">
            No upcoming events
          </p>

        </div>
      ) : (
        <div className="space-y-5">

          {events.map((event) => (

            <div
              key={event._id}
              className="flex justify-between items-center border-b border-slate-800 pb-4 last:border-none"
            >

              <div>

                <h3 className="text-white font-medium">
                  {event.title}
                </h3>

                <p className="text-slate-500 text-sm">
                  {event.type || "Scheduled Event"}
                </p>

              </div>

              <span className="text-cyan-400 font-semibold">
                {formatDate(event.date)}
              </span>

            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default CalendarWidget;