"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import styles from "../../Styles/skill/CdcCard.module.css";

const CdcCard = ({ title, icon, number, description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={styles.card}>
      <div className={styles.cardActionArea}>
        <div className={styles.numberBox}>{number}</div>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          marginTop={isMobile ? 1 : 5}
        >
          <img src={icon} alt="Frame" className={styles.frameImage} />
          <Typography
            variant={isMobile ? "h9" : "h10"}
            component="div"
            paddingBottom="4px"
            fontWeight={600}
          >
            {title}
          </Typography>
          <Typography
            variant={isMobile ? "h8" : "h5"}
            component="div"
            paddingBottom="2px"
          >
            {description}
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default CdcCard;
