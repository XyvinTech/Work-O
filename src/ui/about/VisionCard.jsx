"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import styles from "../../Styles/about/VisionCard.module.css"; 

const VisionCard = ({ title, description, icon }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <div className={styles.card}>
      <div className={styles.cardActionArea}>
        <Box padding="10" gap="10px" display="flex" flexDirection="column">
          <img className={styles.flowerImage} src="/AboutUs/Flower.webp" alt="Flower" />
          <img className={styles.frameImage} src={icon} alt="Frame" />
          <Typography variant="cardHead">{title}</Typography>
          <Typography variant={isMobile ? "h7" : "h6"} lineHeight="24px">
            {description}
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default VisionCard;
