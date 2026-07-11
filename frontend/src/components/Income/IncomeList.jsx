import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const IncomeList = ({
  incomeList,
  handleDelete,
  handleEdit,
}) => {
  if (incomeList.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-5">
          Income History
        </h2>

        <p className="text-gray-500">
          No income added yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-5">
        Income History
      </h2>

      <div className="space-y-4">

        {incomeList.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border rounded-xl p-4 hover:shadow-md transition"
          >

            <div>

              <h3 className="font-semibold text-lg">
                {item.description}
              </h3>

              <p className="text-gray-500">
                {item.category}
              </p>

              <p className="text-sm text-gray-400">
                {new Date(item.date).toLocaleDateString()}
              </p>

            </div>

            <div className="flex items-center gap-5">

              <h2 className="text-green-600 text-xl font-bold">
                ₹{item.amount}
              </h2>

              <button
                onClick={() => handleEdit(item)}
                className="text-blue-600 hover:text-blue-800 transition"
                title="Edit Income"
              >
                <FaEdit size={18} />
              </button>

              <button
                onClick={() => handleDelete(item._id)}
                className="text-red-600 hover:text-red-800 transition"
                title="Delete Income"
              >
                <FaTrash size={18} />
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default IncomeList;