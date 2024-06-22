"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import styled from "styled-components";
import Data from "../assets/json/ProvidedTraining";
import TrainingCard from "./TrainingCard";

const Container = styled(Box)`
  overflow: hidden;
  .slick-dots {
    bottom: -30px;
    text-align: right;
    li {
      margin: 0 2px;
    }
    li button:before {
      color: #FC8229;
      font-size: 8px;
    }
    li.slick-active button:before {
      color: #FC8229;
      font-size: 8px;
    }
  }
`;

const ProvidedTraining = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container className="slider-container"height={isMobile &&"900px"}>
      {isMobile ? (
        <Slider {...settings}>
          {Data.map((item, index) => (
            <div key={index}  >
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
    </Container>
  );
};

export default ProvidedTraining;
