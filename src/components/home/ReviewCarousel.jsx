"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { useRef, useState } from "react";
import carouselData from "../../assets/json/ReviewCarouselData";
import styles from "../../Styles/home/ReviewCarousal.module.css";
import ReviewCard from "@/ui/home/ReviewCard";

const ReviewCarousel = () => {
  const [isPreviousClicked, setIsPreviousClicked] = useState(false);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
    setIsPreviousClicked(false);
  };

  const previous = () => {
    sliderRef.slickPrev();
    setIsPreviousClicked(true);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    waitForAnimate: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Box className={styles.container}>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className={styles.styledSlider}
      >
        {carouselData.map((item, index) => (
          <div key={index}>
            <ReviewCard
              image={item.image}
              title={item.title}
              description={item.description}
              subheader={item.subheader}
            />
          </div>
        ))}
      </Slider>
      <Box className={styles.buttonBox}>
        <img
          src={isPreviousClicked ? "/images/Button2.png" : "/images/Button1.png"}
          style={{ width: "48px", height: "48px" }}
          onClick={previous}
          alt="Previous"
        />
        <img
          src={isPreviousClicked ? "/images/Button3.png" : "/images/Button.png"}
          style={{ width: "48px", height: "48px" }}
          onClick={next}
          alt="Next"
        />
      </Box>
    </Box>
  );
};

export default ReviewCarousel;
