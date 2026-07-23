import React from "react";
import {
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const RecentTransactions = ({ data }) => {
  const { darkMode } = useTheme();

  const transactions = data?.recentTransactions || [];

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
          Recent Transactions
        </h2>

        <p
          className={`mt-1 text-sm sm:text-base ${
            darkMode ? "text-slate-400" : "text-gray-500"
          }`}
        >
          Your latest income & expenses
        </p>

      </div>

      {transactions.length === 0 ? (

        <div
          className={`h-56 sm:h-64 flex items-center justify-center ${
            darkMode ? "text-slate-400" : "text-gray-500"
          }`}
        >
          No transactions found
        </div>

      ) : (

        <div className="space-y-4">

          {transactions.map((item) => (

            <div
              key={item._id}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.01]
              ${
                darkMode
                  ? "bg-[#1E293B] hover:bg-[#263449]"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              {/* Left */}

              <div className="flex items-start sm:items-center gap-4">

                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0
                  ${
                    item.type === "income"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {item.type === "income" ? (
                    <FaArrowUp />
                  ) : (
                    <FaArrowDown />
                  )}
                </div>

                <div className="min-w-0">

                  <h3
                    className={`font-semibold break-words ${
                      darkMode
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {item.description}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 mt-2">

                    <span
                      className={`text-xs px-3 py-1 rounded-full
                      ${
                        darkMode
                          ? "bg-slate-700 text-slate-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {item.category}
                    </span>

                    <span
                      className={`text-xs sm:text-sm ${
                        darkMode
                          ? "text-slate-400"
                          : "text-gray-500"
                      }`}
                    >
                      {new Date(item.date).toLocaleDateString()}
                    </span>

                  </div>

                </div>

              </div>

              {/* Right */}

              <h2
                className={`text-lg sm:text-xl font-bold whitespace-nowrap
                ${
                  item.type === "income"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.type === "income" ? "+" : "-"}₹
                {Number(item.amount).toLocaleString()}
              </h2>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default RecentTransactions;