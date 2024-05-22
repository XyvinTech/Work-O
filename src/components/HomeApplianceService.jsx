"use client";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import AcImage from "/public/images/ACservice.png";
import { cormo } from "@/theme";
import Repair from "../assets/icons/HomeRepair.svg";
import Refridgerator from "../assets/icons/Refrigerator.svg";
import WashingMachine from "../assets/icons/Washingmachine.svg";
import Maintance from "../assets/icons/Maintance.svg";
const HomeApplianceService = () => {
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
                Home Appliance Services
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                Comprehensive Appliance Repair: We offer repair services for
                refrigerators, washing machines, ovens, cooktops, and all other
                major home appliances to restore their optimal functioning.
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent={"center"}
            spacing={6}
          >
            <Stack direction="column" spacing={2}>
                <Repair/>
              <Typography variant="subtitle" color={"#FC8229"}  fontSize={isMobile ? "25px" : "31px"}>
                Appliances Repair
              </Typography>
              <Typography
                variant="h6"
                textAlign={"justified"}
                color={"#605F5E"}
              >
                Fast fixes for all your appliance issues and troubles
              </Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
                <Refridgerator/>
              <Typography variant="subtitle" color={"#FC8229"}  fontSize={isMobile ? "25px" : "31px"}>
                Refrigerators Repair
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                Trust our experts to diagnose and repair refrigerator problems
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent={"center"}
            spacing={6}
          >
            <Stack direction="column" spacing={2}>
                <WashingMachine/>
              <Typography variant="subtitle" color={"#FC8229"} fontSize={isMobile ? "25px" : "31px"}>
                Washing Machines
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                Keep your laundry running smoothly with our help.
              </Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
                <Maintance/>
              <Typography variant="subtitle" color={"#FC8229"} fontSize={isMobile ? "25px" : "31px"}>
                Maintance
              </Typography>
              <Typography variant="h6" color={"#605F5E"}>
                Our maintenance services ensure your appliances run smoothly
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Box>
         
          <img src="/images/Frame3.png" height={"834"} />
        </Box>
      </Stack>
    </Box>
  );
};

export default HomeApplianceService;
