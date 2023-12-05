import React from "react";
import styles from "./ContactIcons.module.css";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactIcons = () => {
  return (
    <div className={styles.iconsContainer}>
      <a
        href="https://www.linkedin.com/in/isabel-mu%C3%B1iz-she-her-091a801a3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={styles.linkedinIcon} icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/isaandrea12"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={styles.githubIcon} icon={faGithub} />
      </a>
    </div>
  );
};

export default ContactIcons;
