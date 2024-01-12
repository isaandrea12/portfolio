import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>I'm Isabel Muniz</h1>
      </div>
      <div className={styles.paragraphContainer}>
        <p className={styles.paragraph}>
          Fresh out of the college compiler and debugged for the real world. I'm
          a Software Engineer with a special interest in{" "}
          <button className={styles.codeBlock}>Frontend Engineering</button> and{" "}
          <button className={styles.codeBlock}>UX Design</button>. <br />{" "}
          <span className={styles.breakSpace}></span>
          I've developed multiple{" "}
          <Link className={styles.link} to="/projects">
            <strong>PROJECTS</strong>
          </Link>{" "}
          that have not only sharpened my technical skills but also deepened my
          appreciation for the significance of user-centered design in software
          engineering. <br /> <span className={styles.breakSpace}></span>
          As I step into the professional world, I bring with me a blend of
          technical know-how and a keen eye for design. I'm looking forward to
          contributing to impactful projects, expanding my knowledge base, and
          growing as a software engineer. Feel free to{" "}
          <Link className={styles.link} to="/contact">
            <strong>CONTACT</strong>
          </Link>{" "}
          me.
        </p>
      </div>
      <div className={styles.ctaProjectsContainer}>
        <Link className={styles.ctaProjects} to="/projects">
          See Projects <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
};

export default Home;
