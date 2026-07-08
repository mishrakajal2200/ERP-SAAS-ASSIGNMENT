import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const RevenueChart = ({ data }) => {
  return (
    <div
      className="
        w-full
        h-[350px]
      "
    >
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1E293B"
          />

          <XAxis
            dataKey="month"
            stroke="#94A3B8"
          />

          <YAxis stroke="#94A3B8" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#06B6D4"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;