"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height:454px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: none;
  background: white;
  border-radius: 0;
  overflow: hidden;
  transition: background 1.0s ease, box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
     background: #FC8229;
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

const FlowerImage = styled.img`
  height: 262px;
  width: auto;
  position: absolute;
  z-index: 1;
  bottom: -3%;
  right: -2%;
   backgroundcolor: #f4f3f3;
  @media (max-width: 600px) {
    height: 230px;
    bottom: -3%;
  right: -2%;
  }
`;

const FrameImage = styled.img`
  height: 70px;
  width: 70px;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    height: 60px;
    width: 60px;
  }
`;

const NumberBox = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: rgba(0, 0, 0, 0.12);
  font-size: 34px;
  font-weight: bold;
`;
const HoverContent = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  text-align: left;
  padding: 20px;
  color: white;
  width: 100%;
  height: 100%;

  ${Card}:hover & {
    display: flex;
  }
`;

const NormalContent = styled.div`
  ${Card}:hover & {
    display: none;
  }
`;
const PlatformCard = ({ title, icon, number }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card>
      <CardActionArea>
        <NumberBox>{number}</NumberBox>
        <NormalContent> <Box display="flex" flexDirection="column" alignItems="flex-start" marginTop={10} width={"70%"}>
          <FrameImage src={icon} alt="Frame" />
          <Typography variant={isMobile?"h12":"h3"} component="div" paddingBottom={"2px"}>
            {title}
          </Typography>
        </Box></NormalContent> <HoverContent>
        
          <Typography variant="h6" component="div" textAlign={"center"}>
          At Worko, our primary focus is on serving individuals looking to enhance their skill sets and advance their careers. Whether you're a recent graduate seeking your first job or a professional looking to upskill or career change, our training programs cater to individuals from all backgrounds.
          </Typography>
        </HoverContent>
        <FlowerImage src="/platform/Flower.png" alt="Flower" />
      </CardActionArea>
    </Card>
  );
};

export default PlatformCard;
