"use client";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 394px;
  padding: 10px;
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
  top: -150px;
  left: 538px;
  backgroundcolor: #f4f3f3;
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
        <Box padding={"10"}>
          <FlowerImage src="/images/flower.png" alt="Flower" />
          <FrameImage src={icon} alt="Frame" />
          <Typography variant="h3">{title}</Typography>
          <Typography variant="h6" textAlign={"justify"}>{description}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default VisionCard;
