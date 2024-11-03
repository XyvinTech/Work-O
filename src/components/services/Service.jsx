"use client";
import { cormo } from "@/Theme/Theme";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";


function Service({ title, description, img, gridComponent }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>theme.breakpoints.between("sm", "md"));
  return (
    <Stack
      direction={{ lg: "row", sm: "column" }}
      position={"relative"}
     spacing={6}
    >
      {isMobile && (
        <Typography
          fontSize={"25px"}
          fontWeight={"700"}
          fontFamily={cormo.style.fontFamily}
          order={{ sm: 1, lg: 2 }}
          marginBottom={5}
          textAlign={"center"}
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
            height={isMobile ? "280px" : "538px"} />
          {/* <img 
            src={img}
            alt="img" 
            height={isMobile ? "280px" : "538px"} 
            style={{ 
              zIndex: 1, 
              position: 'relative', 
              left:"0px",
              top: isMobile ? '-20px' : '-45px',
              transition: 'transform 0.3s', // Add transition for smooth zoom effect
              "&:hover": {
                transform: 'scale(1.1)' // Zoom effect on hover
              } // Adjust the top value as needed to move the image up 
            }} 
          />
        <img
          src="/images/ServiceFrame.png"
          alt="img"
          height={isMobile ? "294px" : "504px"}
          style={{
            position: "absolute",
            zIndex: 0,
            bottom:"-10px"
          }}
        /> */}
      </Box>
      <Stack
        
        justifyContent={"center"}
        width={isMobile ? "100%" : isTablet?"100%":"50%"}
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

export default Service;
