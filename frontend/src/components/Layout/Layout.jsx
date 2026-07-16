import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { styles } from "../../assets/dummystyles";
import { useTheme } from "../../context/ThemeContext";

const Layout = ({ user, onLogout }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`${styles.layout.root} ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-gray-50 to-gray-100"
      } transition-all duration-300`}
    >
      <Sidebar onLogout={onLogout} />

      <div className={styles.layout.mainContainer(false)}>
        <Navbar user={user} onLogout={onLogout} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;