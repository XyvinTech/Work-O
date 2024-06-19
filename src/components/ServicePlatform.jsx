"use client";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";


const ServicePlatform = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box>
      <Stack
        direction={isMobile ? "column" : isTablet ? "column" : "row"}
        paddingTop={isTablet && 6}
        spacing={isMobile ? 2 : 12}
        alignItems="center"
      >
        <img
          src="/platform/service.png"
          alt="img"
          width={isMobile ? "100%" : isTablet ? "700px" : "681px"}
          height={isMobile ? "294px" : "455px"}
        />
        <Stack
          direction="column"
          spacing={isMobile ? 2 : 2}
          paddingTop={isMobile ? 2 : isTablet ? 2 : 5}
        >
          <Typography variant="h2">
            Service 360 – Deliver service on every channel
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            paddingTop={4}
            alignItems="flex-start"
          >
            <img
              src="/platform/Icon1.png"
              alt="icon"
              width={"57px"}
              height={"57px"}
            />
            <Stack direction="column" spacing={1}>
              <Typography variant="h10">Omni channel Engagement</Typography>
              <Typography variant="h6">
                Communicate across traditional and modern channels.
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
              src="/platform/Icon5.png"
              alt="icon"
              width={"57px"}
              height={"57px"}
            />
            <Stack direction="column" spacing={1}>
              <Typography variant="h10">
                Real time support with live chat/audio/video
              </Typography>
              <Typography variant="h6">
                Chat/video 1 on 1 instantly or groups on any device.
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
              src="/platform/Icon2.png"
              alt="icon"
              width={"57px"}
              height={"57px"}
            />
            <Stack direction="column" spacing={1}>
              <Typography variant="h10">
                Deeper engagement with Whatsapp channel
              </Typography>
              <Typography variant="h6">
                Send all transactional alerts/notifications instantly.
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
              src="/platform/Icon3.png"
              alt="icon"
              width={"57px"}
              height={"57px"}
            />
            <Stack direction="column" spacing={1}>
              <Typography variant="h10">
                Automated BOTs for customer service
              </Typography>
              <Typography variant="h6">
                Enable customers to engage in messaging conversations in
                response to outbound messages via Whatsapp/Web integrations.
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
              src="/platform/Icon4.png"
              alt="icon"
              width={"57px"}
              height={"57px"}
            />
            <Stack direction="column" spacing={1}>
              <Typography variant="h10">
                Improve customer support with Service Task 360.
              </Typography>
              <Typography variant="h6">
                Track every customer interaction, attach proofs of service,
                audio, video, and chat conversations, and gather valuable
                customer ratings.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ServicePlatform;
