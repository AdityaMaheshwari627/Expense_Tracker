import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", income: 25000 },
  { month: "Feb", income: 32000 },
  { month: "Mar", income: 28000 },
  { month: "Apr", income: 45000 },
  { month: "May", income: 38000 },
  { month: "Jun", income: 50000 },
];

const IncomeChart = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-5">
        Income Overview
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="income"
            fill="#14b8a6"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeChart;