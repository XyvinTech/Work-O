"use client";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: none;
  background: white;
  border-radius: 0;
  overflow: hidden;
`;


const CardActionArea = styled.div`
  position: relative;
`;

const FlowerImage = styled.img`
  height: 335px;
  width: auto;
  position: absolute;
  z-index: 1;
  top: -25%; /* Adjusted positioning relative to the card container */
  left: 60%; /* Centered horizontally */
  backgroundcolor: #f4f3f3;
  @media (max-width: 600px) {
    height: 230px;
    top: -60px;
    left: 120px;
  }
`;

const FrameImage = styled.img`
  height: 70px;
  width: 70px;
  margin-top: 23%;
`;

const VisionCard = ({title,description,icon}) => {
  return (
    <Card>
      <CardActionArea>
        <Box padding={"10"} gap="10px" display="flex" flexDirection="column" >
          <FlowerImage src="/AboutUs/Flower.webp" alt="Flower" />
          <FrameImage src={icon} alt="Frame" />
          <Typography variant="cardHead">{title}</Typography>
          <Typography variant="h6" textAlign={"justify"}>{description}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default VisionCard;
