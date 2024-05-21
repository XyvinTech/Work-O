"use client";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { cormo } from "@/theme";
import Repair from "../assets/icons/Repair.svg";
import Installation from "../assets/icons/Installation.svg";
import Maintance from "../assets/icons/Maintance.svg";
const AcService = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{ position: "relative",overflow:"hidden" }}
      paddingTop={isMobile ? 35 : 0}
      paddingRight={isMobile ? 0 : 20}
      paddingLeft={isMobile ? 4 : 0}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        alignItems={"center"}
       spacing={50}
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
          <img src="/images/ACservice.png" height={"834"} />
        </Box>
        <Stack alignItems={"center"} spacing={6}>
          <Stack spacing={1}>
            <Box>
              <Typography
                fontSize={isMobile ? "25px" : "49px"}
                fontWeight={"700"}
                fontFamily={cormo.style.fontFamily}
              >
                AC Services
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                We offer complete AC solutions, including maintenance,
                installation, and repair for both residential and commercial
                systems, ensuring optimal performance with skilled and certified
                technicians.
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent={"center"}
            spacing={6}
          >
            <Stack direction="column" spacing={2}>
              <Repair />
              <Typography
                fontSize={isMobile ? "25px" : "31px"}
                variant="subtitle"
                color={"#FC8229"}
              >
                AC Repair
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                Swift and reliable AC repair services to restore comfort to your
                space.
              </Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Installation />
              <Typography
                fontSize={isMobile ? "25px" : "31px"}
                variant="subtitle"
                color={"#FC8229"}
              >
                AC Installation
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                Professional AC installation services customized to your
                requirements.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent={"center"}
            spacing={6}
          >
            <Stack direction="column" spacing={2}>
              <Maintance />
              <Typography
                fontSize={isMobile ? "25px" : "31px"}
                variant="subtitle"
                color={"#FC8229"}
              >
                AC Maintenance
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                Keep your AC running smoothly with our maintenance services.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AcService;
