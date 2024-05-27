"use client";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { cormo } from "@/theme";

function Service2({ title, description, img, gridComponent }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Stack
      direction={{ lg: "row-reverse", sm: "column" }}
      position={"relative"}
      px={isMobile && 2}
    >
      {isMobile && (
        <Typography
          fontSize={"25px"}
          fontWeight={"700"}
          fontFamily={cormo.style.fontFamily}
        >
          {title}
        </Typography>
      )}
      <Box
        width={isMobile ? "100%" : "60%"}
        display="flex"
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
      >
        <img src={img} height={isMobile ? "374px " : "538px"} />
        <img
          src="/images/ServiceElli2.png"
          height={isMobile ? "274px " : "430px"}
          style={{
            position: "absolute",
            transform: "scaleX(-1)",
            right: isMobile ? "10px" : "0",
            zIndex: "-1",
            bottom: !isMobile && "0px",
            top: isMobile && "8.6rem",
          }}
        />
        <img
          src="/images/ServiceElli.png"
          height={isMobile ? "374px " : "510px"}
          style={{
            transform: "scaleX(-1)",
            position: "absolute",
            right: isMobile ? "10px" : "0",
            zIndex: "-3",
            bottom: !isMobile && "0px",
            top: isMobile && "2.3rem",
          }}
        />
        {!isMobile && (
          <>
            <img
              src="/images/Vector.png"
              height={"92px"}
              style={{
                position: "absolute",
                transform: "scaleX(-1)",
                right: "20rem",
                top: "10rem",
                zIndex: "-1",
              }}
            />
            <img
              src="/images/flwr.png"
              height={"112px"}
              style={{
                position: "absolute",
                transform: "scaleX(-1)",
                right: "33rem",
                top: "6.6rem",
                zIndex: "-1",
              }}
            />
            <img
              src="/images/FrameEli.png"
              height={"32px"}
              style={{
                transform: "scaleX(-1)",
                position: "absolute",
                right: "35.5rem",
                top: "9.1rem",
                zIndex: "-2",
              }}
            />
            <img
              src="/images/FrameEli.png"
              height={"12px"}
              style={{
                position: "absolute",
                transform: "scaleX(-1)",
                right: "19.9rem",
                top: "15.1rem",
                zIndex: "-1",
              }}
            />
          </>
        )}
      </Box>
      <Stack width={isMobile ? "100%" : "80%"} pt={5} px={3}>
        <Box>
          {!isMobile && (
            <Typography
              fontSize={"49px"}
              fontWeight={"700"}
              fontFamily={cormo.style.fontFamily}
            >
              {title}
            </Typography>
          )}
          <Typography variant="h6" color={"#605F5E"}>
            {description}
          </Typography>
        </Box>

        <Grid container spacing={5} py={2} paddingTop={"50px"}>
          {gridComponent?.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} key={index} spacing={3}>
                <Stack>
                  {item.icon}
                  <Typography
                    fontSize={isMobile ? "25px" : "31px"}
                    variant="subtitle"
                    color={"#FC8229"}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="h6" color={"#605F5E"}>
                    {item.sub}
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Stack>
  );
}

export default Service2;
