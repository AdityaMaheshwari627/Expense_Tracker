import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaMoneyBillWave,
  FaWallet,
  FaUser,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

import hero from "../../assets/hero.png";
import { useTheme } from "../../context/ThemeContext";

const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: <FaHome />,
  },
  {
    title: "Income",
    path: "/income",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Expense",
    path: "/expense",
    icon: <FaWallet />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FaUser />,
  },
];

const Sidebar = ({
  onLogout,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const { darkMode } = useTheme();

  return (
    <aside
      className={`
      fixed top-0 left-0 h-screen w-72
      flex flex-col
      border-r
      transition-all duration-300 ease-in-out
      z-50

      ${
        sidebarOpen
          ? "translate-x-0"
          : "-translate-x-full"
      }

      lg:translate-x-0

      ${
        darkMode
          ? "bg-[#0F172A] border-gray-800"
          : "bg-white border-gray-200 shadow-xl"
      }
    `}
    >
      {/* Mobile Close Button */}

      <div className="lg:hidden absolute right-5 top-5">
        <button
          onClick={() => setSidebarOpen(false)}
          className={`text-2xl ${
            darkMode
              ? "text-white"
              : "text-gray-700"
          }`}
        >
          <FaTimes />
        </button>
      </div>

      {/* Logo */}

      <div className="flex items-center gap-3 px-8 py-8">

        <img
          src={hero}
          alt="logo"
          className="w-14 h-14 object-contain"
        />

        <h1
          className={`text-3xl font-extrabold ${
            darkMode
              ? "text-white"
              : "text-gray-900"
          }`}
        >
          Fin
          <span className="text-teal-400">
            Track
          </span>
        </h1>

      </div>

      {/* Menu */}

      <nav className="flex-1 px-5 mt-4 space-y-3">

        {menuItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            onClick={() =>
              setSidebarOpen(false)
            }
            className={({ isActive }) =>
              `
              flex items-center
              gap-4
              px-6
              py-4
              rounded-2xl
              font-semibold
              text-lg
              transition-all duration-300

              ${
                isActive
                  ? darkMode
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                    : "bg-teal-500 text-white"
                  : darkMode
                  ? "text-gray-300 hover:bg-[#1E293B]"
                  : "text-gray-700 hover:bg-gray-100"
              }
            `
            }
          >
            <span className="text-xl">
              {item.icon}
            </span>

            {item.title}

          </NavLink>

        ))}

      </nav>

      {/* Logout */}

      <div className="p-6">

        <button
          onClick={onLogout}
          className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-semibold transition-all ${
            darkMode
              ? "bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white"
              : "bg-red-50 text-red-600 hover:bg-red-500 hover:text-white"
          }`}
        >
          <FaSignOutAlt className="text-xl" />

          Logout

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;