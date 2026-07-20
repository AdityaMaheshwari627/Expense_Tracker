import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useTheme } from "../../context/ThemeContext";

const Layout = ({ user, onLogout }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen flex transition-all duration-300 ${
        darkMode
          ? "bg-[#0B1120] text-white"
          : "bg-gradient-to-br from-slate-100 via-white to-slate-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <Sidebar onLogout={onLogout} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-72 min-h-screen">
        <Navbar onLogout={onLogout} />

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;