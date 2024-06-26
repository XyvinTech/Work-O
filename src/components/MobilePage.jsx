"use client";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
const MobilePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box>
      <Stack
        direction={isMobile ? "column" : isTablet ? "column" : "row"}
        paddingTop={isTablet && 6}
        spacing={isMobile ? 2 : 4}
        alignItems="center"
      >
        <Stack
          direction="column"
          spacing={isMobile ? 2 : 2}
          paddingTop={isMobile ? 2 : isTablet ? 2 : 5}
        >
          <Typography variant="h2" textAlign={isMobile &&"center"}>
            Cutting Edge Mobile application for Field Engineers
          </Typography>
          <Typography variant={isMobile ? "h7" : "h10"}>
            Worko App is a powerful tool equipped with features like:
          </Typography>
          {isMobile &&
        <img
          src="/platform/Mobile.png"
          alt="img"
          width={isMobile ? "100%" : isTablet ? "700px" : "598px"}
          height={isMobile ? "294px" : "399px"}
        />}
          <Stack
            direction="row"
            spacing={2}
            paddingTop={4}
            alignItems="flex-start"
          >
            <img
              src="/platform/Icon8.png"
              alt="icon"
              width={"57px"}
              height={"57px"}
            />
            <Stack direction="column" spacing={1}>
              <Typography variant={isMobile ? "h5" : "h10"} fontWeight={"500"}>
                Access and update information when offline
              </Typography>
              <Typography variant={isMobile ? "h7" : "h6"} lineHeight={isMobile && "19px"}>
                View job details from anywhere without network connectivity.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            paddingTop={4}
            alignItems="flex-start"
          >
            <img
              src="/platform/Icon7.png"
              alt="icon"
              width={"57px"}
              height={"57px"}
            />
            <Stack direction="column" spacing={1}>
              <Typography variant={isMobile ? "h5" : "h10"} fontWeight={"500"}>
                Collaborate with backend SMEs with chat/audio/video
              </Typography>
              <Typography variant={isMobile ? "h7" : "h6"} lineHeight={isMobile && "19px"}>
                Access knowledge articles and communicate with experts.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            paddingTop={4}
            alignItems="flex-start"
          >
            <img
              src="/platform/Icon6.png"
              alt="icon"
              width={"57px"}
              height={"57px"}
            />
            <Stack direction="column" spacing={1}>
              <Typography variant={isMobile ? "h5" : "h10"} fontWeight={"500"}>
                Manage inventory in real time
              </Typography>
              <Typography variant={isMobile ? "h7" : "h6"} lineHeight={isMobile && "19px"}>
                Track your inventory and order parts on the job.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        {!isMobile &&
        <img
          src="/platform/Mobile.png"
          alt="img"
          width={isMobile ? "100%"  : "598px"}
          height={isMobile ? "294px" : "399px"}
        />}
      </Stack>
    </Box>
  );
};

export default MobilePage;
