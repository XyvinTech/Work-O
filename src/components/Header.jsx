"use client";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header({ bgImg, title, subtitle, isHome, isButtons, height, mobile }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  return (
    <Stack
      sx={{
        position: "relative",
        overflow: "hidden",
        ...(bgImg && {
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
        }),
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      height={isMobile ? mobile || "510px" : height || "680px"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={2}
    >
      {isHome && (
        <img
          src="/assets/home/img/header.png"
          alt="Logo"
          height={isMobile ? "42px" : "84px"}
          style={{ marginTop: "50px" }}
        />
      )}
      <Typography
        variant="h1"
        color={isHome ? "#000" : "#fff"}
        textAlign={isMobile?"left":"center"}
        px={isMobile ? 2 : 20}
      >
        {title}
      </Typography>
      {(isHome || isMobile) && (
        <Typography
          variant={isMobile ? "h6" : "subtitle1"}
          color={isHome ? "#3B3B3B" : "#fff"}
          textAlign={"left"}
          padding={2}
        >
          {subtitle}
        </Typography>
      )}
      {!(isHome && isMobile) && isButtons && (
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={3}
          alignItems={"center"}
        >
          <Stack width={isMobile?"100%":"230px"}>
          {/* <Link href={"/get-the-app"} passHref target="_blank"style={{textDecoration:"none"}}> */}
            <Button variant={"contained"} onClick={() => router.push("/get-the-app")} >Get the App</Button>
          </Stack>
          <Stack width={"230px"}>
           
            <Button variant="outlined" onClick={() => router.push("/services")}color={isHome ? "primary" : "secondary"}>
              View services
            </Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}

export default Header;
