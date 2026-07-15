import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { navbarStyles } from "../../assets/dummystyles";
import hero from "../../assets/hero.png";
import { useTheme } from "../../context/ThemeContext";

const Navbar = ({ user }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className={navbarStyles.header}>
      <div className={navbarStyles.container}>
        {/* Logo */}
        <div className={navbarStyles.logoContainer}>
          <img
            src={hero}
            alt="Logo"
            className={navbarStyles.logoImage}
          />

          <h1 className={navbarStyles.logoText}>
            FinTrack 
          </h1>
        </div>
        <button
          onClick={toggleTheme}
          className="mr-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400 text-lg" />
          ) : (
            <FaMoon className="text-gray-700 text-lg" />
          )}
        </button>
        {/* User */}
        <div className={navbarStyles.userButton}>
          <div className={navbarStyles.userAvatar}>
            {user?.name ? user.name.charAt(0).toUpperCase() : "A"}
          </div>

          <div className={navbarStyles.userTextContainer}>
            <p className={navbarStyles.userName}>
              {user?.name || "Aditya"}
            </p>

            <p className={navbarStyles.userEmail}>
              {user?.email || "aditya@gmail.com"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;