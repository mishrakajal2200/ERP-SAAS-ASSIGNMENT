import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { useSelector } from "react-redux";

const DepartmentOverview = () => {
  const { dashboard, loading } = useSelector(
    (state) => state.dashboard
  );

  const data = dashboard?.departmentOverview || [];

  if (loading) {
    return (
      <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl h-[390px] flex items-center justify-center">
        <p className="text-slate-400">Loading department overview...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl">
      {/* Header */}

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Department Overview
        </h2>

        <p className="text-slate-400 mt-2">
          Employees by Department
        </p>
      </div>

      {data.length === 0 ? (
        <div className="h-[320px] flex items-center justify-center">
          <p className="text-slate-400">
            No department data available.
          </p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="department"
              stroke="#94a3b8"
            />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Bar
              dataKey="employees"
              fill="#3b82f6"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default DepartmentOverview;