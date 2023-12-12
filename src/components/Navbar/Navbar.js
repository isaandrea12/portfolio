import { React } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { CSSTransition } from "react-transition-group";

const Navbar = ({ isNavToggle, setIsNavToggle }) => {
  // const [isNavToggle, setIsNavToggle] = useState(false);

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
          {isNavToggle ? (
            <FaX className={styles.faIcon} size="1.5em" />
          ) : (
            <FaBarsStaggered className={styles.faIcon} size="1.5em" />
          )}
        </div>
        <div
          className={`${styles.menuContent} ${
            isNavToggle ? styles.open : styles.closed
          }`}
        >
          <CSSTransition
            in={isNavToggle}
            unmountOnExit
            timeout={500}
            classNames="display"
          >
            <ul className={styles.toggledMenuLinks}>
              <li className={styles.menuLinkMargin}>
                <Link
                  onClick={handleNavToggle}
                  className={styles.menuLink}
                  to="/"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  HOME
                </Link>
              </li>
              <li className={styles.menuLinkMargin}>
                <Link
                  onClick={handleNavToggle}
                  className={styles.menuLink}
                  to="projects"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                >
                  PROJECTS
                </Link>
              </li>
              <li className={styles.menuLinkMargin}>
                <Link
                  onClick={handleNavToggle}
                  className={styles.menuLink}
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            {/* )} */}
          </CSSTransition>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
