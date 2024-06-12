"use client";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import mobileImage from "/public/Home/Remaining/Mobile.png";
import QRImage from "/public/assets/get-the-app/img/QR_img.jpg";
import playStore from "/public/assets/get-the-app/img/google-play-badge.png";
import appStore from "/public/assets/get-the-app/img/app-store-badge.png";
import { mont } from "@/theme";
import Link from "next/link";

function GetApp() {
  
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>theme.breakpoints.between("sm", "md"));

  return (
    <Box sx={{ position: "relative" ,overflow:"hidden"}} marginBottom={"30px"}>
      <Stack direction={isMobile ? "column" : isTablet?"column":"row"} alignItems={"center"} spacing={isMobile?1:isTablet?4:0}>
        <Box>
          <Image
            src={mobileImage}
            height={isMobile ? 350 : 585}
            width={isMobile ? 420 : 700}
            alt="image"
          />
          {isMobile && (
            <img
              style={{ position: "absolute", top: 170, left:0, zIndex: -1 }}
              height={"141px"}
              width={"100%"}
              src={"/assets/get-the-app/img/small_polygon.png"}
              alt="shape"
            />
          )}
        
        </Box>
        <Stack spacing={isMobile?1:4} p={isMobile? 2:isTablet?7:0} paddingTop={isMobile && 0}>
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
              Download our Worko App on
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Image src={QRImage} height={100} width={100} alt="img" />
            <Stack direction={"column"} spacing={2} justifyContent={"center"}>
             <Link href="https://apps.apple.com/in/app/worko-user/id1670080837" passHref style={{textDecoration:"none"}}> <Image src={appStore} height={45} width={135} alt="img" /></Link>
             <Link href="https://play.google.com/store/apps/details?id=com.worko" passHref style={{textDecoration:"none"}}> <Image src={playStore} height={45} width={150} alt="img" /></Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {!isMobile  && !isTablet &&(
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
