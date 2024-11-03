"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import styles from "../../Styles/home/PromiseCard.module.css";

const PromiseCard = ({ title, description, icon }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <div className={styles.card}>
      <div className={styles.cardActionArea}>
        <Box
          padding="10px"
          display="flex"
          gap={isMobile ? "10px" : "12px"}
          flexDirection="column"
        >
          <img
            className={styles.flowerImage}
            src="/Home/Remaining/Flower.webp"
            alt="Flower"
          />
          <img className={styles.frameImage} src={icon} alt="Frame" />
          <Typography variant="cardHead" paddingBottom="2px">
            {title}
          </Typography>
          <Typography variant={isMobile ? "h7" : "h6"} lineHeight="24px">
            {description}
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default PromiseCard;
