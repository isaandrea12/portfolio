import React from "react";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";
import todo from "../../assets/todo2.png";
import weather from "../../assets/weather.png";
import calculator from "../../assets/calculator.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Projects = () => {
  return (
    <div className={styles.main}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Projects.</h1>
      </div>
      <div className={styles.cardContainer}>
        {/* Element Ease */}
        <div class={styles.card}>
          <div class={styles.cardImage}>
            <img src={weather} alt="Weather App preview" />
          </div>
          <div class={styles.cardOverlay}>
            <div class={styles.cardHeader}>
              <h2 class={styles.cardTitle}>Element Ease</h2>
              <p class={styles.cardSubtitle}>
                A React app that provides live weather updates, such as
                temperature and conditions, using data from weather APIs.
              </p>
            </div>
            <div class={styles.cardFooter}>
              <a
                href="https://element-ease.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class={styles.tag}
              >
                Live
              </a>
              <a
                href="https://github.com/isaandrea12/element-ease"
                target="_blank"
                rel="noopener noreferrer"
                class={styles.tag}
              >
                Github
              </a>
            </div>
          </div>
        </div>
        {/* ToDo List */}
        <div class={styles.card}>
          <div class={styles.cardImage}>
            <img src={todo} alt="ToDo List preview" />
          </div>
          <div class={styles.cardOverlay}>
            <div class={styles.cardHeader}>
              <h2 class={styles.cardTitle}>ToDo List</h2>
              <p class={styles.cardSubtitle}>
                A React Todo List app that helps users manage tasks. It features
                functionalities for adding, deleting, and marking tasks as
                complete, with a clean and interactive interface.
              </p>
            </div>
            <div class={styles.cardFooter}>
              <a
                href="https://todolyst.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class={styles.tag}
              >
                Live
              </a>
              <a
                href="https://github.com/isaandrea12/ToDoList"
                target="_blank"
                rel="noopener noreferrer"
                class={styles.tag}
              >
                Github
              </a>
            </div>
          </div>
        </div>
        {/* Calculator */}
        <div class={styles.card}>
          <div class={styles.cardImage}>
            <img src={calculator} alt="Calculator App preview" />
          </div>
          <div class={styles.cardOverlay}>
            <div class={styles.cardHeader}>
              <h2 class={styles.cardTitle}>Calculator</h2>
              <p class={styles.cardSubtitle}>
                A Calculator app that offers basic arithmetic functions like
                addition, subtraction, multiplication, and division.
              </p>
            </div>
            <div class={styles.cardFooter}>
              <a
                href="https://calculatormate.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class={styles.tag}
              >
                Live
              </a>
              <a
                href="https://github.com/isaandrea12/Calculator"
                target="_blank"
                rel="noopener noreferrer"
                class={styles.tag}
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ctaProjectsContainer}>
        <Link className={styles.ctaProjects} to="/">
          Go Back Home <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
