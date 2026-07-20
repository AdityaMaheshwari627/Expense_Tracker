import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import hero from "../../assets/hero.png";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 px-8 pt-6">
      <div
        className={`h-24 rounded-3xl border backdrop-blur-xl
        flex items-center justify-between px-8 transition-all duration-300
        
        ${
          darkMode
            ? "bg-[#111827]/90 border-gray-800 shadow-[0_0_35px_rgba(20,184,166,0.08)]"
            : "bg-white/90 border-gray-200 shadow-xl"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src={hero}
            alt="FinTrack"
            className="w-16 h-16 object-contain"
          />

          <h1
            className={`text-4xl font-extrabold tracking-wide ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Fin<span className="text-teal-500">Track</span>
          </h1>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`
            h-14 w-28 rounded-full
            flex items-center justify-center gap-5
            transition-all duration-300

            ${
              darkMode
                ? "bg-[#1F2937] border border-gray-700 hover:bg-[#273549]"
                : "bg-slate-100 hover:bg-slate-200"
            }
          `}
        >
          <FaSun
            className={`text-xl ${
              darkMode ? "text-gray-500" : "text-yellow-500"
            }`}
          />

          <FaMoon
            className={`text-xl ${
              darkMode ? "text-cyan-400" : "text-gray-500"
            }`}
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;