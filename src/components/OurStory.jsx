"use client";
import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import styled from "styled-components";

const OurStory = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const ImageContainer = styled.div`
    width: ${isMobile ? "100%" : "2300px"};
    height: ${isMobile ? "294px" : "520px"};
    overflow:hidden;
  `;

  const Image = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  `;

  return (
    <Box>
      <Stack direction={isMobile ? "column" : "row"} spacing={isMobile ? 2 : 6}>
        <ImageContainer>
          <Image src="/images/OurStory.png" />
        </ImageContainer>
        <Stack direction={"column"} spacing={4}>
          <Typography variant="h2">Our story</Typography>
          <Typography variant="h5" textAlign={"justify"} lineHeight={"27px"}>
            Welcome to Worko, where we're not just shaping careers; we're
            shaping futures. As a non-profit organization, our mission is to
            empower individuals with the skills and knowledge needed to thrive
            in today's job market.
          </Typography>
          <Typography variant="h5" textAlign={"justify"} lineHeight={"27px"}>
            At Worko, we understand that the key to success lies in practical,
            job-oriented skills. That's why we offer comprehensive training
            programs designed to equip participants with the expertise demanded
            by industries across the board.Let's transform passion into
            profession and dreams into reality. Join us at Worko today.
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Button variant="navbar" color="primary">
              Get App
            </Button>
            <Button variant="outlined" color="primary">
              View Service
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default OurStory;
