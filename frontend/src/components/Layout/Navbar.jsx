import React from "react";
import { navbarStyles } from "../../assets/dummystyles";
import hero from "../../assets/hero.png";

const Navbar = ({ user }) => {
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