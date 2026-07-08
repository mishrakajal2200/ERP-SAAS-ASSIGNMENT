
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const UserChart = ({ data }) => {
  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1E293B"
          />

          <XAxis
            dataKey="department"
            stroke="#94A3B8"
          />

          <YAxis stroke="#94A3B8" />

          <Tooltip />

          <Bar
            dataKey="users"
            fill="#8B5CF6"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserChart;