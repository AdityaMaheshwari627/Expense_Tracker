import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaMoneyBillWave,
  FaWallet,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import { sidebarStyles } from "../../assets/dummystyles";

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

const Sidebar = ({ onLogout }) => {
  return (
    <aside className={sidebarStyles.sidebarContainer.base}>
      <div className={sidebarStyles.sidebarInner.base}>
        <div className={sidebarStyles.userProfileContainer.base}>
          
            FinTrack 
          </h2>
        </div>

        <nav className={sidebarStyles.menuList.base}>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${sidebarStyles.menuItem.base}
                 ${
                   isActive
                     ? sidebarStyles.menuItem.active
                     : sidebarStyles.menuItem.inactive
                 }
                 ${sidebarStyles.menuItem.expanded}`
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto p-4">
          <button
            onClick={onLogout}
            className={sidebarStyles.logoutButton.base}
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;