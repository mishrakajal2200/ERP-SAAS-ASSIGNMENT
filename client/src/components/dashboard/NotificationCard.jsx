import {
  Bell,
  AlertCircle,
  CheckCircle2,
  UserPlus,
  FolderKanban,
} from "lucide-react";

import { useSelector } from "react-redux";

const NotificationCard = () => {
  const { dashboard, loading } = useSelector(
    (state) => state.dashboard
  );

  const notifications = dashboard?.notifications || [];

  const getIcon = (type) => {
    switch (type) {
      case "deadline":
        return (
          <AlertCircle
            size={22}
            className="text-red-400 mt-1"
          />
        );

      case "employee":
        return (
          <UserPlus
            size={22}
            className="text-cyan-400 mt-1"
          />
        );

      case "task":
        return (
          <CheckCircle2
            size={22}
            className="text-green-400 mt-1"
          />
        );

      case "project":
        return (
          <FolderKanban
            size={22}
            className="text-yellow-400 mt-1"
          />
        );

      default:
        return (
          <Bell
            size={22}
            className="text-slate-400 mt-1"
          />
        );
    }
  };

  const getTime = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">
        <p className="text-slate-400">
          Loading notifications...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">

          <Bell className="text-cyan-400" />

          <h2 className="text-white font-semibold text-xl">
            Notifications
          </h2>

        </div>

        <span className="text-sm text-cyan-400">
          {notifications.length}
        </span>

      </div>

      {/* Notifications */}

      {notifications.length === 0 ? (
        <div className="text-center py-10">

          <Bell
            size={42}
            className="mx-auto text-slate-600 mb-4"
          />

          <p className="text-slate-400">
            No Notifications
          </p>

        </div>
      ) : (
        <div className="space-y-5">

          {notifications.map((item) => (

            <div
              key={item._id}
              className="flex gap-4 border-b border-slate-800 pb-4 last:border-none"
            >

              {getIcon(item.type)}

              <div className="flex-1">

                <h3 className="text-white font-medium">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  {item.message}
                </p>

                <span className="text-xs text-slate-500 mt-2 block">
                  {getTime(item.createdAt)}
                </span>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default NotificationCard;