"use client";
import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const AboutMain = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>theme.breakpoints.between("sm", "md"));
  const router = useRouter();
  return (
    <Box>
      <Stack
        direction={isMobile ? "column" :isTablet ? "column":  "row"}
        spacing={isMobile ? 2 :isTablet ? 2: 20}
        position={"relative"}marginTop={isMobile ? "40px" : "0px"}
      
      >
        <Box
          width={isMobile ? "100%" : isTablet?"100%":"50%"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img
            src={"/AboutUs/About.png"}alt="About"
            height={isMobile ? "300px " : "638px"}
          />
          {/* <img
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
          /> */}
        </Box>
        <Stack direction={"column"} spacing={isMobile ?2:4}   padding={isMobile?3:isTablet?3:0} paddingTop={isMobile?0:10}>
          <Typography variant="h2">Who are we?</Typography>
          <Typography
            variant={isMobile?"h7":"h5"}
           
            lineHeight={"27px"}
            paddingRight={isMobile ? "0px" : "80px"}textAlign={isMobile && "justify"}
          >
            At Worko, we are passionate about empowering gig workers to reach
            their full potential. Our mission is to provide essential skill
            development programs that align with industry standards, creating
            opportunities in the gig economy.
          </Typography>
          <Typography
            variant={isMobile?"h7":"h5"}
            
            lineHeight={"27px"}
            paddingRight={isMobile ? "0px" : "80px"}textAlign={isMobile && "justify"}
          >
            Through our programs, we bridge the gap between aspirations and
            opportunities. We believe that every individual deserves the chance
            to thrive in their chosen field, and with your support, we can make
            this vision a reality
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Button variant="navbar" fullWidth={isMobile} color="primary" onClick={() => router.push("/services")}>
              View Service
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AboutMain;
