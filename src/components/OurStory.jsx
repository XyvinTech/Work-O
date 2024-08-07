"use client";
import { Box, Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const OurStory = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const router = useRouter();
  const ImageContainer = styled.div`
    width: ${isMobile ? "100%" :isTablet?"700px": "2300px"};
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
      <Stack direction={isMobile ? "column" :isTablet?"column": "row"}paddingTop={isTablet&&6} spacing={isMobile ? 2 :8}alignItems={"center"}>
        <ImageContainer>
          <Image src="/Home/Remaining/OurStory.png" alt="img" />
        </ImageContainer>
        <Stack direction={"column"} spacing={isMobile?2:4} paddingTop={isMobile?2:isTablet?2:5}>
          <Typography variant="h2">Our story</Typography>
          <Typography variant={isMobile?"h7":"h5"} textAlign={isMobile && "justify"} lineHeight={"27px"}>
            Welcome to Worko, where we're not just shaping careers; we're
            shaping futures. As a non-profit organization, our mission is to
            empower individuals with the skills and knowledge needed to thrive
            in today's job market.
          </Typography>
          <Typography variant={isMobile?"h7":"h5"} textAlign={isMobile && "justify"} lineHeight={"27px"}>
            At Worko, we understand that the key to success lies in practical,
            job-oriented skills. That's why we offer comprehensive training
            programs designed to equip participants with the expertise demanded
            by industries across the board.Let's transform passion into
            profession and dreams into reality. Join us at Worko today.
          </Typography>
          <Stack direction={isMobile?"column":"row"} spacing={2} >
          <Stack width={isMobile?"100%":"230px"} ><Button variant={"contained"}  onClick={() => router.push("/get-the-app")}>Get the App</Button></Stack>
          <Stack width={isMobile?"100%":"230px"} > <Button variant="outlined"onClick={() => router.push("/services")} color="primary">
              View Service
            </Button></Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default OurStory;
