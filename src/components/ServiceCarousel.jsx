"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import ServiceCard from "./ServiceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

const ServiceCarousel = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    cssEase: "linear",
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
          slidesToShow: 2, // Display one slide at a time on mobile
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <Box
      className="slider-container"
      sx={{
        overflow: "hidden",
        padding: "25px",
        "@media (max-width: 600px)": {
          padding: "0px",
        },
      }}
    >
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <ServiceCard
          image="/images/img1.png"
          title="Makeup Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        />
        <ServiceCard
          image="/images/img1.png"
          title="Makeup Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        />
        <ServiceCard
          image="/images/img1.png"
          title="Makeup Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        />
        <ServiceCard
          image="/images/img1.png"
          title="Makeup Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        />
        <ServiceCard
          image="/images/img1.png"
          title="Makeup Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        />
        <ServiceCard
          image="/images/img1.png"
          title="Makeup Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        />
      </Slider>
      <Box
        sx={{
          position: "absolute",
       
          right: "40px",
          display: "flex",
          gap: "10px",
        }}
      >
        <img
          src="/images/Button1.png"
          style={{ width: "48px", height: "48px" }}
          onClick={previous}
          alt="Previous"
        />
        <img
          src="/images/Button.png"
          style={{ width: "48px", height: "48px" }}
          onClick={next}
          alt="Next"
        />
      </Box>
    </Box>
  );
};

export default ServiceCarousel;
