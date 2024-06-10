"use client";
import { Button } from "@mui/material";
import styled from "styled-components";
import { mont } from "@/theme";
import { useEffect, useState } from "react";

const RoundIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 135px;
  border: 1px solid #fc8229;
  transition: border-color 0.3s, background-color 0.3s;

  svg {
    fill: #fc8229;
    transition: fill 0.3s;
  }
`;

const TextWrapper = styled.div`
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
`;

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
        <RoundIcon>
          <Icon />
        </RoundIcon>
      }
      sx={{
        border: `1px solid ${borderColor || "#FC8229"}`,
        // minWidth: width || "300px",
        fontWeight: "700",
        fontSize: "16px",
        fontFamily: mont.style.fontFamily,
        color: color || "#FC8229",
        display: "flex",
        justifyContent: "flex-start", // Align items to the start
        alignItems: "center",
        padding: "8px 16px", // Adjust padding as necessary
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
              backgroundColor: "#fff", // Change background color of RoundIcon on hover
              svg: {
                fill: "#fff",
              },
            },
          },
        }),
      }}
    >
      <TextWrapper>{activeText}</TextWrapper>
    </Button>
  );
};

export default StyledIconButton;
