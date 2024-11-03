"use client";
import { Typography, useMediaQuery } from "@mui/material";
import styles from "../../Styles/home/LocationCard.module.css";

const LocationCard = ({ title, image }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div className={styles.card}>
      <div className={styles.cardData}>
        <img className={styles.flowerImage} src={image} alt="Flower" />
        <Typography variant="subtitle1" textAlign="center">
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default LocationCard;
