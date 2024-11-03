"use client";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import TickIcon from "../../assets/icons/Tick.svg";

const PlatformMain = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <>
    
      <Stack
        direction={isMobile ? "column" : isTablet ? "column" : "row"}
        paddingTop={isTablet ? 6 :0}
        spacing={isMobile ? 2 :4}
        alignItems={"center"}
      >
        {!isMobile && (
          <img
            src="/platform/Main.png"
            alt="img"
            width={isMobile ? "255px" : "450px"}
            height={isMobile ? "291px" : "510px"}
          />
        )}
        <Stack
          direction="column"
          spacing={isMobile ? 2 : 2}
          paddingTop={isMobile ? 2 : isTablet ? 2 : 5}
          alignItems={isMobile && "center"}
        >
          <Typography variant={"h2"}>Explore our Worko App</Typography>
          <Typography variant={isMobile ? "h7" : "h10"} lineHeight={isMobile && "19px"}>
            Worko App is a powerful tool equipped with features like:
          </Typography>
          {isMobile && (
            <img
              src="/platform/Main.png"
              alt="img"
              width={isMobile ? "255px" : isTablet ? "700px" : "450px"}
              height={isMobile ? "291px" : "510px"}
            />
          )}
          <Box
            display="grid"
            gridTemplateColumns={isMobile ? "1fr 1fr" : "1fr 1fr 1fr"}
            gap={2}
            paddingTop={4}
          >
            <Stack direction="column" spacing={3}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <TickIcon />
                <Typography variant={isMobile ? "h7" : "h10"}>Digital ID</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <TickIcon />
                <Typography variant={isMobile ? "h7" : "h10"}>Task Management</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <TickIcon />
                <Typography variant={isMobile ? "h7" : "h10"}>Route Optimization</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <TickIcon />
                <Typography variant={isMobile ? "h7" : "h10"}>Audio</Typography>
              </Stack>
            </Stack>
            <Stack direction="column" spacing={3}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <TickIcon />
                <Typography variant={isMobile ? "h7" : "h10"}>Navigation support</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <TickIcon />
                <Typography variant={isMobile ? "h7" : "h10"}>Video Support</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <TickIcon />
                <Typography variant={isMobile ? "h7" : "h10"}>Chat</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <TickIcon />
                <Typography variant={isMobile ? "h7" : "h10"}>Asset Management</Typography>
              </Stack>
            </Stack>
            <Stack direction={"column"} spacing={3}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <TickIcon />
                <Typography variant={isMobile ? "h7" : "h10"}>Order Parts</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <TickIcon />
                <Typography variant={isMobile ? "h7" : "h10"}>
                  Worko Digital Kart
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default PlatformMain;
