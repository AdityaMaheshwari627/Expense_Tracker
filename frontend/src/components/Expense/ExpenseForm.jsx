import React from "react";

const ExpenseForm = ({
  formData,
  handleChange,
  handleSubmit,
  loading,
  isEditing,
  handleCancel,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-5">
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
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
          required
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
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-xl font-semibold transition"
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