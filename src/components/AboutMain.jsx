"use client";
import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";

const AboutMain = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box>
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={isMobile ? 2 :40}
      >
        
        <img
          src="/images/OurStory.png"
          height={isMobile ? "294px" : "520px"}
          width={isMobile ? "100%" : "670px"}
          style={{ objectFit: "cover" }}
        />
        <Stack direction={"column"} spacing={4} paddingTop={"100px"}>
          <Typography variant="h2">Who are we?</Typography>
          <Typography
            variant="h5"
            textAlign={"justify"}
            lineHeight={"27px"}
            paddingRight={isMobile ? "0px" : "80px"}
          >
            At Worko, we are passionate about empowering gig workers to reach
            their full potential. Our mission is to provide essential skill
            development programs that align with industry standards, creating
            opportunities in the gig economy.
          </Typography>
          <Typography
            variant="h5"
            textAlign={"justify"}
            lineHeight={"27px"}
            paddingRight={isMobile ? "0px" : "80px"}
          >
            Through our programs, we bridge the gap between aspirations and
            opportunities. We believe that every individual deserves the chance
            to thrive in their chosen field, and with your support, we can make
            this vision a reality
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Button variant="contained" color="primary">
              View Service
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AboutMain;
