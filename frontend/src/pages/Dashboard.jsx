import React, { useEffect, useState } from "react";

import DashboardStats from "../components/Dashboard/DashboardStats";
import IncomeChart from "../components/Charts/IncomeChart";
import ExpensePieChart from "../components/Charts/PieChart";
import RecentTransactions from "../components/Dashboard/RecentTransactions";
import { getDashboardData } from "../services/dashboardService";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await getDashboardData(token);

      console.log("Full Response:", res);
      console.log("Response Data:", res.data);

      if (res.success) {
        setDashboardData(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6">
      <DashboardStats data={dashboardData} />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <IncomeChart data={dashboardData} />
        <ExpensePieChart data={dashboardData} />
      </div>

      <RecentTransactions data={dashboardData} />
    </div>
  );
};

export default Dashboard;