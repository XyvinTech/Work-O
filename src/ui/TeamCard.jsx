"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { cormo } from "@/theme";
import { useState } from "react";

const TeamCard = ({ image, title, description, hoverDescription }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [hover, setHover] = useState(false);

  return (
    <Box
      padding={"20px"}
      border={"1px solid rgba(0, 0, 0, 0.12)"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? "white" : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      <Box
        component="img"
        src={image}
        alt="Frame"
        style={{
          width: "100%",
          height: "299px",
          objectFit: "cover",
          opacity: hover ? 0 : 1,
          transition: "opacity 1s ease",
        }}
      />
      <Box padding={"15px"} width="100%">
        <Typography
          fontFamily={cormo.style.fontFamily}
          fontWeight={"700"}
          fontSize={"28px"}
          textAlign="left"
          style={{
            opacity: hover ? 0 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          textAlign="left"
          style={{
            opacity: hover ? 0 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          {description}
        </Typography>
      </Box>
      {hover && (
        <>
          <Box
            position="absolute"
            bottom={hover ? isMobile?"80%":"75%" : "0%"}
            left="0"
            width="100%"
            padding="10px"
            style={{
              transition: "bottom 1.2s ease",
            }}
          >
            <Typography
              fontFamily={cormo.style.fontFamily}
              fontWeight={"700"}
              fontSize={"28px"}
              textAlign="left"
            >
              {title}
            </Typography>
            <Typography variant="h6" textAlign="left">
              {description}
            </Typography>
          </Box>
          <Box
            width="100%"
            padding="10px"
            position="absolute"
            bottom={hover ? (isMobile ? "-0px" : "30px") : "-50px"}
            style={{
              opacity: hover ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          >
            <Typography variant="h6" textAlign="justify">
              {hoverDescription}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default TeamCard;
