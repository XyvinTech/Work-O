"use client"
import { Box, Button, Stack, useMediaQuery,Grid } from "@mui/material";
import { Typography } from "@mui/material";


const OurStory = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box>
    <Grid container spacing={isMobile ? 2 : 10} direction={isMobile ? "column" : "row"} alignItems="center">
      <Grid item xs={12} md={6}>
        <img
          src="/images/OurStory.png"
          alt="Our Story"
          style={{ width: "100%", height: "auto", objectFit: "cover",borderRadius: "4px" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Typography variant="h2">Our story</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              textAlign="justify"
              lineHeight={"27px"}
              sx={{ pr: isMobile ? 0 : 10 }}
            >
              Welcome to Worko, where we're not just shaping careers; we're
              shaping futures. As a non-profit organization, our mission is to
              empower individuals with the skills and knowledge needed to thrive
              in today's job market.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              textAlign="justify"
              lineHeight={"27px"}
              sx={{ pr: isMobile ? 0 : 10 }}
            >
              At Worko, we understand that the key to success lies in practical,
              job-oriented skills. That's why we offer comprehensive training
              programs designed to equip participants with the expertise demanded
              by industries across the board. Let's transform passion into
              profession and dreams into reality. Join us at Worko today.
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <Button variant="contained" color="primary">
                  Get App
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  View Service
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
  );
};

export default OurStory;
