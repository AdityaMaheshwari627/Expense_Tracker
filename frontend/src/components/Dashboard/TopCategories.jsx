import React from "react";
import {
  FaUtensils,
  FaShoppingBag,
  FaCar,
  FaHeartbeat,
  FaGraduationCap,
  FaMoneyBillWave,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const iconMap = {
  Food: <FaUtensils />,
  Shopping: <FaShoppingBag />,
  Travel: <FaCar />,
  Health: <FaHeartbeat />,
  Education: <FaGraduationCap />,
  Bills: <FaMoneyBillWave />,
};

const TopCategories = ({ data }) => {
  const { darkMode } = useTheme();

  const categories = [...(data?.expenseDistribution || [])]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

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

      <div className="mb-6">

        <h2
          className={`text-xl sm:text-2xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Top Categories
        </h2>

        <p
          className={`mt-1 text-sm sm:text-base ${
            darkMode ? "text-slate-400" : "text-gray-500"
          }`}
        >
          Highest expense categories
        </p>

      </div>

      {categories.length === 0 ? (

        <div
          className={`h-56 sm:h-64 flex items-center justify-center ${
            darkMode ? "text-slate-400" : "text-gray-500"
          }`}
        >
          No expense data available
        </div>

      ) : (

        <div className="space-y-5">

          {categories.map((item) => (

            <div key={item.category}>

              <div className="flex items-center justify-between gap-3 mb-2">

                <div className="flex items-center gap-3 min-w-0">

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                    ${
                      darkMode
                        ? "bg-[#1E293B] text-teal-400"
                        : "bg-teal-100 text-teal-600"
                    }`}
                  >
                    {iconMap[item.category] || <FaMoneyBillWave />}
                  </div>

                  <div className="min-w-0">

                    <h3
                      className={`font-semibold truncate ${
                        darkMode
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {item.category}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm ${
                        darkMode
                          ? "text-slate-400"
                          : "text-gray-500"
                      }`}
                    >
                      ₹{item.amount.toLocaleString()}
                    </p>

                  </div>

                </div>

                <span
                  className={`text-sm sm:text-base font-bold whitespace-nowrap ${
                    darkMode
                      ? "text-teal-400"
                      : "text-teal-600"
                  }`}
                >
                  {item.percent}%
                </span>

              </div>

              <div
                className={`h-2.5 sm:h-3 rounded-full overflow-hidden ${
                  darkMode
                    ? "bg-slate-700"
                    : "bg-gray-200"
                }`}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-700"
                  style={{
                    width: `${item.percent}%`,
                  }}
                />
              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default TopCategories;