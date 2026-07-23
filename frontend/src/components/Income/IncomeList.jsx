import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const IncomeList = ({
  incomeList,
  handleDelete,
  handleEdit,
}) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`rounded-2xl shadow-lg p-6 transition-all duration-300 ${
        darkMode
          ? "bg-[#111827] border border-gray-800"
          : "bg-white border border-gray-200"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Income History
      </h2>

      {incomeList.length === 0 ? (
        <p
          className={`text-center py-10 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          No income added yet.
        </p>
      ) : (
        <div className="space-y-4">
          {incomeList.map((item) => (
            <div
              key={item._id}
              className={`flex justify-between items-center rounded-xl p-4 transition-all ${
                darkMode
                  ? "bg-[#1E293B] hover:bg-[#263449]"
                  : "bg-gray-50 hover:bg-gray-100 border"
              }`}
            >
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.description}
                </h3>

                <p
                  className={
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }
                >
                  {item.category}
                </p>

                <p
                  className={
                    darkMode
                      ? "text-gray-500 text-sm"
                      : "text-gray-400 text-sm"
                  }
                >
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center gap-5">
                <h2 className="text-green-500 text-2xl font-bold">
                  ₹{Number(item.amount).toLocaleString()}
                </h2>

                <button
                  onClick={() => handleEdit(item)}
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaEdit size={18} />
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IncomeList;