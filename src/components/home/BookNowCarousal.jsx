"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { useRef, useState } from "react";
import carouselData from "../../assets/json/BookNowCarouselData";
import styles from "../../Styles/home/BookNowCarousal.module.css";
import BookNowCard from "@/ui/home/BookNowCard";

const BookNowCarousal = () => {
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
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className={styles.slickSlider}
      >
        {carouselData.map((item, index) => (
          <Box key={index} className={styles.slideWrapper}>
            <BookNowCard
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              buttonColor={item.buttonColor}
              backgroundColor={item.backgroundColor}
              textColor={item.textColor}
              borderColor={item.borderColor}
              button={item.button}
              link={item.link}
            />
          </Box>
        ))}
      </Slider>
      <Box className={styles.buttonBox}>
        <img
          src={
            isPreviousClicked ? "/images/Button2.png" : "/images/Button1.png"
          }
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
    </div>
  );
};

export default BookNowCarousal;
