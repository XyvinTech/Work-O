"use client";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import styles from "../../Styles/skill/TrainingCard.module.css";

const TrainingCard = ({
  img,
  head,
  audience,
  duration,
  eligibility,
  hours,
  partner,
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const router = useRouter();

  return (
    <Box
      marginTop={"60px"}
      padding={isMobile ? 2 : 4}
      boxShadow={
        isMobile
          ? "0.92px 0.92px 9.18px 0px rgba(0, 0, 0, 0.25)"
          : "1px 1px 10px 0px rgba(0, 0, 0, 0.25)"
      }
      height={isMobile ? "800px" : "auto"}
    >
      <Stack
        direction={isMobile || isTablet ? "column" : "row"}
        spacing={isMobile || isTablet ? 2 : 4}
        alignItems={isMobile ? "left" : "center"}
        justifyContent="space-between"
        height="100%"
      >
        {isMobile && (
          <Typography variant="cardHead" align="left">
            {head}
          </Typography>
        )}
        <div
          className={styles.imageContainer}
          style={{
            width: isMobile || isTablet ? "100%" : "477px",
            height: isMobile || isTablet ? "325px" : "355px",
          }}
        >
          <img src={img} alt="img" className={styles.image} />
        </div>
        <Stack spacing={2} width="100%" justifyContent="space-between" flexGrow={1}>
          {!isMobile && (
            <Typography variant="h12" align="left">
              {head}
            </Typography>
          )}
          <Grid container spacing={isMobile ? 0 : 2} alignItems="flex-start">
            {audience && (
              <Grid item xs={6} md={3} paddingBottom={4} paddingTop={2}>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <img
                    src="/SkillDevelopment/icon1.png"
                    width={isMobile ? "22px" : "29px"}
                    height={isMobile ? "22px" : "29px"}
                  />
                  <Stack direction="column" spacing={1}>
                    <Typography
                      variant={isMobile ? "h6" : "h10"}
                      fontWeight={700}
                      color={"#333333"}
                    >
                      Audience
                    </Typography>
                    <Typography
                      variant={isMobile ? "h7" : "h5"}
                      color={"#545050"}
                      fontWeight={"400"}
                    >
                      {audience}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            )}
            <Grid item xs={6} md={3} paddingBottom={4} paddingTop={2}>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <img
                  src="/SkillDevelopment/icon2.png"
                  width={isMobile ? "22px" : "29px"}
                  height={isMobile ? "22px" : "29px"}
                />
                <Stack direction="column" spacing={1}>
                  <Typography
                    variant={isMobile ? "h6" : "h10"}
                    fontWeight={700}
                    color={"#333333"}
                  >
                    Eligibility
                  </Typography>
                  <Typography
                    variant={isMobile ? "h7" : "h5"}
                    color={"#545050"}
                    fontWeight={"400"}
                  >
                    {eligibility}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3} paddingBottom={4} paddingTop={2}>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <img
                  src="/SkillDevelopment/icon3.png"
                  width={isMobile ? "22px" : "29px"}
                  height={isMobile ? "22px" : "29px"}
                />
                <Stack direction="column" spacing={1}>
                  <Typography
                    variant={isMobile ? "h6" : "h10"}
                    fontWeight={700}
                    color={"#333333"}
                  >
                    Duration
                  </Typography>
                  <Typography
                    variant={isMobile ? "h7" : "h5"}
                    color={"#545050"}
                    fontWeight={"400"}
                  >
                    {duration}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3} paddingBottom={4} paddingTop={2}>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <img
                  src="/SkillDevelopment/icon4.png"
                  width={isMobile ? "22px" : "29px"}
                  height={isMobile ? "22px" : "29px"}
                />
                <Stack direction="column" spacing={1}>
                  <Typography
                    variant={isMobile ? "h6" : "h10"}
                    fontWeight={700}
                    color={"#333333"}
                  >
                    No: of Hours
                  </Typography>
                  <Typography
                    variant={isMobile ? "h7" : "h5"}
                    color={"#545050"}
                    fontWeight={"400"}
                  >
                    {hours}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            {partner && (
              <Grid item xs={6} md={3} paddingBottom={4} paddingTop={2}>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <img
                    src="/SkillDevelopment/icon5.png"
                    width={isMobile ? "22px" : "29px"}
                    height={isMobile ? "22px" : "29px"}
                  />
                  <Stack direction="column" spacing={1}>
                    <Typography
                      variant={isMobile ? "h6" : "h10"}
                      fontWeight={700}
                      color={"#333333"}
                    >
                      Partner Institute
                    </Typography>
                    <Typography
                      variant={isMobile ? "h7" : "h5"}
                      color={"#545050"}
                      fontWeight={"400"}
                    >
                      {partner}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            )}
          </Grid>
          <Box paddingTop={2} width="100%" display="flex" justifyContent="start">
            <Button
              variant="navbar"
              color="primary"
              onClick={() => router.push("/enroll")}
            >
              Enroll Now
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TrainingCard;
