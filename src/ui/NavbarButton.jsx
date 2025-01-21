import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "../Styles/NavbarButton.module.css";
import { mont } from "@/Theme/Theme";

const NavbarButton = ({
  icon: Icon,
  buttonText,
  alternateText,
  color,
  borderColor,
  width,
}) => {
  const [activeText, setActiveText] = useState(buttonText);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let intervalId;

    if (alternateText) {
      intervalId = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveText((prev) =>
            prev === buttonText ? alternateText : buttonText
          );
          setIsAnimating(false);
        }, 500); // Time for text change in the middle of the animation
      }, 2000); // Change text every 3 seconds
    }
    return () => clearInterval(intervalId);
  }, [buttonText, alternateText]);

  return (
    <Button
      startIcon={<div className={styles.roundIcon}><Icon /></div>}
      sx={{
        // border: `1px solid ${borderColor || "#FC8229"}`,
        minWidth: width || "300px",
        fontWeight: "700",
        fontSize: "16px",
        fontFamily: mont.style.fontFamily,
        color: color || "#FC8229",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "10px 16px",
        position: "relative", // Add relative position for TextWrapper
      }}
    >
      <div className={`${styles.textWrapper} ${isAnimating ? styles.animating : ''}`}>
        {activeText}
      </div>
    </Button>
  );
};

export default NavbarButton;
