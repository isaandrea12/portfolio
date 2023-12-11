import { React, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  const [isNavToggle, setIsNavToggle] = useState(false);
  
  const handleNavToggle = () => {
    setIsNavToggle((prev) => {
      return !prev;
    });
  };

  return (
    <div className={styles.main}>
      <nav className={styles.navbar}>
        <Link className={styles.logo} to="/">
          IM.
        </Link>
        <div className={styles.links}>
          <Link className={styles.projectsMargin} to="/projects">
            Projects
          </Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className={styles.menuToggle} onClick={handleNavToggle}>
          {isNavToggle ? <FaX /> : <FaBarsStaggered />}
        </div>
        <CSSTransition
            in={isNavToggle}
            unmountOnExit
            timeout={500}
            classNames='display'
          >
            <ul>
              <li>
                <Link
                  onClick={handleNavToggle}
                  className={styles.menuLink}
                  to='projects'
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleNavToggle}
                  className={styles.menuLink}
                  to='contact'
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
            {/* )} */}
          </CSSTransition>
      </nav>
    </div>
  );
};

export default Navbar;
