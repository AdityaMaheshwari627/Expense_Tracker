import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useTheme } from "../../context/ThemeContext";

const IncomeChart = ({ data }) => {
  const { darkMode } = useTheme();

  const chartData =
    data?.monthlyData?.map((item) => ({
      month: item.month,
      Income: item.income,
      Expense: item.expense,
    })) || [];

  return (
    <div
      className={`rounded-3xl p-7 transition-all duration-300 ${
        darkMode
          ? "bg-[#111827] border border-gray-800 shadow-[0_0_30px_rgba(20,184,166,0.08)]"
          : "bg-white border border-gray-200 shadow-xl"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Monthly Overview
          </h2>

          <p
            className={`mt-1 ${
              darkMode ? "text-slate-400" : "text-gray-500"
            }`}
          >
            Income vs Expense
          </p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={360}>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 10,
          }}
          barGap={10}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={darkMode ? "#334155" : "#E5E7EB"}
            vertical={false}
          />

          <XAxis
            dataKey="month"
            stroke={darkMode ? "#CBD5E1" : "#64748B"}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            stroke={darkMode ? "#CBD5E1" : "#64748B"}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              background: darkMode ? "#1E293B" : "#ffffff",
              borderRadius: "16px",
              border: "none",
              color: darkMode ? "#fff" : "#111827",
              boxShadow: "0 10px 30px rgba(0,0,0,.15)",
            }}
          />

          <Legend />

          <Bar
            dataKey="Income"
            fill="#14B8A6"
            radius={[10, 10, 0, 0]}
            maxBarSize={28}
          />

          <Bar
            dataKey="Expense"
            fill="#F97316"
            radius={[10, 10, 0, 0]}
            maxBarSize={28}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeChart;