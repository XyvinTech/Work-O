"use client";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

const ConnectUs = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.between("sm", "md"));
  const router = useRouter();

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center", // Center the content horizontally
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          zIndex: 1,
        },
        "& > *": {
          zIndex: 2,
        },
      }}
    >
      <Stack
        direction={isMobile ? "column" : isTablet ? "column" : "row"}
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
          alt="image"
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
            lineHeight={isMobile ? "31px" : "58px"}
            paddingRight={isMobile ? "0px" : "80px"}
          >
            Are you Interested in Worko’s Partnership?
          </Typography>
          <Stack direction={"row"} spacing={2} width={"100%"}>
            <Button
              variant="navbar"
              fullWidth={isMobile}
              color="primary"
              onClick={() => router.push("/contact")}
            >
              Connect With Us
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ConnectUs;
