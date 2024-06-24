"use client"
import { Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

const awards = [
  { src: "/Home/Remaining/Client1.png", alt: "client" },
  { src: "/Home/Remaining/Client2.png", alt: "client" },
  { src: "/Home/Remaining/Client3.png", alt: "client" },
  { src: "/Home/Remaining/Client4.png", alt: "client" },
  { src: "/Home/Remaining/Client5.png", alt: "client" },
  { src: "/Home/Remaining/Client6.png", alt: "client" },
];


function Achievements() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <Stack bgcolor={"#FBF8F2"} p={isMobile ? 2 : 8} marginTop={isMobile?5:5} paddingTop={isMobile?6:12} paddingBottom={ isMobile?6:12}  spacing={isMobile?2 : 10}>
      <Typography variant="h2" textAlign={"center"}>
        Our Clients
      </Typography>
      <Grid container  justifyContent="space-between" >
        {awards.map((award, index) => (
          <Grid key={index} item xs={4} sm={1} md={2} 
          // sx={{
          //   height: isMobile ? 80 : isTablet ? 70 : 120,
          // }} paddingBottom={isMobile && 3}
          > 
            <img src={award.src} alt="award" height="100%" width={isMobile?"100px":"210px"} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default Achievements;
