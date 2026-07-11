import React from "react";

const RecentTransactions = ({ data }) => {
  const transactions = data?.recentTransactions || [];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Transactions
      </h2>

      {transactions.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No transactions found.
        </div>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Description</th>
                <th className="text-left py-3">Category</th>
                <th className="text-left py-3">Date</th>
                <th className="text-right py-3">Amount</th>
              </tr>
            </thead>

            <tbody>

              {transactions.map((item) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50 transition"
                >

                  <td className="py-4">
                    {item.description}
                  </td>

                  <td>
                    {item.category}
                  </td>

                  <td>
                    {new Date(item.date).toLocaleDateString()}
                  </td>

                  <td
                    className={`text-right font-bold ${
                      item.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.type === "income" ? "+" : "-"} ₹{item.amount}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
};

export default RecentTransactions;