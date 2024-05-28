"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookNowCard from "@/ui/BookNowCard";
import { Box } from "@mui/material";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import carouselData from "../assets/json/BookNowCarouselData";
import StyledSkeleton from "./StyledSkeleton";

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
  padding: 0 10px;
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    left: 10px;
    bottom: -30px;
    text-align: left;

    li {
      margin: 0;
    }

    li button:before {
      color: orange;
      font-size: 8px;
    }

    li.slick-active button:before {
      color: orange;
      font-size: 8px;
    }
  }
`;

const BookNowCarousel = () => {
  const [isPreviousClicked, setIsPreviousClicked] = useState(false);
  const [loading, setLoading] = useState(true); 
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
    ],
  };
  useEffect(() => {
    const fetchData = async () => {
      // Simulate a fetch delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div
      className="slider-container"
      style={{
        overflow: "hidden",
        height: "415px",
        alignContent: "center",
        position: "relative",
      }}
    >
       {loading ? (
        <>
          <StyledSkeleton height="415px" />
          <StyledSkeleton height="415px" />
          <StyledSkeleton height="415px" />
        </>
      ) : (
        <>
      <StyledSlider
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
      </ButtonBox></>)}
    </div>
  );
};

export default BookNowCarousel;
