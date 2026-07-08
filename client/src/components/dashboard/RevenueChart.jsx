import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { useSelector } from "react-redux";

const RevenueChart = () => {
  const { dashboard } = useSelector((state) => state.dashboard);

  const revenueData = dashboard?.monthlyRevenue || [];

  return (
    <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Revenue Overview
          </h2>

          <p className="text-slate-400 mt-2">
            Monthly Company Revenue
          </p>
        </div>

        <div className="text-right">
          <p className="text-slate-400 text-sm">
            Total Revenue
          </p>

          <h3 className="text-2xl font-bold text-cyan-400">
            ₹
            {dashboard?.revenue
              ? dashboard.revenue.toLocaleString()
              : 0}
          </h3>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={320}>
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
            stroke="#334155"
          />

          <XAxis
            dataKey="month"
            stroke="#94a3b8"
          />

          <YAxis stroke="#94a3b8" />

          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #334155",
              borderRadius: "10px",
              color: "#fff",
            }}
            formatter={(value) => [
              `₹${Number(value).toLocaleString()}`,
              "Revenue",
            ]}
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#06b6d4"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Footer */}

      <div className="flex justify-between mt-6 border-t border-slate-800 pt-5">
        <div>
          <p className="text-slate-400 text-sm">
            Highest Month
          </p>

          <h4 className="text-white font-semibold">
            {dashboard?.highestRevenueMonth || "-"}
          </h4>
        </div>

        <div className="text-right">
          <p className="text-slate-400 text-sm">
            Average Revenue
          </p>

          <h4 className="text-green-400 font-semibold">
            ₹
            {dashboard?.averageRevenue
              ? dashboard.averageRevenue.toLocaleString()
              : 0}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;