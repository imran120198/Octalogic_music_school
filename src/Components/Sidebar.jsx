import React from "react";
import styles from "../Styles/Sidebar.module.css";
import logo from "../assets/logo.svg";
import homelogo from "../assets/Homelogo.svg";
import courselogo from "../assets/Courselogo.svg";
import logout from "../assets/logout.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logoImage} src={logo} alt="logo" />
      </div>
      <div className={styles.modules}>
        <div>
          <Link to="/">
            <img src={homelogo} alt="home logo" />
          </Link>
        </div>
        <div>
          <Link to="/course">
            <img src={courselogo} alt="course logo" />
          </Link>
        </div>
      </div>
      <div className={styles.logout}>
        <img src={logout} alt="log out" />
      </div>
    </div>
  );
};

export default Sidebar;
