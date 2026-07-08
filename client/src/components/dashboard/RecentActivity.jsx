import {
  UserPlus,
  FolderKanban,
  CheckCircle2,
  Building2,
} from "lucide-react";

import { useSelector } from "react-redux";

const iconMap = {
  CREATE_USER: UserPlus,
  CREATE_PROJECT: FolderKanban,
  CREATE_TASK: CheckCircle2,
  CREATE_DEPARTMENT: Building2,
};

const messageMap = {
  CREATE_USER: "New employee created",
  CREATE_PROJECT: "New project created",
  CREATE_TASK: "New task created",
  CREATE_DEPARTMENT: "New department created",
};

const RecentActivity = () => {
  const { dashboard, loading } = useSelector(
    (state) => state.dashboard
  );

  const activities = dashboard?.recentActivities || [];

  if (loading) {
    return (
      <section className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-8">
          Recent Activity
        </h2>

        <p className="text-slate-400">
          Loading activities...
        </p>
      </section>
    );
  }

  return (
    <section className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl">

      <h2 className="text-2xl font-bold text-white mb-8">
        Recent Activity
      </h2>

      {activities.length === 0 ? (
        <p className="text-slate-400">
          No recent activity found.
        </p>
      ) : (
        <div className="space-y-6">

          {activities.map((activity) => {

            const Icon =
              iconMap[activity.action] || CheckCircle2;

            return (

              <div
                key={activity._id}
                className="flex gap-4 items-start"
              >

                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">

                  <Icon
                    size={22}
                    className="text-cyan-400"
                  />

                </div>

                <div>

                  <p className="text-white">
                   {messageMap[activity.action] || activity.action}
                  </p>

                  <span className="text-sm text-slate-400">
                    {new Date(activity.createdAt).toLocaleString()}
                  </span>

                </div>

              </div>

            );
          })}

        </div>
      )}

    </section>
  );
};

export default RecentActivity;