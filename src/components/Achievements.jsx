"use client"
import { Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

const awards = [
  { src: "/assets/award/award1.png", alt: "award1" },
  { src: "/assets/award/award2.png", alt: "award2" },
  { src: "/assets/award/award3.png", alt: "award3" },
  { src: "/assets/award/award4.png", alt: "award4" },
  { src: "/assets/award/award5.png", alt: "award5" },
  { src: "/assets/award/award2.png", alt: "award2" },
  { src: "/assets/award/award1.png", alt: "award1" },
  { src: "/assets/award/award2.png", alt: "award2" },
];


function Achievements() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack bgcolor={"#FBF8F2"} p={isMobile ? 4 : 8} spacing={10}>
      <Typography variant="h2" textAlign={"center"}>
        Our Achievements & Awards
      </Typography>
      <Grid container  justifyContent="space-between" spacing={isMobile && 4}>
        {awards.map((award, index) => (
          <Grid key={index} item xs={3} sm={1} sx={{ height: { xs: 60, sm: 120 } }}>
            <img src={award.src} alt="award" height="100%" />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default Achievements;
