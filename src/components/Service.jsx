"use client";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { cormo } from "@/theme";

function Service({ title, decription, img, gridComponent }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Stack
      direction={{ lg: "row", sm: "column" }}
      position={"relative"}
      px={isMobile && 2}
    >
      {isMobile && (
        <Typography
          fontSize={"25px"}
          fontWeight={"700"}
          fontFamily={cormo.style.fontFamily}
          order={{ sm: 1, lg: 2 }}
        >
          {title}
        </Typography>
      )}
      <Box
        width={isMobile ? "100%" : "45%"}
        display="flex"
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <img src={img} height={isMobile ? "374px " : "638px"} />
        <img
          src="/images/ServiceElli2.png"
          height={isMobile ? "274px " : "430px"}
          style={{
            position: "absolute",
            left: isMobile ? "10px" : "0",
            zIndex: "-1",
            bottom: !isMobile && "0",
            top: isMobile && "8.6rem",
          }}
        />
        <img
          src="/images/ServiceElli.png"
          height={isMobile ? "374px " : "510px"}
          style={{
            position: "absolute",
            left: isMobile ? "10px" : "0",
            zIndex: "-3",
            bottom: !isMobile && "0",
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
                left: "20rem",
                top: "8rem",
                zIndex: "-1",
              }}
            />
            <img
              src="/images/Vector.png"
              height={"92px"}
              style={{
                position: "absolute",
                left: "20rem",
                top: "8rem",
                zIndex: "-1",
              }}
            />
            <img
              src="/images/flwr.png"
              height={"112px"}
              style={{
                position: "absolute",
                left: "33rem",
                top: "4.7rem",
                zIndex: "-1",
              }}
            />
            <img
              src="/images/FrameEli.png"
              height={"32px"}
              style={{
                position: "absolute",
                left: "35.5rem",
                top: "7.2rem",
                zIndex: "-2",
              }}
            />
            <img
              src="/images/FrameEli.png"
              height={"12px"}
              style={{
                position: "absolute",
                left: "19.8rem",
                top: "13.2rem",
                zIndex: "-1",
              }}
            />
          </>
        )}
      </Box>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        width={isMobile ? "100%" : "50%"}
        pt={5}
      >
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
            {decription}
          </Typography>
        </Box>
        <Grid container spacing={5} py={2} paddingTop={"50px"}>
          {gridComponent?.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} key={index} spacing={3} >
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

export default Service;
