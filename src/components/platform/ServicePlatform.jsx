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
        paddingTop={isTablet ? 6 : 0}
        spacing={isMobile ? 2 : 4}
        alignItems="center"
      >
        {!isMobile && (
          <img
            src="/platform/service.png"
            alt="img"
            width={isMobile ? "100%" : "581px"}
            height={isMobile ? "294px" : "455px"}
            style={{ objectFit: "cover" }}
          />
        )}
        <Stack
          direction="column"
          spacing={isMobile ? 2 : 2}
          paddingTop={isMobile ? 2 : isTablet ? 2 : 5}
        >
          <Typography variant="h2" textAlign={isMobile && "center"}>
            Service 360 – Deliver service on every channel
          </Typography>
          {isMobile && (
            <img
              src="/platform/service.png"
              alt="img"
              width={isMobile ? "100%" : "581px"}
              height={isMobile ? "294px" : "455px"}
            />
          )}
          <Stack
            direction="row"
            spacing={2}
            paddingTop={4}
            alignItems="flex-start"
          >
            <img
              src="/platform/Icon1.png"
              alt="icon"
              width={isMobile ? "41px" : "57px"}
              height={isMobile ? "41px" : "57px"}
            />
            <Stack direction="column" spacing={1}>
              <Typography variant={isMobile ? "h5" : "h10"} fontWeight={"500"}>
                Omni channel Engagement
              </Typography>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                lineHeight={isMobile && "19px"}
              >
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
              width={isMobile ? "41px" : "57px"}
              height={isMobile ? "41px" : "57px"}
            />
            <Stack direction="column" spacing={1}>
              <Typography variant={isMobile ? "h5" : "h10"} fontWeight={"500"}>
                Real time support with live chat/audio/video
              </Typography>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                lineHeight={isMobile && "19px"}
              >
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
              width={isMobile ? "41px" : "57px"}
              height={isMobile ? "41px" : "57px"}
            />
            <Stack direction="column" spacing={1}>
              <Typography variant={isMobile ? "h5" : "h10"} fontWeight={"500"}>
                Deeper engagement with Whatsapp channel
              </Typography>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                lineHeight={isMobile && "19px"}
              >
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
              width={isMobile ? "41px" : "57px"}
              height={isMobile ? "41px" : "57px"}
            />
            <Stack direction="column" spacing={1}>
              <Typography variant={isMobile ? "h5" : "h10"} fontWeight={"500"}>
                Automated BOTs for customer service
              </Typography>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                lineHeight={isMobile && "19px"}
              >
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
              width={isMobile ? "41px" : "57px"}
              height={isMobile ? "41px" : "57px"}
            />
            <Stack direction="column" spacing={1}>
              <Typography variant={isMobile ? "h5" : "h10"} fontWeight={"500"}>
                Improve customer support with Service Task 360.
              </Typography>
              <Typography
                variant={isMobile ? "h7" : "h6"}
                lineHeight={isMobile && "19px"}
              >
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
