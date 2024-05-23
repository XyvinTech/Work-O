"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookNowCard from "@/ui/BookNowCard";
import { Box } from "@mui/material";
import styled from "styled-components";
import { useRef } from "react";
import carouselData from "../assets/json/BookNowCarouselData";

const ButtonBox = styled(Box)`
  position: absolute;
  right: 40px;
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const SlideWrapper = styled(Box)`
  padding: 0 10px; // Adjust the spacing between slides here
`;

const BookNowCarousel = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
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
    ],
  };

  return (
    <div className="slider-container" style={{ overflow: "hidden", height: "515px", alignContent: "center" }}>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {carouselData.map((item, index) => (
          <SlideWrapper key={index}>
            <BookNowCard
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              buttonColor={item.buttonColor}
              backgroundColor={item.backgroundColor}
              textColor={item.textColor}
              borderColor={item.borderColor}
            />
          </SlideWrapper>
        ))}
      </Slider>
      <ButtonBox>
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
      </ButtonBox>
    </div>
  );
};

export default BookNowCarousel;
