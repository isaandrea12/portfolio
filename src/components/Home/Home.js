import React from "react";
import styles from "./Home.module.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>I'm Isabel Muniz</h1>
      </div>
      <div className={styles.paragraphContainer}>
        <p className={styles.paragraph}>
          Pariatur irure sint ad do ad sint cillum eu consectetur veniam
          excepteur occaecat qui nulla. Ad tempor dolore officia laborum mollit
          amet sunt velit deserunt consequat. Do Lorem enim ut in sunt velit
          quis dolor velit ipsum labore pariatur quis. <br /> Pariatur irure
          sint ad do ad sint cillum eu consectetur veniam excepteur occaecat qui
          nulla. Ad tempor dolore officia laborum mollit amet sunt velit
          deserunt consequat. Do Lorem enim ut in sunt velit quis dolor velit
          ipsum labore pariatur quis.
        </p>
      </div>
      <div className={styles.ctaProjectsContainer}>
        <Link className={styles.ctaProjects} to="/projects">
          See Projects <HiOutlineArrowLongRight />
        </Link>
      </div>
    </div>
  );
};

export default Home;
