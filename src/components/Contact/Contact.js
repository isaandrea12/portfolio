import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Contact = ({ isSubmit, sendEmail }) => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Contact.</h1>
      <div className={styles.paragraphContainer}>
        <p className={styles.paragraph}>
          Get in touch or shoot me an email directly at{" "}
          <strong>isabelandreamuniz@gmail.com</strong>
        </p>
      </div>
      <ContactForm sendEmail={sendEmail} />
      <div className={styles.ctaProjectsContainer}>
        <Link className={styles.ctaProjects} to="/">
          Go Back Home <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
