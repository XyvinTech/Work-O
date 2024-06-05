"use client"
import { Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

const awards = [
  { src: "/Home/Remaining/Award1.webp", alt: "award1" },
  { src: "/Home/Remaining/Award2.webp", alt: "award2" },
  { src: "/Home/Remaining/Award3.webp", alt: "award3" },
  { src: "/Home/Remaining/Award4.webp", alt: "award4" },
  { src: "/Home/Remaining/Award5.webp", alt: "award5" },
  { src: "/Home/Remaining/Award2.webp", alt: "award2" },
  { src: "/Home/Remaining/Award1.webp", alt: "award2" },
];


function Achievements() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack bgcolor={"#FBF8F2"} p={isMobile ? 2 : 8} spacing={isMobile?2 : 10}>
      <Typography variant="h2" textAlign={"center"}>
        Our Achievements & Awards
      </Typography>
      <Grid container  justifyContent="space-between" spacing={isMobile && 2} >
        {awards.map((award, index) => (
          <Grid key={index} item xs={3} sm={1} sx={{ height: { xs:60, sm: 120 } }} spacing={isMobile && 10}>
            <img src={award.src} alt="award" height="100%" />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default Achievements;
