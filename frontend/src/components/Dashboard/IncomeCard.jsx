import React from "react";
import { useTheme } from "../../context/ThemeContext";
import IncomeChart from "../Charts/IncomeChart";

const IncomeCard = ({ data }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
      rounded-3xl
      p-4 sm:p-6
      border
      transition-all
      duration-300

      ${
        darkMode
          ? "bg-[#111827] border-gray-800 shadow-[0_0_30px_rgba(20,184,166,0.08)]"
          : "bg-white border-gray-200 shadow-xl"
      }
    `}
    >
      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-6">

        <div>

          <h2
            className={`text-xl sm:text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Monthly Overview
          </h2>

          <p
            className={`mt-1 text-sm sm:text-base ${
              darkMode
                ? "text-slate-400"
                : "text-gray-500"
            }`}
          >
            Income vs Expense
          </p>

        </div>

        <div className="flex flex-wrap gap-4 sm:gap-5 text-xs sm:text-sm">

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>

            <span
              className={
                darkMode
                  ? "text-slate-300"
                  : "text-gray-600"
              }
            >
              Income
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500"></span>

            <span
              className={
                darkMode
                  ? "text-slate-300"
                  : "text-gray-600"
              }
            >
              Expense
            </span>
          </div>

        </div>

      </div>

      {/* Chart */}

      <div className="h-[260px] sm:h-[320px] lg:h-[360px]">
        <IncomeChart data={data} />
      </div>

    </div>
  );
};

export default IncomeCard;