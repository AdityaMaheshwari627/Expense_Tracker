import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { styles } from "../../assets/dummystyles";

const Layout = ({ user, onLogout }) => {
  return (
    <div className={styles.layout.root}>
      <Sidebar onLogout={onLogout} />

      <div className={styles.layout.mainContainer(false)}>
        <Navbar user={user} onLogout={onLogout} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;