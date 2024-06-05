"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 232px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: none;
  background: white;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`;

const FlowerImage = styled.img`
  height: 57px;
  width: 57px;
  margin-bottom: 16px; /* Adjust spacing between image and text */
   transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.25); /* Zoom effect */
  }
`;

const LocationCard = ({ title ,image}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Card>
      <FlowerImage src={image} alt="Flower" />
      <Typography variant="subtitle1" textAlign={"center"}>
       {title}
      </Typography>
    </Card>
  );
};

export default LocationCard;
