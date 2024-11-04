"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import styles from "../../Styles/skill/ProvidedTrainig.module.css";
import Data from "../../assets/json/ProvidedTraining";
import TrainingCard from "./TrainingCard";

const ProvidedTraining = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "5px",
  };

  return (
    <Box className={styles.sliderContainer} height={isMobile ? "900px" : "auto"}>
      {isMobile ? (
        <Slider {...settings} className={styles.slickDots}>
          {Data.map((item, index) => (
            <div key={index}>
              <TrainingCard
                img={item.img}
                head={item.head}
                audience={item.audience}
                duration={item.duration}
                eligibility={item.eligibility}
                hours={item.hours}
                partner={item.partner}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <Grid container spacing={2} paddingBottom={2}>
          {Data.map((item, index) => (
            <Grid key={index} item xs={12} md={12}>
              <TrainingCard
                img={item.img}
                head={item.head}
                audience={item.audience}
                duration={item.duration}
                eligibility={item.eligibility}
                hours={item.hours}
                partner={item.partner}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ProvidedTraining;
