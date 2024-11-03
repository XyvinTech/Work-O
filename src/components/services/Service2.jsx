"use client";
import { cormo } from "@/Theme/Theme";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";

function Service2({ title, description, img, gridComponent }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>theme.breakpoints.between("sm", "md"));
  return (
    <Stack
      direction={{ lg: "row-reverse", sm: "column" }}
      position={"relative"}
      spacing={isMobile?0:6}
    >
      {isMobile && (
        <Typography
          fontSize={"25px"}
          fontWeight={"700"}
          fontFamily={cormo.style.fontFamily}
          marginBottom={4} textAlign={"center"}
        >
          {title}
        </Typography>
      )}
       <Box
          width={isMobile ? "100%" : isTablet?"100%":"50%"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          position="relative" // Ensure the second image can be positioned absolutely within this box
        >
           <img 
            src={img} 
            alt="img"
            height={isMobile ? "280px" : "538px"} 
          />
          {/* <img 
            src={img} 
            alt="img"
            height={isMobile ? "280px" : "538px"} 
            style={{ 
              zIndex: 1, 
              position: 'relative', 
              left:"2px",
              top: isMobile ? '-21px' :isTablet?"-50px": '-30px',
            }} 
          /> */}
        {/* <img
          src="/images/ServiceFrame.png"
          alt="img"
          height={isMobile ? "274px" : "504px"}
          style={{
            position: "absolute",
            zIndex: 0,
            bottom:isMobile?'-8px':'-5px'
          }}
        /> */}
      </Box>
      <Stack width={isMobile ? "100%" :isTablet?"100%": "80%"} pt={5} px={isMobile?0:3}>
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
          <Typography variant={isMobile?"h7":"h6"} lineHeight={"24px"} color={"#605F5E"}>
            {description}
          </Typography>
        </Box>

        <Grid container spacing={5} py={2} paddingTop={"50px"}>
          {gridComponent?.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} key={index} spacing={3}>
                <Stack spacing={1}>
                  {item.icon}
                  <Typography
                    fontSize={isMobile ? "18px" : "31px"}
                    variant="subtitle"
                    color={"#FC8229"}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant={isMobile?"h7":"h6"} lineHeight={"24px"} color={"#605F5E"}>
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
