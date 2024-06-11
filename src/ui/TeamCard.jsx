"use client";

import { Box, Typography, useMediaQuery } from "@mui/material";
import { cormo } from "@/theme";
import { useState, useEffect, useRef } from "react";

const TeamCard = ({ image, title, description, hoverDescription }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [hover, setHover] = useState(false);
  const [cardHeight, setCardHeight] = useState("auto");
  const hoverDescRef = useRef(null);

  useEffect(() => {
    if (hover && hoverDescRef.current) {
      setCardHeight(`${hoverDescRef.current.scrollHeight + (isMobile ? 100 : 0)}px`);
    } else {
      setCardHeight("auto");
    }
  }, [hover]);

  return (
    <Box
      padding={"20px"}
      border={"1px solid rgba(0, 0, 0, 0.12)"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      width="100%"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? "white" : "transparent",
        transition: "background-color 0.3s ease, height 0.5s ease",
        height: isMobile ? (hover ? cardHeight : "auto") : "auto",
      }}
    >
      <Box
        component="img"
        src={image}
        alt="Frame"
        style={{
          width: "100%",
          objectFit: "cover",
          opacity: hover ? 0 : 1,
          transition: "opacity 1s ease",
        }}
      />
      <Box paddingTop={"10px"} width="100%">
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
            bottom={hover ? (isMobile ? "80%" : "75%") : "0%"}
            left="0"
            width="100%"
            padding="20px"
            sx={{
              animation: hover
                ? "moveUp 1.2s ease forwards"
                : "moveDown 1.2s ease forwards",
              "@keyframes moveUp": {
                from: { bottom: "0%" },
                to: { bottom: isMobile ? "80%" : "75%" },
              },
              "@keyframes moveDown": {
                from: { bottom: isMobile ? "80%" : "75%" },
                to: { bottom: "0%" },
              },
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
            padding="20px"
            position="absolute"
            top={isMobile?"90px":"100px"}
            // bottom={isMobile ? "-80px" : "10px"}
            ref={hoverDescRef}
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