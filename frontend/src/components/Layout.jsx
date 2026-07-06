import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { styles } from "../assets/dummystyles";

const Layout = ({ onLogout, user }) => {
  return (
    <div className={styles.layout.root}>
      <Navbar user={user} onLogout={onLogout} />
      <Outlet />
    </div>
  );
};

export default Layout;