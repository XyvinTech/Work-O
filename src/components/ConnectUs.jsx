"use client";
import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { Typography } from "@mui/material";
import bgImageFooter from "/public/assets/home/img/footer.png";

const Container = styled(Box)(() => ({
  backgroundImage: `url(${bgImageFooter.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "20px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "center", // Center the content horizontally
  justifyContent: "center", // Center the content vertically
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 1,
  },
  "& > *": {
    zIndex: 2,
  },
}));

const ConnectUs = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Container>
      <Stack
        direction={isMobile ? "column" : "row"}
        marginTop={"50px"}
        padding={isMobile ? "0px" : "30px"}
        spacing={isMobile ? 2 : 20}
        alignItems="center"
        justifyContent="center"
      >
        <img
          src="/images/connect.jpg"
          height={isMobile ? "294px" : "403px"}
          width={isMobile ? "100%" : "605px"}
          style={{ objectFit: "cover" }}
        />
        <Stack
          direction={"column"}
          spacing={2}
          alignItems="flex-start" // Always align items to the left
          textAlign="left" // Always align text to the left
        >
          <Typography variant="h7">Become a partner?</Typography>
          <Typography
            variant="h2"
            lineHeight={isMobile?"31px":"58px"}
            paddingRight={isMobile ? "0px" : "80px"}
          >
            Are you Interested in Worko’s Partnership?
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Button variant="contained" color="primary">
              Connect With Us
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ConnectUs;
