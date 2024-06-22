"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 302px;
  padding: 10px;
  box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.06);
  background: white;
  border-radius: 0;
  overflow: hidden;

  transition: background 1s ease, box-shadow 0.3s ease;
  &:hover {
    background: #fc8229;
  };
   @media (max-width: 600px) {
    height: 180px;
    padding: 5px;
  }
`;

const CardActionArea = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 20px;
`;


const FrameImage = styled.img`
  height: 50px;
  width: 57px;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    height: 30px;
    width: 34px;
  }
`;

const NumberBox = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: rgba(0, 0, 0, 0.12);
  font-size: 34px;
  font-weight: bold;
   @media (max-width: 600px) {
     font-size: 20px;
  }
`;



const CdcCard = ({ title, icon, number,description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card>
      <CardActionArea>
        <NumberBox>{number}</NumberBox>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          marginTop={isMobile?1:5}
        >
          <FrameImage src={icon} alt="Frame" />
          <Typography
            variant={isMobile ? "h9" : "h10"}
            component="div"
            paddingBottom={"4px"} fontWeight={600}
          >
            {title}
          </Typography>
          <Typography
            variant={isMobile ? "h8" : "h5"}
            component="div"
            paddingBottom={"2px"}
          >
            {description}
          </Typography>
        </Box>
       
      </CardActionArea>
    </Card>
  );
};

export default CdcCard;
