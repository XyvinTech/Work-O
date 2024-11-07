import { Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { useServiceStore } from "@/Store/ServiceStore";
import styles from "../../Styles/home/ServiceCard.module.css";

const ServiceCard = ({ title, image, description, activetab }) => {
  const setSelectedService = useServiceStore((state) => state.setSelectedService);
  const setSelectedForm = useServiceStore((state) => state.setSelectedForm);

  const handleBookNow = () => {
    setSelectedService(title);
    setSelectedForm();
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardActionArea}>
        <div className={styles.cardMediaWrapper}>
          <img className={styles.cardMedia} src={image} alt="Service Image" />
        </div>
        <div
          className={styles.cardContent}
          style={{ height: activetab === 0 ? "30%" : "38%" }}
        >
          <div className={styles.contentWrapper}>
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
                textAlign: "match-parent",
                "@media (max-width: 600px)": {
                  fontSize: "12px",
                },
              }}
              color="text.secondary"
            >
              {description}
            </Typography>
          </div>
          <Link
            href="/contact"
            onClick={handleBookNow}
            passHref
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                marginTop: "auto",
                textAlign: "match-parent",
                "@media (max-width: 600px)": {
                  fontSize: "12px",
                },
              }}
              color="#3B3B3B"
            >
              Book Now
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
