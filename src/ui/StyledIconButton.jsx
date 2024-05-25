"use client";
import { Button,Grid } from "@mui/material";
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

`;


const TextWrapper = styled.div`
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
`;

const StyledIconButton = ({ icon: Icon, buttonText, alternateText,color,borderColor ,width}) => {

  const [activeText, setActiveText] = useState(buttonText);
  const [isAnimating, setIsAnimating] = useState(false);


  useEffect(() => {
    let intervalId;

    if (alternateText) {
      intervalId = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveText(prev => prev === buttonText ? alternateText : buttonText);
          setIsAnimating(false);
        }, 500); // Time for text change in the middle of the animation
      }, 3000); // Change text every 3 seconds
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
        minWidth: width ||"300px",
        
        fontWeight: "700",
        fontSize: "16px",
        fontFamily: mont.style.fontFamily,
        color: color || "#FC8229",
        display: 'flex',
        justifyContent: 'flex-start', // Align items to the start
        alignItems: 'center',
        padding: '8px 16px', // Adjust padding as necessary
      }}
    >
        <TextWrapper style={{ opacity: isAnimating ? 0 : 1 }}>
        {activeText}
      </TextWrapper>
    </Button>
  );
};

export default StyledIconButton;
