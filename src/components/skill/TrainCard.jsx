import { Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import styles from "../../Styles/skill/TrainCard.module.css";

const TrainCard = ({ title, image, description }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardActionArea}>
        <img src={image} alt={title} className={styles.cardMedia} />
        <div className={styles.cardContent}>
          <Typography
            gutterBottom
            variant="card"
            component="div"
            sx={{
              "@media (max-width: 600px)": {
                fontSize: "14px",
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "left",
              "@media (max-width: 600px)": {
                fontSize: "12px",
              },
            }}
            color="text.secondary"
          >
            {description}
          </Typography>
          <Link
            href="/enroll"
            passHref
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography
              className={styles.enrollNow}
              fontWeight={700}
              variant="h6"
            >
              Enroll Now
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainCard;
