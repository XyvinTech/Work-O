"use client";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import mobileImage from "/public/assets/get-the-app/img/mobiles.png";
import QRImage from "/public/assets/get-the-app/img/QR.png";
import playStore from "/public/assets/get-the-app/img/google-play-badge.png";
import appStore from "/public/assets/get-the-app/img/app-store-badge.png";
import { mont } from "@/theme";

function GetApp() {
  
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box sx={{ position: "relative" }} paddingTop={isMobile && 35}>
      <Stack direction={isMobile ? "column" : "row"} alignItems={"center"} spacing={4}>
        <Box>
          <Image
            src={mobileImage}
            height={isMobile ? 290 : 585}
            width={isMobile ? 350 : 700}
          />
          {isMobile && (
            <img
              style={{ position: "absolute", top: 400, left:0, zIndex: -1 }}
              height={"201px"}
              width={"100%"}
              src={"/assets/get-the-app/img/small_polygon.png"}
              alt="shape"
            />
          )}
        </Box>
        <Stack spacing={6} p={isMobile && 2}>
          <Stack spacing={1}>
            <Typography
              fontSize={isMobile ? "12px" : "14px"}
              fontWeight={"700"}
              color={"#D7D6D6"}
              fontFamily={mont.style.fontFamily}
            >
              THE WORKO APP
            </Typography>
            <Typography variant="h2" textTransform={"capitalize"}>
              one stop destination for all your problems
            </Typography>
            <Typography
              fontSize={"16px"}
              fontWeight={"400"}
              color={"#1B1B1B"}
              fontFamily={mont.style.fontFamily}
            >
              Lorem ipsum dolor sit amet consectetur. Ac
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={3} alignItems={"center"}>
            <Image src={QRImage} height={100} width={100} />
            <Stack direction={"column"} spacing={2} justifyContent={"center"}>
              <Image src={appStore} height={45} width={135} />
              <Image src={playStore} height={45} width={150} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {!isMobile && (
        <img
          style={{ position: "absolute", bottom: -10, zIndex: -1 }}
          height={"204px"}
          width={"100%"}
          src={"/assets/get-the-app/img/polygon.png"}
          alt="shape"
        />
      )}
    </Box>
  );
}

export default GetApp;
