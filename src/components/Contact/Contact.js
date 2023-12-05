import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "../ContactForm/ContactForm";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Contact.</h1>
      </div>
      <div className={styles.paragraphContainer}>
        <p className={styles.paragraph}>
          Get in touch or shoot me an email directly at
          isabelandreamuniz@gmail.com
        </p>
      </div>
      {/* <ContactForm /> */}
      <div className={styles.ctaProjectsContainer}>
        <Link className={styles.ctaProjects} to="/">
          Go Back Home <HiOutlineArrowLongRight />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
