"use client";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function Header({ bgImg, title, subtitle, isHome, isButtons }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      height={isMobile ? "510px" : "680px"}
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
        textAlign={"center"}
        px={isMobile ? 2 : 20}
      >
        {title}
      </Typography>
      {(isHome || isMobile) && (
        <Typography
          variant="subtitle1"
          color={isHome ? "#3B3B3B" : "#fff"}
          textAlign={"center"}
        >
          {subtitle}
        </Typography>
      )}
      {!(isHome && isMobile) && isButtons && (
        <Stack direction={"row"} spacing={3}>
          <Button variant={"contained"}>Get the App</Button>
          <Button variant="outlined" color={isHome ? "primary" : "secondary"}>
            View services
          </Button>
        </Stack>
      )}
    </Stack>
  );
}

export default Header;
