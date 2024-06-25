"use client";
import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import data from "../assets/json/TeamData";
const TeamCarousel = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>theme.breakpoints.between("sm", "md"));
  const router = useRouter();
  const ImageContainer = styled.div`
  img {
    height: 389px;
    width: 389px;
    transition: transform 0.7s ease;
     @media (max-width: 600px) {
     height: 289px;
    width: 289px;
  }
  }

  &:hover img {
    transform: scale(1.05); 
  }
`;

  return (
    <>
    {data.map((item, index) => (
    <Box
      marginTop={"60px"}
      padding={4}
      key={index}
      border={"1px solid rgba(0, 0, 0, 0.12)"}
    >
      <Stack direction={isMobile ? "column" :isTablet ? "column": "row"} spacing={isMobile ? 2 :isTablet ? 2: 8} alignItems={"center"}>
      <ImageContainer>
              <img src={item.image} alt="img" />
            </ImageContainer>
        <Stack
          direction={"column"}
          spacing={isMobile ? 2 : 0}
          paddingTop={isMobile ? 2 : 2}
        >
          <Typography variant="h2">{item.title}</Typography>
          <Typography variant="h4">{item.position}</Typography>
          <Typography
            variant={isMobile ? "h7" : "h5"}
            textAlign={isMobile && "justify"}
            lineHeight={"27px"}
            paddingTop={"30px"}
          >
           {item.description}
          </Typography>
        </Stack>
      </Stack>
    </Box>
     ))}</>
  );
};

export default TeamCarousel;
