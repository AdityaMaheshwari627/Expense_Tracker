import React from "react";

import DashboardStats from "../components/Dashboard/DashboardStats";
import IncomeChart from "../components/Charts/IncomeChart";
import ExpensePieChart from "../components/Charts/PieChart";
import RecentTransactions from "../components/Dashboard/RecentTransactions";

const Dashboard = () => {
  return (
    <div className="space-y-8 p-6">

      <DashboardStats />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <IncomeChart />
        <ExpensePieChart />
      </div>

      <RecentTransactions />

    </div>
  );
};

export default Dashboard;