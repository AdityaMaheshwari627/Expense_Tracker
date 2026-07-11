import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#14b8a6",
  "#22c55e",
  "#f97316",
  "#3b82f6",
  "#8b5cf6",
  "#ef4444",
  "#eab308",
  "#06b6d4",
];

const ExpensePieChart = ({ data }) => {
  const chartData = data?.expenseDistribution || [];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-5">
        Expense Distribution
      </h2>

      {chartData.length === 0 ? (
        <div className="h-[320px] flex items-center justify-center text-gray-500">
          No expense data available
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>

            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              outerRadius={110}
              label
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>
        </ResponsiveContainer>
      )}

    </div>
  );
};

export default ExpensePieChart;