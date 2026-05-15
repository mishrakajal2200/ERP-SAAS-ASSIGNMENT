// src/pages/dashboard/Analytics.jsx

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  TrendingUp,
  Activity,
  Users,
  FolderKanban,
  CheckCircle2,
  DollarSign,
} from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 12000, users: 120 },
  { month: "Feb", revenue: 18000, users: 180 },
  { month: "Mar", revenue: 24000, users: 250 },
  { month: "Apr", revenue: 21000, users: 220 },
  { month: "May", revenue: 31000, users: 320 },
  { month: "Jun", revenue: 39000, users: 410 },
];

const projectData = [
  { name: "Completed", value: 65 },
  { name: "In Progress", value: 25 },
  { name: "Pending", value: 10 },
];

const COLORS = ["#06b6d4", "#6366f1", "#8b5cf6"];

const teamData = [
  { team: "Engineering", tasks: 120 },
  { team: "Marketing", tasks: 85 },
  { team: "Sales", tasks: 65 },
  { team: "HR", tasks: 35 },
];

const stats = [
  {
    title: "Total Revenue",
    value: "$39,240",
    icon: <DollarSign size={22} />,
    growth: "+18.2%",
  },
  {
    title: "Active Users",
    value: "1,284",
    icon: <Users size={22} />,
    growth: "+12.4%",
  },
  {
    title: "Projects",
    value: "86",
    icon: <FolderKanban size={22} />,
    growth: "+8.1%",
  },
  {
    title: "Tasks Completed",
    value: "2,340",
    icon: <CheckCircle2 size={22} />,
    growth: "+24.7%",
  },
];

const Analytics = () => {
  return (
    <div className="space-y-8">
      {/* ======================= */}
      {/* PAGE HEADER */}
      {/* ======================= */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <p className="text-cyan-300 text-sm font-medium mb-2">
            Enterprise Analytics
          </p>

          <h1
            className="
              text-4xl
              font-black
              bg-gradient-to-r
              from-white
              via-cyan-200
              to-indigo-300
              bg-clip-text
              text-transparent
            "
          >
            Business Intelligence
          </h1>

          <p className="text-gray-400 mt-2">
            Monitor tenant performance, revenue growth & system activity.
          </p>
        </div>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-indigo-500
            px-6
            py-3
            font-semibold
            text-white
            shadow-lg
            shadow-cyan-500/20
            hover:scale-[1.02]
            transition
          "
        >
          <TrendingUp size={18} />
          Generate Report
        </button>
      </div>

      {/* ======================= */}
      {/* STATS */}
      {/* ======================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-2xl
              p-6
              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            "
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-black text-white mt-2">
                  {item.value}
                </h2>

                <div className="flex items-center gap-2 mt-3">
                  <span
                    className="
                      rounded-full
                      bg-emerald-500/10
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      text-emerald-400
                    "
                  >
                    {item.growth}
                  </span>

                  <span className="text-xs text-gray-500">
                    vs last month
                  </span>
                </div>
              </div>

              <div
                className="
                  h-14
                  w-14
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-500
                  to-indigo-500
                  flex
                  items-center
                  justify-center
                  text-white
                  shadow-lg
                "
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ======================= */}
      {/* MAIN CHARTS */}
      {/* ======================= */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Revenue Area Chart */}
        <div
          className="
            xl:col-span-2
            rounded-3xl
            border
            border-white/10
            bg-white/[0.05]
            backdrop-blur-2xl
            p-6
            shadow-[0_8px_32px_rgba(0,0,0,0.25)]
          "
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-white">
                Revenue Growth
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                Monthly recurring revenue overview
              </p>
            </div>

            <div
              className="
                h-12
                w-12
                rounded-2xl
                bg-cyan-500/10
                flex
                items-center
                justify-center
                text-cyan-300
              "
            >
              <Activity size={22} />
            </div>
          </div>

          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient
                  id="colorRevenue"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#06b6d4"
                    stopOpacity={0.8}
                  />

                  <stop
                    offset="95%"
                    stopColor="#06b6d4"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.08)"
              />

              <XAxis
                dataKey="month"
                stroke="#9ca3af"
              />

              <YAxis
                stroke="#9ca3af"
              />

              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  color: "#fff",
                }}
              />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#06b6d4"
                strokeWidth={4}
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.05]
            backdrop-blur-2xl
            p-6
            shadow-[0_8px_32px_rgba(0,0,0,0.25)]
          "
        >
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white">
              Project Status
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              Current workflow distribution
            </p>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={projectData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {projectData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  color: "#fff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="space-y-3 mt-4">
            {projectData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: COLORS[index],
                    }}
                  />

                  <span className="text-gray-300 text-sm">
                    {item.name}
                  </span>
                </div>

                <span className="text-white font-semibold">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================= */}
      {/* TEAM PERFORMANCE */}
      {/* ======================= */}

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-2xl
          p-6
          shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        "
      >
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white">
            Department Productivity
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Task completion by departments
          </p>
        </div>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={teamData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.08)"
            />

            <XAxis
              dataKey="team"
              stroke="#9ca3af"
            />

            <YAxis
              stroke="#9ca3af"
            />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="tasks"
              radius={[12, 12, 0, 0]}
              fill="#6366f1"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;