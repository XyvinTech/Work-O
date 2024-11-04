"use client";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "../Styles/StyledIconButton.module.css";
import { mont } from "@/Theme/Theme";

const StyledIconButton = ({
  icon: Icon,
  buttonText,
  alternateText,
  color,
  borderColor,
  width,
  hover,
}) => {
  const [activeText, setActiveText] = useState(buttonText);

  useEffect(() => {
    let intervalId;

    if (alternateText) {
      intervalId = setInterval(() => {
        setTimeout(() => {
          setActiveText((prev) =>
            prev === buttonText ? alternateText : buttonText
          );
        }, 500); // Time for text change in the middle of the animation
      }, 1000); // Change text every 3 seconds
    }
    return () => clearInterval(intervalId);
  }, [buttonText, alternateText]);

  return (
    <Button
      startIcon={
        <div className={styles.roundIcon}>
          <Icon />
        </div>
      }
      sx={{
        border: `1px solid ${borderColor || "#FC8229"}`,
        fontWeight: "700",
        fontSize: "16px",
        fontFamily: mont.style.fontFamily,
        color: color || "#FC8229",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "8px 16px",
        transition: "background-color 0.3s, color 0.3s",
        ...(hover && {
          "&:hover": {
            backgroundColor: "#FC8229",
            color: "#fff",
            border: `1px solid ${"#FC8229"}`,
            "& .MuiButton-startIcon": {
              borderColor: "#fff",
            },
            "& .MuiButton-startIcon > div": {
              borderColor: "#fff",
              backgroundColor: "#fff",
              svg: {
                fill: "#fff",
              },
            },
          },
        }),
      }}
    >
      <div className={styles.textWrapper}>{activeText}</div>
    </Button>
  );
};

export default StyledIconButton;
