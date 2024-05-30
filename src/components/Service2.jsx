"use client";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { cormo } from "@/theme";

function Service2({ title, description, img, gridComponent }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Stack
      direction={{ lg: "row-reverse", sm: "column" }}
      position={"relative"}
      px={isMobile && 2}spacing={6}
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
          width={isMobile ? "100%" : "50%"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          position="relative" // Ensure the second image can be positioned absolutely within this box
        >
          <img 
            src={img} 
            height={isMobile ? "180px" : "538px"} 
            style={{ 
              zIndex: 1, 
              position: 'relative', 
              left:"2px",
              top: isMobile ? '-10px' : '-43px',
            }} 
          />
        <img
          src="/images/ServiceFrame.png"
          height={isMobile ? "174px" : "504px"}
          style={{
            position: "absolute",
            zIndex: 0,
            bottom:isMobile?'-8px':'-5px'
          }}
        />
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
