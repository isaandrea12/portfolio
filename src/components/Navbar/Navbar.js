import { React, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { CSSTransition } from 'react-transition-group';

const Navbar = () => {
  const [isNavToggle, setIsNavToggle] = useState(false);
  
  const handleNavToggle = () => {
    setIsNavToggle((prev) => {
      return !prev;
    });
  };

  return (
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
          {/* {isNavToggle && ( */}
          <ol
            style={
              {
                // display: isNavToggle ? null : 'none',
              }
            }
          >
            <Link
              onClick={handleNavToggle}
              className='li'
              to='home'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Home
            </Link>
            <Link
              onClick={handleNavToggle}
              className='li'
              to='projects'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              Projects
            </Link>
            <Link
              onClick={handleNavToggle}
              className='li'
              to='contact'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contact
            </Link>
          </ol>
          {/* )} */}
        </CSSTransition>
      {/* <ul class={styles.menu}>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
