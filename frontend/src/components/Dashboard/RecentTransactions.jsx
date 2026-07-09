import React from "react";

const transactions = [
  {
    id: 1,
    title: "Salary",
    category: "Income",
    amount: "+ ₹50,000",
    date: "09 Jul 2026",
    color: "text-green-600",
  },
  {
    id: 2,
    title: "Groceries",
    category: "Expense",
    amount: "- ₹2,500",
    date: "08 Jul 2026",
    color: "text-red-500",
  },
  {
    id: 3,
    title: "Netflix",
    category: "Subscription",
    amount: "- ₹649",
    date: "07 Jul 2026",
    color: "text-red-500",
  },
];

const RecentTransactions = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        Recent Transactions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Title</th>
              <th className="text-left py-3">Category</th>
              <th className="text-left py-3">Date</th>
              <th className="text-right py-3">Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-4">{item.title}</td>

                <td>{item.category}</td>

                <td>{item.date}</td>

                <td className={`text-right font-bold ${item.color}`}>
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;