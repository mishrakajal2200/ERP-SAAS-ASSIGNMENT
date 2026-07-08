import { useMemo } from "react";
import { useSelector } from "react-redux";

import {
  Users,
  Building2,
  FolderKanban,
  CheckSquare,
  TrendingUp,
  DollarSign,
} from "lucide-react";

const StatsCards = () => {
  const {
    dashboard,
    loading,
  } = useSelector((state) => state.dashboard);

  console.log("Redux Dashboard:", dashboard);

  const statsData = dashboard?.stats;

  const stats = useMemo(
    () => [
      {
        id: 1,
        title: "Employees",
        value: statsData?.totalUsers ?? 0,
        icon: Users,
        color: "bg-blue-500",
      },

      {
        id: 2,
        title: "Departments",
        value: statsData?.totalDepartments ?? 0,
        icon: Building2,
        color: "bg-indigo-500",
      },

      {
        id: 3,
        title: "Projects",
        value: statsData?.totalProjects ?? 0,
        icon: FolderKanban,
        color: "bg-cyan-500",
      },

      {
        id: 4,
        title: "Completed Tasks",
        value: statsData?.completedTasks ?? 0,
        icon: CheckSquare,
        color: "bg-green-500",
      },

      {
        id: 5,
        title: "Revenue",
        value: `₹${statsData?.revenue ?? 0}`,
        icon: DollarSign,
        color: "bg-yellow-500",
      },

      {
        id: 6,
        title: "Performance",
        value:
          statsData?.totalTasks > 0
            ? `${Math.round(
                (statsData.completedTasks /
                  statsData.totalTasks) *
                  100
              )}%`
            : "0%",
        icon: TrendingUp,
        color: "bg-purple-500",
      },
     
    ],
    [statsData]
  );

  if (loading) {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="
              bg-slate-900
              rounded-3xl
              p-6
              border
              border-slate-800
              animate-pulse
              h-40
            "
          />
        ))}
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="
              bg-slate-900
              rounded-3xl
              p-6
              border
              border-slate-800
              hover:border-cyan-500
              transition-all
              duration-300
              shadow-xl
              hover:shadow-cyan-500/10
            "
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400 text-sm">
                  {item.title}
                </p>

                <h2 className="text-4xl font-bold text-white mt-3">
                  {item.value}
                </h2>

                <p className="text-slate-500 mt-4 text-sm">
                  Current Count
                </p>
              </div>

              <div
                className={`
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-white
                  shadow-lg
                  ${item.color}
                `}
              >
                <Icon size={30} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default StatsCards;