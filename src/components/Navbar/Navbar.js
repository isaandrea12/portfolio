import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link className={styles.logo} to="/">
          IM.
        </Link>
      </div>
      <div className={styles.links}>
        <Link className={styles.projectsMargin} to="/projects">
          Projects
        </Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
