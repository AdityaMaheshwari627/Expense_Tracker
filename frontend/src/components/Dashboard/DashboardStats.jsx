import React from "react";
import BalanceCard from "./BalanceCard";
import {
  FaWallet,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

const DashboardStats = ({ data }) => {
  return (
    <div>
      {/* Tagline */}
      <div className="mb-8">
        <h1 className="text-3xl font-Italic text-gray-800">
          Track Every Rupee, Smarter
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your income and expenses with FinTrack.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <BalanceCard
          title="Total Balance"
          amount={`₹${data?.savings || 0}`}
          icon={<FaWallet />}
          color="bg-teal-500"
        />

        <BalanceCard
          title="Income"
          amount={`₹${data?.monthlyIncome || 0}`}
          icon={<FaArrowUp />}
          color="bg-green-500"
        />

        <BalanceCard
          title="Expense"
          amount={`₹${data?.monthlyExpense || 0}`}
          icon={<FaArrowDown />}
          color="bg-orange-500"
        />

      </div>
    </div>
  );
};

export default DashboardStats;