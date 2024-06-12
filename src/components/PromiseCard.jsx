"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: none;
  background: white;
  border-radius: 0;
  overflow: hidden;
  &:hover {

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Box shadow */
  }
`;


const CardActionArea = styled.div`
  position: relative;
  
`;

const FlowerImage = styled.img`
  height: 262px;
  width: auto;
  position: absolute;
  z-index: 1;
  top: -10%;
  left: 52%;
  backgroundcolor: #f4f3f3;
  @media (max-width: 600px) {
    height: 230px;
    top: -8%;
    left:20%;
  },

`;

const FrameImage = styled.img`
  height: 70px;
  width: 70px;
  margin-top: 35%;
  @media (max-width: 600px) {
    height: 60px;
    width: 60px;
  }
`;

const PromiseCard = ({ title, description, icon }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  return (
    <Card>
      <CardActionArea>
        <Box
          padding={"10px"}
          display="flex"gap={isMobile?"10px":"12px"}
          flexDirection={"column"}
        >
          <FlowerImage src="/Home/Remaining/Flower.webp" alt="Flower" />
          <FrameImage src={icon} alt="Frame" />
          <Typography variant="cardHead"  paddingBottom={"2px"}>{title}</Typography>
          <Typography variant={isMobile?"h7":"h6"} lineHeight={"24px"}>
            {description}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default PromiseCard;
