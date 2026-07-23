import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useTheme } from "../../context/ThemeContext";

const Layout = ({ onLogout }) => {
  const { darkMode } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={`min-h-screen flex relative transition-all duration-300 ${
        darkMode
          ? "bg-[#0B1120] text-white"
          : "bg-gradient-to-br from-slate-100 via-white to-slate-100"
      }`}
    >
      {/* Background Glow */}
      {darkMode && (
        <>
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-violet-500/10 blur-[140px]" />
        </>
      )}

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        onLogout={onLogout}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 lg:ml-72 relative z-10">

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-5 py-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className={`text-2xl ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <FaBars />
          </button>

          <h1 className="text-2xl font-bold">
            Fin<span className="text-teal-500">Track</span>
          </h1>
        </div>

        <Navbar />

        <main className="p-4 sm:p-6 lg:p-8 max-w-[1700px] mx-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default Layout;