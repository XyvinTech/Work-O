"use client";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const PlatformCard = ({ title, icon, number }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        padding: "10px",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        boxShadow: "none",
        background: "white",
        borderRadius: 0,
        overflow: "hidden",
        transition: "background 1.0s ease, box-shadow 0.3s ease",
        position: "relative",
        "&:hover": {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          background: "#FC8229",
        },
        "&:hover img": {
          opacity: 0.1,
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          padding: "20px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "rgba(0, 0, 0, 0.12)",
            fontSize: "34px",
            fontWeight: "bold",
          }}
        >
          {number}
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          marginTop={10}
          width={"90%"}
        >
          <img
            src={icon}
            alt="Frame"
            style={{
              height: "70px",
              width: "70px",
              marginBottom: "10px",
              "@media (max-width: 600px)": {
                height: "60px",
                width: "60px",
              },
            }}
          />
          <Typography
            variant={isMobile ? "h12" : "h3"}
            component="div"
            paddingBottom={"2px"}
          >
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "none",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
            padding: "20px",
            color: "white",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            transition: "display 0.3s ease",
            zIndex: 2,
          }}
          className="hover-content"
        >
          <Typography variant="h6" component="div" textAlign={"center"}>
            At Worko, our primary focus is on serving individuals looking to
            enhance their skill sets and advance their careers. Whether
            you&apos;re a recent graduate seeking your first job or a
            professional looking to upskill or career change, our training
            programs cater to individuals from all backgrounds.
          </Typography>
        </Box>

        <img
          src="/platform/Flower.png"
          alt="Flower"
          style={{
            height: "262px",
            width: "auto",
            position: "absolute",
            zIndex: 1,
            bottom: "-3%",
            right: "-2%",
            transition: "opacity 0.3s ease",
            "@media (max-width: 600px)": {
              height: "230px",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default PlatformCard;
