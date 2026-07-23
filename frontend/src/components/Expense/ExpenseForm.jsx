import React from "react";
import { useTheme } from "../../context/ThemeContext";

const ExpenseForm = ({
  formData,
  handleChange,
  handleSubmit,
  loading,
  isEditing,
  handleCancel,
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
        {isEditing ? "Edit Expense" : "Add New Expense"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className={`px-4 py-3 rounded-xl border outline-none transition-all ${
            darkMode
              ? "bg-[#1E293B] border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500"
              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-500"
          }`}
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
          className={`px-4 py-3 rounded-xl border outline-none transition-all ${
            darkMode
              ? "bg-[#1E293B] border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500"
              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-500"
          }`}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className={`px-4 py-3 rounded-xl border outline-none transition-all ${
            darkMode
              ? "bg-[#1E293B] border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500"
              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-500"
          }`}
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className={`px-4 py-3 rounded-xl border outline-none transition-all ${
            darkMode
              ? "bg-[#1E293B] border-gray-700 text-white focus:ring-2 focus:ring-red-500"
              : "bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-red-500"
          }`}
        />

        <div className="md:col-span-2 flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-60"
          >
            {loading
              ? "Saving..."
              : isEditing
              ? "Update Expense"
              : "Add Expense"}
          </button>

          {isEditing && (
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;