import React from "react";
import styles from "./Projects.module.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const Projects = () => {
  return (
    <div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Projects.</h1>
      </div>
      <div className={styles.cardContainer}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Project Description
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className={styles.ctaProjectsContainer}>
        <Link className={styles.ctaProjects} to="/">
          Go Back Home <HiOutlineArrowLongRight />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
