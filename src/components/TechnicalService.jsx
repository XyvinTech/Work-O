"use client";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { cormo } from "@/theme";
import Networking from "../assets/icons/Networking.svg";
import Installation from "../assets/icons/TechInstallation.svg";
import CCTV from "../assets/icons/cctv.svg";
import Laptop from "../assets/icons/Laptop.svg";
const TechnicalService = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  
  return (
    <Box
      sx={{ position: "relative", overflow: "hidden" }}
      paddingTop={isMobile ? 35 : 0}
      paddingLeft={isMobile ? 4 : 10}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        alignItems={"center"}
        spacing={20}
      >
        <Stack alignItems={"center"} spacing={6}>
          <Stack spacing={1}>
            <Box>
              <Typography
                fontSize={isMobile ? "25px" : "49px"}
                fontWeight={"700"}
                fontFamily={cormo.style.fontFamily}
              >
                Technical Services
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                We provide technical services including networking installation,
                maintenance, and troubleshooting, as well as CCTV installation,
                maintenance, and monitoring.
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent={"center"}
            spacing={6}
          >
            <Stack direction="column" spacing={2}>
              <Networking />
              <Typography
                variant="subtitle"
                color={"#FC8229"}
                fontSize={isMobile ? "25px" : "31px"}
              >
                Networking
              </Typography>
              <Typography
                variant="h6"
                textAlign={"justified"}
                color={"#605F5E"}
              >
                Our networking solutions optimize performance and reliability.
              </Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Installation />
              <Typography
                variant="subtitle"
                color={"#FC8229"}
                fontSize={isMobile ? "25px" : "31px"}
              >
                Installation
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                Our technicians ensure a smooth installation of your equipment
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent={"center"}
            spacing={6}
          >
            <Stack direction="column" spacing={2}>
              <CCTV />
              <Typography
                variant="subtitle"
                color={"#FC8229"}
                fontSize={isMobile ? "25px" : "31px"}
              >
                CCTV Installation
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                Enhance your security with our professional CCTV setup
              </Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Laptop />
              <Typography
                variant="subtitle"
                color={"#FC8229"}
                fontSize={isMobile ? "25px" : "31px"}
              >
                CCTV Maintance
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                Keep your surveillance system running smoothly with our help
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Box>
          <img src="/images/Frame2.png" height={"834"} />
        </Box>
      </Stack>
    </Box>
  );
};

export default TechnicalService;
