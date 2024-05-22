"use client";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { cormo } from "@/theme";
import Hair from "../assets/icons/Hair.svg";
import Makeup from "../assets/icons/Makeup.svg";
import Spa from "../assets/icons/Spa.svg";
const BeautyService = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{ position: "relative", overflow: "hidden" }}
      paddingTop={isMobile ? 35 : 0}
      paddingRight={isMobile ? 0 : 20}
      paddingLeft={isMobile ? 4 : 0}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        alignItems={"center"}
        spacing={40}
      >
        <Box>
          <img
            src="/images/Ellipse1.png"
            height={"1019px"}
            style={{
              position: "absolute",
              zIndex: "-2",
              top: "150px",
              left: "-300px",
            }}
          />
          <img
            src="/images/Ellipse2.png"
            height={"797px"}
            style={{
              position: "absolute",
              zIndex: "-1",
              top: "250px",
              left: "-205px",
            }}
          />
          <img src="/images/Beautyservice.png" height={"834"} />
        </Box>
        <Stack alignItems={"center"} spacing={6}>
          <Stack spacing={1}>
            <Box>
              <Typography
                fontSize={isMobile ? "25px" : "49px"}
                fontWeight={"700"}
                fontFamily={cormo.style.fontFamily}
              >
                Beauty and Salon Services
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                We offer a range of beauty and salon services, including
                haircuts, coloring, styling, hair treatments, makeup (bridal,
                party, and lessons), massages, facials, waxing, and body
                treatments
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent={"center"}
            spacing={6}
          >
            <Stack direction="column" spacing={2}>
              <Hair />
              <Typography
                fontSize={isMobile ? "25px" : "31px"}
                variant="subtitle"
                color={"#FC8229"}
              >
                Hair Services
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                Elevate your style with our expert hair care. 
              </Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Makeup />
              <Typography
                fontSize={isMobile ? "25px" : "31px"}
                variant="subtitle"
                color={"#FC8229"}
              >
                Makeup Services
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                Enhance your beauty with our professional makeup artistry
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent={"center"}
            spacing={6}
          >
            <Stack direction="column" spacing={2}>
              <Spa />
              <Typography
                fontSize={isMobile ? "25px" : "31px"}
                variant="subtitle"
                color={"#FC8229"}
              >
                Spa Services
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                Relax and rejuvenate with our luxurious spa treatments
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default BeautyService;
