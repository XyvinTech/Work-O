import { Button } from "@mui/material";
import styled from "styled-components";
import { mont } from "@/theme";
import { useEffect, useState } from "react";
import Link from "next/link";

const RoundIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #fc8229;
`;

const TextWrapper = styled.div`
  opacity: 1;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  transform: translateY(0);
  &.animating {
    opacity: 0;
    transform: translateY(-20px); // Adjust as needed
  }
`;

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
      startIcon={<RoundIcon><Icon /></RoundIcon>}
      sx={{
        border: `1px solid ${borderColor || "#FC8229"}`,
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
      <TextWrapper className={isAnimating ? 'animating' : ''}>
        {activeText}
      </TextWrapper>
    </Button>
  );
};

export default NavbarButton;
