import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { useSelector } from "react-redux";

const COLORS = [
  "#10b981",
  "#f59e0b",
  "#3b82f6",
];


const TaskChart = () => {
  const { dashboard, loading } = useSelector(
    (state) => state.dashboard
  );

  const stats = dashboard?.taskDistribution;

  const data = [
  {
    name: "Completed",
    value: stats?.completed ?? 0,
  },
  {
    name: "Pending",
    value: stats?.pending ?? 0,
  },
  {
    name: "In Progress",
    value: stats?.inProgress ?? 0,
  },
];

  return (
    <section
      className="
        bg-slate-900
        rounded-3xl
        p-6
        border
        border-slate-800
        shadow-xl
      "
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Task Distribution
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Current task status across the company
          </p>
        </div>
      </div>

      {loading ? (
        <div className="h-[320px] flex items-center justify-center text-slate-400">
          Loading...
        </div>
      ) : (
        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <PieChart>
  <Pie
    data={data}
    dataKey="value"
    nameKey="name"
    outerRadius={110}
    innerRadius={60}
    paddingAngle={3}
    label
  >
    {data.map((entry, index) => (
      <Cell
        key={entry.name}
        fill={COLORS[index]}
      />
    ))}
  </Pie>

  <Tooltip
    contentStyle={{
      backgroundColor: "#0f172a",
      border: "1px solid #334155",
      borderRadius: "10px",
      color: "#fff",
    }}
  />

  <Legend
    wrapperStyle={{
      color: "#fff",
      paddingTop: 20,
    }}
  />
</PieChart>
        </ResponsiveContainer>
      )}

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-slate-800 rounded-xl p-4 text-center">
          <p className="text-green-400 text-sm">
            Completed
          </p>

          <h3 className="text-2xl font-bold text-white mt-2">
            {stats?.completed ?? 0}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-xl p-4 text-center">
          <p className="text-yellow-400 text-sm">
            Pending
          </p>

          <h3 className="text-2xl font-bold text-white mt-2">
            {stats?.pending ?? 0}
          </h3>
        </div>

        <div className="bg-slate-800 rounded-xl p-4 text-center">
          <p className="text-blue-400 text-sm">
            In Progress
          </p>

          <h3 className="text-2xl font-bold text-white mt-2">
            {stats?.inProgress ?? 0}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default TaskChart;