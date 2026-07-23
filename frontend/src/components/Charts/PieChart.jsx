import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { useTheme } from "../../context/ThemeContext";

const COLORS = [
  "#14B8A6",
  "#22C55E",
  "#3B82F6",
  "#8B5CF6",
  "#F97316",
  "#EF4444",
  "#EAB308",
  "#06B6D4",
];

const ExpensePieChart = ({ data }) => {
  const { darkMode } = useTheme();

  const chartData = data?.expenseDistribution || [];

  return (
    <div
      className={`rounded-3xl p-4 sm:p-6 lg:p-7 transition-all duration-300
      ${
        darkMode
          ? "bg-[#111827] border border-gray-800 shadow-[0_0_30px_rgba(20,184,166,.08)]"
          : "bg-white border border-gray-200 shadow-xl"
      }`}
    >
      {/* Header */}
      <div className="mb-5">
        <h2
          className={`text-xl sm:text-2xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Expense Distribution
        </h2>

        <p
          className={`mt-1 text-sm sm:text-base ${
            darkMode ? "text-slate-400" : "text-gray-500"
          }`}
        >
          Category wise spending
        </p>
      </div>

      {chartData.length === 0 ? (
        <div
          className={`h-[260px] sm:h-[320px] lg:h-[360px] flex items-center justify-center ${
            darkMode ? "text-slate-400" : "text-gray-500"
          }`}
        >
          No expense data available
        </div>
      ) : (
        <div className="h-[280px] sm:h-[340px] lg:h-[380px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="amount"
                nameKey="category"
                innerRadius={50}
                outerRadius={window.innerWidth < 640 ? 80 : 120}
                paddingAngle={4}
                cornerRadius={8}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  border: "none",
                  borderRadius: "16px",
                  background: darkMode ? "#1E293B" : "#fff",
                  color: darkMode ? "#fff" : "#111827",
                  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
                }}
              />

              <Legend
                verticalAlign="bottom"
                wrapperStyle={{
                  fontSize: "13px",
                  paddingTop: "10px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default ExpensePieChart;