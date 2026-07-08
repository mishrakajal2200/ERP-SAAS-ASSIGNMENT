

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#06B6D4",
  "#8B5CF6",
  "#F59E0B",
];

const TaskChart = ({ data }) => {
  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[
                    index % COLORS.length
                  ]
                }
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskChart;