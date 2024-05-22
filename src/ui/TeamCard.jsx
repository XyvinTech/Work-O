"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { cormo } from "@/theme";

const TeamCard = ({ image, title, description }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box 
      padding={"20px"} 
      border={"1px solid rgba(0, 0, 0, 0.12)"} 
      height={isMobile ? "416px" : "441px"}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      
      <img
        src={image}
        alt="Frame"
        style={{
          width: isMobile ? "100%" : "367px",
          height: "299px",
          objectFit: "cover"
        }}
      />
      <Box padding={"15px"} width="100%">
        <Typography
          fontFamily={cormo.style.fontFamily}
          fontWeight={"700"}
          fontSize={"28px"}
          textAlign="left"
        >
          {title}
        </Typography>
        <Typography variant="h6" textAlign="left">{description}</Typography>
      </Box>
    </Box>
  );
};

export default TeamCard;
