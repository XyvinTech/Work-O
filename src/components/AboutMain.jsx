"use client";
import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";

const AboutMain = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box>
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={isMobile ? 2 : 40}
        position={"relative"}
      >
        <Box
          width={isMobile ? "100%" : "50%"}
          display="flex"
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <img
            src={"/images/Service1.png"}
            height={isMobile ? "374px " : "638px"}
          />
          <img
            src="/images/ServiceElli2.png"
            height={isMobile ? "274px " : "430px"}
            style={{
              position: "absolute",
              left: isMobile ? "10px" : "0",
              zIndex: "-1",
              bottom: !isMobile && "0",
              top: isMobile && "6.2rem",
            }}
          />
          <img
            src="/images/ServiceElli.png"
            height={isMobile ? "374px " : "510px"}
            style={{
              position: "absolute",
              left: isMobile ? "10px" : "0",
              zIndex: "-3",
              bottom: !isMobile && "0",
              top: isMobile && "0",
            }}
          />
        </Box>
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
