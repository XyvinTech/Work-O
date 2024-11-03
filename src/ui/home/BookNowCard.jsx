"use client";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "../../Styles/home/BookNowCard.module.css";
import { mont } from "@/Theme/Theme";

const BookNowCard = ({
  imageSrc,
  title,
  description,
  buttonColor,
  backgroundColor,
  textColor,
  borderColor,
  button,
  link,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.content} style={{ backgroundColor }}>
        <div>
          <Typography variant="h4" sx={{ color: textColor }}>
            {title}
          </Typography>
          <Typography
            className={styles.descriptionTypography}
            variant="body1"
            style={{ fontFamily: mont.style.fontFamily }}
          >
            {description}
          </Typography>
        </div>
        <div className={styles.buttonContainer}>
          <Link href={link} passHref style={{ textDecoration: "none" }}>
            <Button
              variant={buttonColor}
              color={borderColor}
              sx={{
                fontWeight: "700",
                width: "180px",
                fontSize: "16px",
                padding: "10px 20px",
                "@media (max-width: 768px)": {
                  width: "150px",
                  fontSize: "6px",
                },
                "@media (max-width: 600px)": {
                  width: "150px",
                },
              }}
            >
              <Typography fontFamily={mont.style.fontFamily}>{button}</Typography>
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.styledImage} src={imageSrc} alt={title} layout="fill" />
      </div>
    </div>
  );
};

export default BookNowCard;
