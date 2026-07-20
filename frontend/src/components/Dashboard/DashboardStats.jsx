import React from "react";
import {
  FaWallet,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

import BalanceCard from "./BalanceCard";

const DashboardStats = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

      <BalanceCard
        title="Total Balance"
        amount={`₹${data?.savings ?? 0}`}
        icon={<FaWallet />}
        variant="balance"
      />

      <BalanceCard
        title="Total Income"
        amount={`₹${data?.monthlyIncome ?? 0}`}
        icon={<FaArrowUp />}
        variant="income"
      />

      <BalanceCard
        title="Total Expense"
        amount={`₹${data?.monthlyExpense ?? 0}`}
        icon={<FaArrowDown />}
        variant="expense"
      />

    </div>
  );
};

export default DashboardStats;