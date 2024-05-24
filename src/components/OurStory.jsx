"use client"
import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";


const OurStory = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box>
      
      <Stack direction={isMobile? "column":"row"} spacing={isMobile?2:7}>
        <img
          src="/images/OurStory.png"
          height={isMobile?"294px":"520px"}
          width={isMobile?"100%":"670px"}
          style={{ objectFit: "cover" }}
        />
        <Stack direction={"column"} spacing={4}>
          <Typography variant="h2">Our story</Typography>
          <Typography
            variant="h5"
            textAlign={"justify"}
            lineHeight={"27px"}
           
          >
            Welcome to Worko, where we're not just shaping careers; we're
            shaping futures. As a non-profit organization, our mission is to
            empower individuals with the skills and knowledge needed to thrive
            in today's job market.
          </Typography>
          <Typography
            variant="h5"
            textAlign={"justify"}
            lineHeight={"27px"}
          >
            At Worko, we understand that the key to success lies in practical,
            job-oriented skills. That's why we offer comprehensive training
            programs designed to equip participants with the expertise demanded
            by industries across the board.Let's transform passion into
            profession and dreams into reality. Join us at Worko today.
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Button variant="contained" color="primary">
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
