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
          Software Engineer with an interest in {" "}
          <button className={styles.codeBlock}>Frontend Engineering</button> and {" "}
          <button className={styles.codeBlock}>UX Design</button>, currently building text-to-speech and voice morphing technologies at Transperfect.
          <span className={styles.breakSpace}></span>
          I combine technical precision with user-centered design principles to create robust, intuitive applications. My work spans full-stack development, 
          from crafting responsive interfaces with
          <button className={styles.codeBlock}>Next.js</button> and {""}
          <button className={styles.codeBlock}>React</button>
          to implementing backend solutions in 
          <button className={styles.codeBlock}>Python</button> and {""}
          <button className={styles.codeBlock}>Java</button>.
          <span className={styles.breakSpace}></span>
          Through my{" "}
          <Link className={styles.link} to="/projects">
            <strong>PROJECTS</strong>
          </Link>{" "}
          , I've demonstrated my ability to deliver complex features while maintaining a focus on exceptional user experience. 
          I'm passionate about creating innovative solutions and continuously expanding my technical expertise.  
          <br /> <span className={styles.breakSpace}></span>
          Feel free to{" "}
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
