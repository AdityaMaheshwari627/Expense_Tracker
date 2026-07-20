import React, { useEffect, useState } from "react";

import DashboardStats from "../components/Dashboard/DashboardStats";
import IncomeChart from "../components/Charts/IncomeChart";
import ExpensePieChart from "../components/Charts/PieChart";
import RecentTransactions from "../components/Dashboard/RecentTransactions";
import TopCategories from "../components/Dashboard/TopCategories";

import { getDashboardData } from "../services/dashboardService";
import { useTheme } from "../context/ThemeContext";

const Dashboard = () => {
  const { darkMode } = useTheme();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await getDashboardData(token);

      if (res.success) {
        setDashboardData(res.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        className={`h-[80vh] flex justify-center items-center text-2xl font-semibold ${
          darkMode ? "text-white" : "text-gray-700"
        }`}
      >
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Hero */}

      <section>

        <p
          className={`text-lg ${
            darkMode ? "text-slate-400" : "text-gray-500"
          }`}
        >
          Welcome back! 👋
        </p>

        <h1
          className={`mt-2 text-5xl font-extrabold leading-tight ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Track Every Rupee,
          <span className="text-teal-400"> Smarter</span>
        </h1>

        <p
          className={`mt-3 text-lg ${
            darkMode ? "text-slate-400" : "text-gray-500"
          }`}
        >
          Manage your income and expenses with FinTrack.
        </p>

      </section>

      {/* Cards */}

      <DashboardStats data={dashboardData} />

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        <div className="xl:col-span-2">
          <IncomeChart data={dashboardData} />
        </div>

        <ExpensePieChart data={dashboardData} />

      </div>

      {/* Bottom */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <RecentTransactions data={dashboardData} />

        <TopCategories data={dashboardData} />

      </div>

    </div>
  );
};

export default Dashboard;