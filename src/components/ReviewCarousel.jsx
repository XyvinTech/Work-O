"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import styled from "styled-components";
import { useRef, useState } from "react";
import carouselData from "../assets/json/ReviewCarouselData";
import ReviewCard from "./ReviewCard";
const ButtonBox = styled(Box)`
  position: absolute;
  right: 40px;
  display: flex;
  gap: 10px;
  margin-top: 20px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Container = styled(Box)`
  overflow: hidden;
  @media (max-width: 600px) {
    height: 400px;
  }
`;
const StyledSlider = styled(Slider)`
.slick-slide {
  padding: 0 15px; 
  @media (max-width: 600px) {
    padding: 0px 10px; 
  };
   @media (max-width: 768px) {
    padding: 0px 10px; 
  }
}
  .slick-dots {
    left: 10px;
    bottom: -30px;
    text-align: left;
    @media (max-width: 600px) {
      text-align:center;
      bottom:-50px;
     }
    li {
      margin: 0;
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
  }
`;
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
  var settings = {
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
    <Container className="slider-container">
      <StyledSlider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
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
      </StyledSlider>
      <ButtonBox>
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
      </ButtonBox>
    </Container>
  );
};

export default ReviewCarousel;
