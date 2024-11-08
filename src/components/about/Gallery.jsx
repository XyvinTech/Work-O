"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, useMediaQuery } from "@mui/material";
import styles from "../../Styles/about/Gallery.module.css";

function Gallery() {
  const [isPreviousClicked, setIsPreviousClicked] = useState(false);
  const sliderRef = useRef(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const next = () => {
    sliderRef.current.slickNext();
    setIsPreviousClicked(false);
  };

  const previous = () => {
    sliderRef.current.slickPrev();
    setIsPreviousClicked(true);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider ref={sliderRef} {...settings}>
        <div className={styles.slideWrapper}>
          <img
            src="/AboutUs/Gallery1.png"
            style={{
              width: "100%",
              height: isMobile ? "100%" : "100%",
              objectFit: "cover",
            }}
            alt="Gallery 1"
          />
        </div>
        <div className={styles.slideWrapper}>
          <img
            src="/AboutUs/Gallery2.png"
            style={{
              width: "100%",
              height: isMobile ? "100%" : "100%",
              objectFit: "cover",
            }}
            alt="Gallery 2"
          />
        </div>
        <div className={styles.slideWrapper}>
          <img
            src="/AboutUs/Gallery3.png"
            style={{
              width: "100%",
              height: isMobile ? "100%" : "100%",
              objectFit: "cover",
            }}
            alt="Gallery 3"
          />
        </div>
        <div className={styles.slideWrapper}>
          <img
            src="/AboutUs/Gallery4.png"
            style={{
              width: "100%",
              height: isMobile ? "100%" : "100%",
              objectFit: "cover",
            }}
            alt="Gallery 4"
          />
        </div>
      </Slider>
      <Box className={styles.buttonBox} display={isMobile ? "none" : "flex"}>
        <img
          src={
            isPreviousClicked ? "/images/Button2.png" : "/images/Button1.png"
          }
          style={{
            width: "48px",
            height: "48px",
            marginRight: "10px",
          }} /* Added margin-right */
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
}

export default Gallery;
