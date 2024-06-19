"use client"
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import TickIcon from "../assets/icons/Tick.svg";

const PlatformMain = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));



  return (
    <Box>
      <Stack direction={isMobile ? "column" : isTablet ? "column" : "row"} paddingTop={isTablet && 6} spacing={isMobile ? 2 : 18} alignItems="center">
      
          <img src="/platform/Main.png" alt="img"  width={isMobile ? "100%" : isTablet ? "700px" : "450px"} height={isMobile ? "294px" : "510px"}/>
       
        <Stack direction="column" spacing={isMobile ? 2 : 2} paddingTop={isMobile ? 2 : isTablet ? 2 : 5}>
          <Typography variant="h2">Explore our Worko App</Typography>
          <Typography variant="h10">Worko App is a powerful tool equipped with features like:</Typography>
        
          <Stack direction={isMobile ? "column" : "row"} spacing={isMobile?2:13} paddingTop={4}>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" alignItems="center">
                <TickIcon />
                <Typography variant="h10">Digital ID</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <TickIcon />
                <Typography variant="h10">Task Management</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <TickIcon />
                <Typography variant="h10">Route Optimization</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <TickIcon />
                <Typography variant="h10">Audio</Typography>
              </Stack>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" alignItems="center">
                <TickIcon />
                <Typography variant="h10">Navigation support</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <TickIcon />
                <Typography variant="h10">Video Support</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <TickIcon />
                <Typography variant="h10">Chat</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <TickIcon />
                <Typography variant="h10">Asset Management</Typography>
              </Stack>
            </Stack>
            <Stack direction="column" spacing={2} >
              <Stack direction="row" alignItems="center">
                <TickIcon />
                <Typography variant="h10">Order Parts</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <TickIcon />
                <Typography variant="h10">Worko Digital Kart</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PlatformMain;
