"use client";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import LandingForm from "../home/LandingForm";

function LandingHeader({ bgImg, title, isHome, height, mobile, top, isLand }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const router = useRouter();

  return (
    <Stack
      sx={{
        position: "relative",
        overflow: "hidden",
        ...(isLand && bgImg
          ? {
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -2,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: -1,
              },
            }
          : {
              backgroundColor: "#fff",
            }),
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      height={
        isMobile ? mobile || "910px" : isTablet ? "900px" : height || "680px"
      }
      alignItems={isLand ? "left" : "center"}
      justifyContent={isMobile ? "flex-start" : "center"}
      spacing={2}
      paddingTop={isMobile ? 20 : 0}
    >
      {isLand && (
        <Grid
          container
          spacing={2}
          paddingTop={isMobile ? 2 : 10}
          paddingLeft={2}
        >
          <Grid item md={7}>
            <Typography
              variant="h1"
              color={isLand ? "#fff" : "#000"}
              textAlign={"left"}
              paddingTop={isMobile ? 2 : 10}
              paddingBottom={isMobile ? 2 : 0}
              paddingRight={isMobile ? 4 : 20}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              lineHeight={2}
              color="#fff"
              paddingRight={isMobile ? 0 : 10}
              paddingBottom={isMobile ? 2 : 0}
            >
              Expert Services for AC, Refrigerator, Geyser, Washing Machine, and
              More. Repair, Installation, and Maintenance Service in the Comfort
              of your Home.
            </Typography>
          </Grid>
          <Grid
            item
            md={5}
            bgcolor={"white"}
            paddingLeft={3}
            paddingRight={3}
            borderRadius={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <LandingForm />
          </Grid>
        </Grid>
      )}
      {!isLand && (
        <Stack
          spacing={2}
          textAlign={isMobile ? "left" : "center"}
          px={isMobile ? 2 : 20}
        >
          <Typography
            variant="h1"
            color={isLand ? "#fff" : "#000"}
            textAlign={isLand ? "left" : isMobile ? "left" : "center"}
            paddingTop={top}
            width={isLand ? "52%" : "100%"}
            px={isLand ? 10 : isMobile ? 2 : 20}
          >
            Thank you for choosing{" "}
            <span style={{ color: "#FC8229" }}>Worko</span>
          </Typography>
          <Typography variant="h5" color="#605F5E">
            We&apos;re thrilled to have you as part of our family!
          </Typography>
          <Typography variant="h6" color="#605F5E">
            We appreciate your trust in us for your appliance repair and
            maintenance needs. Our team is dedicated to keeping your home
            running smoothly. If you need further assistance, we&apos;re always
            here to help!
          </Typography>
        </Stack>
      )}
    </Stack>
  );
}

export default LandingHeader;
