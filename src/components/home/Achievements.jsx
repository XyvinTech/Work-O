"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import styles from "../../Styles/home/Achivements.module.css";

const Achievements = ({ images }) => {
  const allImages = [...images, ...images];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      paddingTop={isMobile ? 5 : 10}
      marginTop={isMobile ? 5 : 10}
      bgcolor={"#FEEFE4"}
      paddingBottom={10}
    >
      <Typography variant="h2" paddingBottom={5} textAlign="center">
        Our Client
      </Typography>
      <section id="marquee">
        <div className={styles.styledContainer}>
          <div className={styles.styledPicContainer}>
            {allImages.map((imageUrl, index) => (
              <div key={index} className={styles.styledPic}>
                <img
                  src={imageUrl}
                  alt={`img${index}`}
                  className={styles.styledImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Box>
  );
};

export default Achievements;
